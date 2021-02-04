import PuzzleCard from './puzzleCard';
import {Puzzle} from './puzzle';
import {GameState} from './state';
import {PuzzleReward} from './ENUM';
import Paragraph from './paragraph';

//Puzzle solved
document.addEventListener('click', (e:any) : void=>{

    if(e.target.className === 'solvePuzzle'){

        const puzzleID: string = e.target.id;

        //Run validation puzzle function
        solvePuzzle(puzzleID, state, puzzleArray, puzzleCardArray, paragraphArray);
    }

})

//Solve puzzle function
/*
    @param {puzzleDOM} - id of the current puzzle
    @param {state} - gameState object
*/
const solvePuzzle = (puzzleDOM: string, state: GameState, puzzleArray: Array<Puzzle>, puzzleCardArray: Array<PuzzleCard>, paragraphs: Array<Paragraph>):void=>{

    //Getting value - password typed by the user
    const passwordValue = (<HTMLInputElement>document.querySelector(`#${puzzleDOM}input`)).value;

    const currentPuzzle : Puzzle = getPuzzle(puzzleDOM, puzzleArray);

    if(passwordValue === currentPuzzle.solution){
        //Get reward
        rewardPuzzle(puzzleDOM, puzzleArray, puzzleCardArray, state);
        //Find paragraph
        const puzzleParagraph : Paragraph = paragraphs.find((c:Paragraph)=>c.id===puzzleDOM);
        //Read/add paragraph to the state //DOM function with paragraph text
    }else{
        //Run function that will tell that the password is incorrect
    }

}

//Get puzzle reward
const rewardPuzzle = (id: string, puzzleArray: Array<Puzzle>, puzzleCardArray: Array<PuzzleCard>, state: GameState): void => {
    //Find the puzzle
    const currentPuzzle: Puzzle = getPuzzle(id, puzzleArray);
    //Use switch to get other evidence or progress
    switch(currentPuzzle.reward){
        case PuzzleReward.EVIDENCE:
            //Add evidence to the state
            state.addEvidencesId('Evidence');
            break;
        case PuzzleReward.PROGRESSPOINT:
            //Add progressPoint to the state
            state.addProgressPoint();
            break;
    }
    //Read paragraph

    //Remove puzzle from the state
    state.removePuzzle(id);
}

//Get puzzle card and main puzzle object base on id
/*
    @param {ID} - id of the puzzle - same as field
    @param {puzzleArray/puzzleCardArray} - array which stores all of the puzzles/puzzle cards
*/
const getPuzzle = (ID: string, puzzleArray: Array<Puzzle>) : Puzzle=>{
    return puzzleArray.find((c : Puzzle)=>c.id===ID);
}
const getPuzzleCard = (ID: string, puzzleCardArray: Array<PuzzleCard>) : PuzzleCard => {
    return puzzleCardArray.find((c:PuzzleCard)=>c.id===ID);
}

//Add puzzle to the state
/*
    @param {state} - gameState object
    @param {id} - id of the filed - same as puzzle id
*/
const newPuzzle = (state: GameState, id: string): void =>{

    //Check if we have active puzzle
    if(state.userPuzzlesId.includes(id)){
        return;
    }
    //If not push to the state (whick means it's active)
    state.addPuzzlesId(id);
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
    const puzzleObj : Puzzle = getPuzzle(id, puzzleArray);

    //Push this ID to puzzle object (which means we got it)
    puzzleObj.addVisitedCard(puzzleCard.id);

}

export {newPuzzle, newPuzzleCard};