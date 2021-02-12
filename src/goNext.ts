import { updateActionDOM, updateProgressDOM , updateEvidencesDOM , updatePuzzleDOM} 
from './updateDOM';
import { puzzleArray} from './data';
import {getStateLS} from './getLS';
import {GameState} from './state';

//Next location
//Go to the next location
//Reset action points
//Remove all puzzles from previous location
//Reset progress points
export const nextLocation = (id) : void =>{
    let stateTemp  = getStateLS();
    const paragraphArray = stateTemp.userParagraphsId;
    const evidencesArray = stateTemp.userEvidencesId;
    localStorage.setItem('state', JSON.stringify(new GameState()));
    const state = getStateLS();
    paragraphArray.forEach((e)=>{
        state.addParagraphsId(e);
    })
    evidencesArray.forEach((e)=>{
        state.addEvidencesId(e);
    })
    state.userLocationId = ++id;
    localStorage.setItem('state', JSON.stringify(state));
    updateActionDOM(state.actionNumbers);
    updateEvidencesDOM();
    updatePuzzleDOM(state, puzzleArray);
    updateProgressDOM();
    localStorage.setItem('state', JSON.stringify(state));
}