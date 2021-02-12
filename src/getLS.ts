//Function that pull out localStorage state
import {GameState} from './state';
import {Puzzle} from './puzzle';

export const getStateLS = () : GameState => {
    const stateData = JSON.parse(localStorage.getItem('state')!);
        return new GameState(
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
}

export const getPuzzleLS = () : Array<Puzzle> =>{
    const puzzleData = JSON.parse(localStorage.getItem('puzzle')!);
    const puzzleArray : Array<Puzzle> = [];
    puzzleData.puzzleArrayMain.forEach((e : Puzzle)=>{
        puzzleArray.push(
            new Puzzle(
                e.id,
                e._paragraph,
                e._puzzleCards,
                e._visitedCards,
                e.reward,
                e.solution,
                e.content
            )
        )
    })
    return puzzleArray;
}