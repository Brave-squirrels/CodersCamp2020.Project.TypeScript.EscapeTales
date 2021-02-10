import {GameState} from './state';
import {puzzleTemplate, puzzleSolveTemplate} from './HTMLtemplate';
import {Puzzle} from './puzzle';
import PuzzleCard from './puzzleCard';

//Update actionPoints interface
const updateActionDOM = () : void =>{

}

//Update storyBook DOM
const updateStoryBook = () : void =>{

}

//Update evidences DOM
const updateEvidencesDOM = () : void =>{

}

//Update puzzleInterface DOM
/*
    @param {state} - GameState
    @param {puzzleArray} - array of all the puzzles
*/
const updatePuzzleDOM = (state : GameState, puzzleArray : Array<Puzzle>) : void =>{
    //Get puzzle HTML container
    const cnt = document.querySelector('#interface__puzzle') as HTMLElement;

    //Reset DOM element
    cnt.innerHTML = '<h2 class="interface__element--title">Puzzles</h2>';

    //Take all the puzzle's that are in the gameState
    state.userPuzzlesId.forEach(statePuzzleID=>{
        puzzleArray.forEach(puzzleObj=>{
            if(statePuzzleID===puzzleObj.id){
                //Create DOM element base on the template
                cnt.innerHTML += puzzleTemplate(puzzleObj);
            }
        })
    })
}

//Solve puzzle MODAL
/*
    @param {puzzleID} - ID of current puzzle
    @param {puzzleArray} - array of all puzzle objects
    @param {puzzleCardArray} - array of all puzzle cards
*/
const solvePuzzleModal = (puzzleID : string, puzzleArray : Array<Puzzle>, puzzleCardArray : Array<PuzzleCard>)=>{

    //Get the current puzzle
    const currentPuzzle : Puzzle = puzzleArray.find(el => el.id === puzzleID)!;

    //Get all puzzleCards that the player found
    const visitedCards : Array<PuzzleCard> = [];
    currentPuzzle.visitedCards.forEach(visitedID=>{
        puzzleCardArray.forEach(puzzleCardObj=>{
            if(visitedID===puzzleCardObj.id){
                visitedCards.push(puzzleCardObj);
            }
        })
    });
    //Put data into DOM
    (document.querySelector('.puzzle') as HTMLElement).innerHTML = `
        <div class='puzzle__text'>
            ${puzzleSolveTemplate(currentPuzzle, visitedCards)}
        </div>
    `;
}

//Update progressPoints DOM
const updateProgressDOM = () : void =>{

}

//Update area state
/*
    @param {state} - GameState
*/
const updateAreaDOM = (state: GameState) : void => {
    state.visitedAreas.forEach((n: string)=>{
        (document.querySelector(`#${n}`) as HTMLElement).className += ' map__squareVisited';
    })
}

export {updateActionDOM, updateProgressDOM, updatePuzzleDOM, updateAreaDOM, updateEvidencesDOM, updateStoryBook, solvePuzzleModal};