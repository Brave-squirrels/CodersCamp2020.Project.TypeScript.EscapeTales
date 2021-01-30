import {readParagraph} from './board';

//Puzzle solved
document.addEventListener('click', (e:any) : void=>{

    if(e.target.className === 'solvePuzzle'){

        const puzzleID: string = e.target.id;

        //Run validation puzzle function
        solvePuzzle(puzzleID, state);
    }

})

//Solve puzzle function
/*
    @param {puzzleDOM} - id of the current puzzle
    @param {state} - gameState object
*/
const solvePuzzle = (puzzleDOM: string, state: State):void=>{

    //Getting value - password typed by the user
    const passwordValue = (<HTMLInputElement>document.querySelector(`#${puzzleDOM}input`)).value;

    const currentPuzzle : Puzzle = getPuzzle(puzzleDOM, puzzleArray);

    if(passwordValue === currentPuzzle.password){
        //Read/add paragraph to the state
        //Get reward
        //Remove puzzle from state
    }else{
        //Incorrect
    }

}

//Remove puzzle
const removePuzzle = (id: string, puzzleArray: Array<puzzleArray>, state: State):void =>{
    const index = state.puzzle.indexOf(id);
    state.puzzle.splice(index,1);
    readParagraph(id, state);
}

//Get puzzle reward
const rewardPuzzle = (id: string, puzzleArray: Array<puzzleArray>, state: State): void => {
    
    //Find the puzzle
    //Use switch to get other evidence or progress
    //update state with number of evidences or progress

}

//Get puzzle card and main puzzle object base on id
/*
    @param {ID} - id of the puzzle - same as field
    @param {puzzleArray/puzzleCardArray} - array which stores all of the puzzles/puzzle cards
*/
const getPuzzle = (ID: string, puzzleArray: Array<Puzzle>) : Puzzle=>{
    return puzzleArray.find(c=>c===ID);
}
const getPuzzleCard = (ID: string, puzzleCardArray: Array<puzzleCard>) : puzzleCard => {
    return puzzleCardArray.find(c=>c===ID);
}

//Add puzzle to the state
/*
    @param {state} - gameState object
    @param {id} - id of the filed - same as puzzle id
*/
const newPuzzle = (state: State, id: string): void =>{

    //Check if we have active puzzle
    if(state.puzzle.includes(id)){
        return;
    }
    //If not push to the state (whick means it's active)
    state.puzzle.push(id);

}

//Add puzzle card to the puzzle object
/*
    @param {id} - id of the filed - same as puzzleCard id
*/
const newPuzzleCard = (id: string, puzzleCardArray: Array<PuzzleCard>, puzzleArray: Array<Puzzle>): void =>{

    //Find puzzle card in array with current ID
    const puzzleCard = getPuzzleCard(id, puzzleCardArray);
    const puzzleObj = getPuzzle(id, puzzleArray);

    //Push this ID to puzzle object (which means we got it)
    puzzleObj.cards.push(puzzleCard.id);

}

export {newPuzzle, newPuzzleCard};