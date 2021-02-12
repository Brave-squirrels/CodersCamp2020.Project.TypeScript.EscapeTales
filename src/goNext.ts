import { updateActionDOM, updateProgressDOM , updateEvidencesDOM , updatePuzzleDOM} 
from './updateDOM';
import {getStateLS, getPuzzleLS} from './getLS';
import {GameState} from './state';
import {updateStoryBook} from './updateDOM';
import {updateStateLS} from './updateLS';

//Next location
//Go to the next location
//Reset action points
//Remove all puzzles from previous location
//Reset progress points
export const nextLocation = (id) : void =>{
    let stateTemp  = getStateLS();
    const paragraphArray = stateTemp.userParagraphsId;
    const evidencesArray = stateTemp.userEvidencesId;
    const storyBookArray = stateTemp.storyBook;
    updateStateLS(new GameState());
    const state = getStateLS();
    paragraphArray.forEach((e)=>{
        state.addParagraphsId(e);
    })
    evidencesArray.forEach((e)=>{
        state.addEvidencesId(e);
    })
    state.addStoryBook(storyBookArray);
    state.currentPageChange(stateTemp.currentPage);
    
    state.userLocationId = ++id;
    updateStateLS(state);
    updateStoryBook();
    updateActionDOM(state.actionNumbers);
    updateEvidencesDOM();
    updatePuzzleDOM(state, getPuzzleLS());
    updateProgressDOM();
}