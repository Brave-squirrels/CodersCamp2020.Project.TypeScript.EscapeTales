import Paragraph from "./paragraph";

/*
    Function which open modals and read paragraph in cases such as:
    -Move on board and get content (puzzle/card/clue/nothing)
    -Solve puzzle
    @param {paragraph} - paragraph object
*/
export const read = (paragraph : Paragraph) : void =>{
    (document.querySelector('.paragraph') as HTMLElement).style.display = 'block'; ;
    (document.querySelector('.paragraph__text') as HTMLElement).innerHTML = paragraph.text;
}

/*
    Function with notification that the solution of a puzzle is incorrect
*/
export const incorrectPuzzle = () : void => {
    console.log('Password is incorrect');
}

/*
    Notification that the player has not enough points
*/
export const notEnoughPoints = () : void => {
    console.log('Not enough points');
}

/*
    Notification that area is already explored
*/
export const areaExplored = (): void =>{
    console.log('area is already explored');
}

