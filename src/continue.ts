import { updateAreaDOM, updateActionDOM, updateProgressDOM , updateEvidencesDOM , updatePuzzleDOM, updateStoryBook} from './updateDOM';
import {getStateLS, getPuzzleLS} from './getLS';
import {updateStateLS} from './updateLS';
export const onLoadUpdate = () : void =>{
    const state = getStateLS();
    state.currentPageChange(state.storyBook.length);
    const currentBoard = document.querySelector(".activeBoard")!;
    const nextBoard = document.querySelector(`#board${state.userLocationId}`)!;
    currentBoard.classList.toggle("activeBoard");
    nextBoard.classList.toggle("activeBoard");

    updateStoryBook();
    updateAreaDOM(state);
    updateActionDOM(state.actionNumbers);
    updateEvidencesDOM();
    updatePuzzleDOM(state, getPuzzleLS());
    updateProgressDOM();
    updateStateLS(state);
}