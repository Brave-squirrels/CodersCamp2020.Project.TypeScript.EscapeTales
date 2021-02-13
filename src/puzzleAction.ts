import PuzzleCard from './puzzleCard';
import {Puzzle} from './puzzle';
import {PuzzleReward} from './ENUM';
import Paragraph from './paragraph';
import {read, incorrectPuzzle} from './readContent';
import  * as updateDOM from './updateDOM';
import {getStateLS} from './getLS';
import * as updateLS from './updateLS';

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
    @param {puzzleArray} - array of all puzzle objects
    @param {paragraphs} - array of all paragraphs
*/
const solvePuzzle = (puzzleDOM: string, puzzleArray: Array<Puzzle>, paragraphs: Array<Paragraph>):void=>{

    //Getting value - password typed by the user
    const passwordValue = (<HTMLInputElement>document.querySelector(`#${puzzleDOM}input`)).value;

    //Getting puzzle object
    const currentPuzzle : Puzzle = getPuzzle(puzzleDOM, puzzleArray);

    //Check if solution is correct
    if(passwordValue.toLowerCase() === currentPuzzle.solution){

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

        //Update LS state
        updateLS.updateStateLS(state);

        //DOM function with paragraph and solve content
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
*/
const rewardPuzzle = (id: string, puzzleArray: Array<Puzzle>) => {

    //Find the puzzle
    const currentPuzzle: Puzzle = getPuzzle(id, puzzleArray);

    //Check content of the reward

    switch(currentPuzzle.reward){
        case PuzzleReward.EVIDENCE:
             //Add evidence to the state
            const stateEv = getStateLS();
            stateEv.addEvidencesId(id);

            //Update evidences in interface and LS state
            updateLS.updateStateLS(stateEv);
            updateDOM.updateEvidencesDOM();
        break;
        case PuzzleReward.PROGRESSPOINT:
            //Increment amount of points
            const statePR = getStateLS();
            statePR.progressPointInc();

            //Update progressPoints in interface and LS state
            updateLS.updateStateLS(statePR);
            updateDOM.updateProgressDOM();
        break;
    }

    const stateRm = getStateLS();
    //Remove puzzle from the state
    stateRm.removePuzzle(id);
    updateLS.updateStateLS(stateRm);
    //Update puzzleCards and puzzle's in interface
    updateDOM.updatePuzzleDOM(stateRm, puzzleArray);
    (document.querySelector(".puzzle") as HTMLElement).style.display = 'none';
}

//Add puzzle to the state
/*
    @param {id} - id of the filed - same as puzzle id
    @param {puzzleArray} - array of all the puzzles
    @param {puzzleCardArray} - array of all puzzleCards
*/
const newPuzzle = (id: string, puzzleArray: Array<Puzzle>, puzzleCardArray: Array<PuzzleCard>): void =>{

    //Get state from LS
    const state = getStateLS();
    //Check if we have active puzzle
    if(state.userPuzzlesId.includes(getPuzzleCard(id, puzzleCardArray).puzzleId)){
        return;
    }

    //If not push to the state (which means it's active) - find base on puzzleID from puzzle card
    let puzzleID = '';
    puzzleArray.forEach((e : Puzzle)=>{
        e.puzzleCards.forEach((cardID : string)=>{
            if(cardID===id){
                puzzleID = e.id;
            }
        })
    })

    //Update state
    state.addPuzzlesId(puzzleID);
    //Update puzzle interface and state LS
    updateDOM.updatePuzzleDOM(state, puzzleArray);
    updateLS.updateStateLS(state);
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
    //Update LS
    const puzzleArrayMain = puzzleArray;
    updateLS.updatePuzzleLS(puzzleArrayMain);
}

export {newPuzzle, newPuzzleCard, solvePuzzle, getPuzzle, getPuzzleCard};