import * as updateDOM from './updateDOM';
import * as getLS from './getLS';
import {updateStateLS} from './updateLS';

//Continue game, update on refresh function
export const onLoadUpdate = () : void =>{
    //Get state from LS
    const state = getLS.getStateLS();
    //Get current story book page
    state.currentPageChange(state.storyBook.length-1);
    //Go to current location/board
    const currentBoard = document.querySelector(".activeBoard")!;
    const nextBoard = document.querySelector(`#board${state.userLocationId}`)!;
    currentBoard.classList.toggle("activeBoard");
    nextBoard.classList.toggle("activeBoard");

    //Update whole DOM interface
    updateDOM.updateStoryBook();
    updateDOM.updateAreaDOM(state);
    updateDOM.updateActionDOM(state.actionNumbers);
    updateDOM.updateEvidencesDOM();
    updateDOM.updatePuzzleDOM(state, getLS.getPuzzleLS());
    updateDOM.updateProgressDOM();
    
    //Save state to LS
    updateStateLS(state);
}