import {GameState} from './state';

//Update actionPoints interface
const updateActionDOM = () : void =>{

}

//Update storyBook DOM
const updateStoryBook = () : void =>{

}

//Update evidences DOM
const updateEvidencesDOM = () : void =>{

}

//Update puzzleInterface DOM
const updatePuzzleDOM = () : void =>{

}

//Update progressPoints DOM
const updateProgressDOM = () : void =>{

}

//Update area state
export const updateAreaDOM = (state: GameState) : void => {
    state.visitedAreas.forEach((n: string)=>{
        (document.querySelector(`#${n}`) as HTMLElement).className += ' map__squareVisited';
    })
}