import {GameState} from './state';
import {state} from './data';
import {pageTemplate} from './storyBookPage';

//Update actionPoints interface
const updateActionDOM = () : void =>{

}

//Update storyBook DOM
export const updateStoryBook = () : void =>{
    const storyBook = document.querySelector(".board__storybook") as HTMLElement;
    const text = state.storyBook[state.storyBook.length-1];
    const content = pageTemplate(text);
    storyBook.innerHTML = content;
}

export const changePageStoryBook = (index: number) => {
    const storyBook = document.querySelector(".board__storybook") as HTMLElement;
    const previousText = state.storyBook[index];
    const previousContent = pageTemplate(previousText);
    storyBook.innerHTML = previousContent;
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
