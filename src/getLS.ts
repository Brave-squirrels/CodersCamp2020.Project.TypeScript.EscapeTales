//Function that pull out localStorage state
import {GameState} from './state';
import {Puzzle} from './puzzle';

//Get state from LS
const getStateLS = () : GameState => {
    //Get JSON state object
    const stateData = JSON.parse(localStorage.getItem('state')!);
    //Create new GameState with all the methods
    return new GameState(
        stateData._actionNumbers,
        stateData._userParagraphsId,
        stateData._userPuzzlesId,
        stateData._puzzlesSolved,
        stateData._userLocationId,
        stateData._storyline,
        stateData._storylineID,
        stateData._userEvidencesId,
        stateData._progressPoints,
        stateData._visitedAreas,
        stateData._storyBook,
        stateData._currentPage
    )
}

//Get puzzleArray from LS
const getPuzzleLS = () : Array<Puzzle> =>{
    //Get puzzle object array from LS
    const puzzleData = JSON.parse(localStorage.getItem('puzzle')!);
    const puzzleArray : Array<Puzzle> = [];
    //Create array of puzzle object with all the methods
    puzzleData.puzzleArrayMain.forEach((e : Puzzle)=>{
        puzzleArray.push(
            new Puzzle(
                e.id,
                e._paragraph,
                e._puzzleCards,
                e._visitedCards,
                e.reward,
                e.solution,
                e.content
            )
        )
    })
    return puzzleArray;
}

export {getPuzzleLS, getStateLS}