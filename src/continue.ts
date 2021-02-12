import {GameState} from './state';
import { updateAreaDOM, updateActionDOM, updateProgressDOM , updateEvidencesDOM , updatePuzzleDOM, updateStoryBook} from './updateDOM';
import {puzzleArray} from './data';
export const onLoadUpdate = () : void =>{
    if(!localStorage.getItem('state')){
        localStorage.setItem('state', JSON.stringify(new GameState()));
    }
    const stateData = JSON.parse(localStorage.getItem('state')!);
        const state = new GameState(
        stateData._actionNumbers,
        stateData._userParagraphsId,
        stateData._userPuzzlesId,
        stateData._userLocationId,
        stateData._visitedAreasId,
        stateData._storyLine,
        stateData._userEvidencesId,
        stateData._progressPoints,
        stateData._visitedAreas,
        stateData._storyBook,
        stateData._currentPage
    )
    
    updateAreaDOM(state);
    updateActionDOM(state.actionNumbers);
    updateEvidencesDOM();
    updatePuzzleDOM(state, puzzleArray);
    updateProgressDOM();
}