import * as updateDOM from './updateDOM';
import * as getLS from './getLS';
import {GameState} from './state';
import {updateStateLS} from './updateLS';

//Go to the next location function
export const nextLocation = (id) : void =>{
    //Get state from LS
    let stateTemp  = getLS.getStateLS();
    //Get all data that we need in the next location from old state
    const paragraphArray = stateTemp.userParagraphsId;
    const evidencesArray = stateTemp.userEvidencesId;
    const storyBookArray = stateTemp.storyBook;
    const storyLine = stateTemp.storyline;
    const storylineID = stateTemp.storylineID;

    //Create new game state
    updateStateLS(new GameState());
    const state = getLS.getStateLS();

    //Push to the game state all data that we need from previous location
    paragraphArray.forEach((e)=>{
        state.addParagraphsId(e);
    })
    evidencesArray.forEach((e)=>{
        state.addEvidencesId(e);
    })
    storyLine.forEach((e)=>{
        state.addStoryLine(e);
    })
    state.addStoryLineID(storylineID);
    state.addStoryBook(storyBookArray);
    state.currentPageChange(stateTemp.currentPage);
    
    state.userLocationId = ++id;

    //Update LS
    updateStateLS(state);

    //Update user interface
    updateDOM.updateStoryLine();
    updateDOM.updateStoryBook();
    updateDOM.updateActionDOM(state.actionNumbers);
    updateDOM.updateEvidencesDOM();
    updateDOM.updatePuzzleDOM(state, getLS.getPuzzleLS());
    updateDOM.updateProgressDOM();
}