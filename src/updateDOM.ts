import {GameState} from './state';
import {getDate} from './date';

//Update actionPoints interface
const updateActionDOM = () : void =>{

}

//Update storyBook DOM
export const updateStoryBook = (text: string) : void =>{
    const date = getDate();
    const storyBook = document.querySelector(".board__storybook") as HTMLElement;
    storyBook.innerText += `\n${date}\n${text}`; 
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
