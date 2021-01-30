//Puzzle solved
document.addEventListener('click', (e:any) : void=>{

    if(e.target.className === 'solvePuzzle'){

        const puzzleID: string = e.target.id;

        //Run validation puzzle function
        solvePuzzle(puzzleID, state);
    }

})

const solvePuzzle = (puzzleDOM: string, state: State):void=>{

    //Getting value - password typed by the user
    const passwordValue = (<HTMLInputElement>document.querySelector(`#${puzzleDOM}input`)).value;

    const currentPuzzle : Puzzle = getPuzzle(puzzleDOM, puzzleArray);

    if(passwordValue === currentPuzzle.password){
        //Read/add paragraph to the state
        //Get content
        //Remove puzzle from state
    }else{
        //Incorrect
    }

}

//Get the puzzle
const getPuzzle = (ID: string, puzzleArray: Array<Puzzle>) : Puzzle=>{
    return puzzleArray.find(c=>c===ID);
}