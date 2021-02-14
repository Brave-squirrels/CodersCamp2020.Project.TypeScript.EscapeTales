import * as updateDOM from './updateDOM';
import * as getLS from './getLS';
import {updateStateLS} from './updateLS';

//Continue game, update on refresh function
export const onLoadUpdate = () : void =>{
    if(localStorage.getItem('state') !== null){
        //Get state from LS
        const state = getLS.getStateLS();
        //Get current story book page
        state.currentPageChange(state.currentPage);
        //Go to current location/board
        const currentBoard = document.querySelector(".activeBoard")!;
        const nextBoard = document.querySelector(`#board${state.userLocationId}`)!;
        currentBoard.classList.toggle("activeBoard");
        nextBoard.classList.toggle("activeBoard");
        
        updateStateLS(state);
        //Update whole DOM interface
        if(state.currentPage === 0){
            updateDOM.initStoryBook();
        }else{
            updateDOM.updateStoryBook();
        }
        updateDOM.updateStoryLine();
        updateDOM.updateAreaDOM(state);
        updateDOM.updateActionDOM(state.actionNumbers);
        updateDOM.updateEvidencesDOM();
        updateDOM.updatePuzzleDOM(state, getLS.getPuzzleLS());
        updateDOM.updateProgressDOM();
        
        //Save state to LS
        updateStateLS(state);
    }
}