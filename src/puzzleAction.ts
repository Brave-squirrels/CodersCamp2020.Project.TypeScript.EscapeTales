import PuzzleCard from './puzzleCard';
import {Puzzle} from './puzzle';
import {PuzzleReward} from './ENUM';
import Paragraph from './paragraph';
import {read, incorrectPuzzle} from './readContent';
import {updatePuzzleDOM, updateEvidencesDOM, updateProgressDOM} from './updateDOM';
import {getStateLS} from './getLS';
import { updatePuzzleLS, updateStateLS } from './updateLS';

//Get puzzle card and main puzzle object base on id
/*
    @param {ID} - id of the puzzle - same as field
    @param {puzzleArray/puzzleCardArray} - array which stores all of the puzzles/puzzle cards
*/
const getPuzzle = (ID: string, puzzleArray: Array<Puzzle>) : Puzzle=>{
    return puzzleArray.find((c : Puzzle)=>c.id===ID)!;
}
const getPuzzleCard = (ID: string, puzzleCardArray: Array<PuzzleCard>) : PuzzleCard => {
    return puzzleCardArray.find((c:PuzzleCard)=>c.id===ID)!;
}

//Solve puzzle function
/*
    @param {puzzleDOM} - id of the current puzzle
    @param {state} - gameState object
    @param {puzzleArray} - array of all puzzle objects
    @param {puzzleCardArray} - array of all puzzle cards
    @param {paragraphs} - array of all paragraphs
*/
const solvePuzzle = (puzzleDOM: string, puzzleArray: Array<Puzzle>, paragraphs: Array<Paragraph>):void=>{

    //Getting value - password typed by the user
    const passwordValue = (<HTMLInputElement>document.querySelector(`#${puzzleDOM}input`)).value;

    //Getting puzzle object
    const currentPuzzle : Puzzle = getPuzzle(puzzleDOM, puzzleArray);

    //Check if solution is correct
    if(passwordValue === currentPuzzle.solution){
        //Get reward
        rewardPuzzle(puzzleDOM, puzzleArray);
        //Find paragraph
        let puzzleParagraph;
         paragraphs.forEach((c : Paragraph) => {
            if(c.id===`${puzzleDOM}solve`){
                puzzleParagraph = c;
            }
        })!;
        //Add paragraph to the state
        const state = getStateLS();
        state.addParagraphsId(puzzleParagraph.id);
        //DOM function with paragraph and solve content
        updateStateLS(state);
        read(puzzleParagraph);
    }else{
        //Run DOM function that will tell that the password is incorrect
        incorrectPuzzle();
    }

}

//Get puzzle reward
/*
    @param {id} - ID of puzzle
    @param {puzzleArray} - array of all puzzle objects
    @param {state} - GameState object
*/
const rewardPuzzle = (id: string, puzzleArray: Array<Puzzle>) => {
    //Find the puzzle
    const currentPuzzle: Puzzle = getPuzzle(id, puzzleArray);
    //Use switch to get other evidence or progress
    if(currentPuzzle.reward===PuzzleReward.EVIDENCE){
         //Add evidence to the state
         const stateEv = getStateLS();
         stateEv.addEvidencesId(id);
         //Update evidences in interface
         updateStateLS(stateEv);
         updateEvidencesDOM();
    }else if (currentPuzzle.reward===PuzzleReward.PROGRESSPOINT){
        const statePR = getStateLS();
            if(statePR.progressPoints===0){
                statePR.addProgressPoint(1);
            }else{
                statePR.addProgressPoint(2);
            }
            //Update progressPoints in interface
            updateStateLS(statePR);
            updateProgressDOM();
    }
    const stateRm = getStateLS();
    //Remove puzzle from the state
    stateRm.removePuzzle(id);
    updateStateLS(stateRm);
    //Update puzzleCards and puzzle's in interface
    updatePuzzleDOM(stateRm, puzzleArray);
    (document.querySelector(".puzzle") as HTMLElement).style.display = 'none';
}

//Add puzzle to the state
/*
    @param {state} - gameState object
    @param {id} - id of the filed - same as puzzle id
*/
const newPuzzle = (id: string, puzzleArray: Array<Puzzle>, puzzleCardArray: Array<PuzzleCard>): void =>{
    const state = getStateLS();
    //Check if we have active puzzle
    if(state.userPuzzlesId.includes(getPuzzleCard(id, puzzleCardArray).puzzleId)){
        return;
    }
    //If not push to the state (which means it's active)
    let puz = '';
    puzzleArray.forEach(e=>{
        e.puzzleCards.forEach(n=>{
            if(n===id){
                puz = e.id;
            }
        })
    })
    state.addPuzzlesId(puz);
    //Update puzzle interface
    updatePuzzleDOM(state, puzzleArray);
    updateStateLS(state);
}

//Add puzzle card to the puzzle object
/*
    @param {id} - id of the filed - same as puzzleCard id
    @param {puzzleCardArray} - array of all puzzle cards
    @param {puzzleArray} - array of all Puzzle objects
*/
const newPuzzleCard = (id: string, puzzleCardArray: Array<PuzzleCard>, puzzleArray: Array<Puzzle>): void =>{

    //Find puzzle card in array with current ID
    const puzzleCard : PuzzleCard = getPuzzleCard(id, puzzleCardArray);
    const puzzleObj : Puzzle = getPuzzle(puzzleCard.puzzleId, puzzleArray);
    //Push this ID to puzzle object (which means we got it)
    puzzleObj.addVisitedCard(puzzleCard.id);
    const puzzleArrayMain = puzzleArray;
    updatePuzzleLS(puzzleArrayMain);
}

export {newPuzzle, newPuzzleCard, solvePuzzle, getPuzzle, getPuzzleCard};