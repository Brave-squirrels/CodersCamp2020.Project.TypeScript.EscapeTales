import {Puzzle} from './puzzle';
import PuzzleCard from './puzzleCard';
export const puzzleTemplate = (puzzle : Puzzle) : string => {
    return `
        <div class='interface__puzzle__container' id=${puzzle.id}>
            ${puzzle.content}
        </div>
    `;
}

export const puzzleSolveTemplate = (puzzle : Puzzle, visitedCards : Array<PuzzleCard>) : string =>{
    let str = `
    <span class="puzzle__close" id="puzzle__close">&#10006;</span>
    <div class='puzzle__text'>
        <div>Title: ${puzzle.content}</div>
        <div>Hints:`;
    
    visitedCards.forEach(el=>{
        str+=el.content
    })
    
    str+= `
        </div>
        <div>
            <input type='text' id='${puzzle.id}input'>
        </div>
        <button class='Confirm${puzzle.id}'>Confirm</button>
        </div>
        `;
    return str;
}