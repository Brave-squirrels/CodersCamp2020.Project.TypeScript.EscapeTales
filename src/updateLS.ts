import {GameState} from './state';
export const updateStateLS = (state : GameState) : void => {
    localStorage.setItem('state', JSON.stringify(state));
}

export const updatePuzzleLS = (puzzleArrayMain) => {
    localStorage.setItem('puzzle', JSON.stringify({puzzleArrayMain}));
}