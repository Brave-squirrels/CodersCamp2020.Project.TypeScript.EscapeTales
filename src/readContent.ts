//Normal paragraph, puzzle solved
export const readParagraph = (paragraph : any) : void =>{
    console.log(paragraph.text);
}

export const readClue = (clueTextArr: any) : void =>{
    console.log(clueTextArr);
}

export const readNothing = (): void =>{
    console.log('U found nothing lol');
}

export const newPuzzleMessage = () : void => {
    console.log('U found a new puzzle');
}

export const newPuzzleCardMessage = () : void => {
    console.log('U found a new puzzleCard');
}

export const incorrectPuzzle = () : void => {
    console.log('Password is incorrect');
}

