import { updateActionDOM, updateProgressDOM , updateEvidencesDOM , updatePuzzleDOM, updateStoryBook} 
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
    localStorage.setItem('state', JSON.stringify(new GameState()));
    const state = getStateLS();
    state.userLocationId = ++id;
    updateActionDOM(state.actionNumbers);
    updateEvidencesDOM();
    updatePuzzleDOM(state, puzzleArray);
    updateProgressDOM();
}