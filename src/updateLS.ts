import {GameState} from './state';
const updateStateLS = (state : GameState) : void => {
    localStorage.setItem('state', JSON.stringify(state));
}

const updatePuzzleLS = (puzzleArrayMain) => {
    localStorage.setItem('puzzle', JSON.stringify({puzzleArrayMain}));
}

export {updateStateLS, updatePuzzleLS};