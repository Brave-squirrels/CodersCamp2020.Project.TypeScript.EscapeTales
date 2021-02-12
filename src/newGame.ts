import {GameState} from './state';
import { updateActionDOM, updateProgressDOM , updateEvidencesDOM , updatePuzzleDOM, updateStoryBook} 
from './updateDOM';
import {boardAreas, puzzleArray} from './data';
import {getStateLS} from './getLS';
import {BoardState} from './ENUM';
import {BoardField} from './boardField';
export const initNewGame = () : void =>{
    //Go to the first location
    //Create default gameState
    localStorage.setItem('state', JSON.stringify(new GameState()));
    const state = getStateLS();

    //Reset boardFields
    const fields = document.querySelectorAll('.map__square');
    for(let i=0; i<fields.length; i++){
        if(fields[i].classList.contains('map__squareVisited')){
            fields[i].classList.remove('map__squareVisited');
        }
    }
    boardAreas.forEach((e : BoardField)=>{
        e.status = BoardState.PENDING;
    })

    const currentBoard = document.querySelector(".activeBoard")!;
    const nextBoard = document.querySelector(`#board${1}`)!;
    currentBoard.classList.toggle("activeBoard");
    nextBoard.classList.toggle("activeBoard");

    //Reset interface
    updateStoryBook();
    updateActionDOM(state.actionNumbers);
    updateEvidencesDOM();
    updatePuzzleDOM(state, puzzleArray);
    updateProgressDOM();
    localStorage.setItem('state', JSON.stringify(state));
}