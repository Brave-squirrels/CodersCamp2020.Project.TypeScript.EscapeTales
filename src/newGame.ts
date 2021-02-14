import {GameState} from './state';
import * as updateDOM from './updateDOM';
import {boardAreas, puzzleArrayMain} from './data';
import * as getLS from './getLS';
import {BoardState} from './ENUM';
import {BoardField} from './boardField';
import * as updateLS from './updateLS';

export const initNewGame = () : void =>{

    //Create default gameState
    updateLS.updateStateLS(new GameState());
    const state = getLS.getStateLS();
    updateLS.updatePuzzleLS(puzzleArrayMain);
    const puzzleArray = getLS.getPuzzleLS();

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

    //Go to the first location
    const currentBoard = document.querySelector(".activeBoard")!;
    const nextBoard = document.querySelector(`#board${1}`)!;
    currentBoard.classList.toggle("activeBoard");
    nextBoard.classList.toggle("activeBoard");

    //Reset interface
    updateDOM.updateStoryLine();
    updateDOM.initStoryBook();
    updateDOM.updateActionDOM(state.actionNumbers);
    updateDOM.updateEvidencesDOM();
    updateDOM.updatePuzzleDOM(state,puzzleArray);
    updateDOM.updateProgressDOM();
}