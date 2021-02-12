import {GameState} from './state';
import { updateAreaDOM, updateActionDOM, updateProgressDOM , updateEvidencesDOM , updatePuzzleDOM, updateStoryBook, initStoryBook} from './updateDOM';
import {puzzleArray} from './data';
import {getStateLS} from './getLS';
export const onLoadUpdate = () : void =>{
    //Go the the location saved in state
    if(!localStorage.getItem('state')){
        localStorage.setItem('state', JSON.stringify(new GameState()));
    }
    const state = getStateLS();
    initStoryBook(state);
    updateStoryBook();
    updateAreaDOM(state);
    updateActionDOM(state.actionNumbers);
    updateEvidencesDOM();
    updatePuzzleDOM(state, puzzleArray);
    updateProgressDOM();
}