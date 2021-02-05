import {getPuzzle, getPuzzleCard} from '../src/puzzleAction';
import {Puzzle} from '../src/puzzle';
import PuzzleCard from '../src/puzzleCard';
import {PuzzleReward} from '../src/ENUM';

describe('Get puzzle object from the puzzleArray',()=>{

    const puzzleone = new Puzzle ('board1', 'crazy paragraph', ['board1'], [], PuzzleReward.EVIDENCE, 'solution is lmao', 'crazy content');
    const puzzleArray = [puzzleone];

    it('Return valid object for valid id',()=>{
        expect(getPuzzle('board1', puzzleArray )).toBe(puzzleone);
    })
    it('Return undefined for invalid id',()=>{
        expect(getPuzzle('InvalidID', puzzleArray)).toBe(undefined);
    })

})

describe('Get puzzle card object from puzzleCardArray', ()=>{

    const puzzlecardone = new PuzzleCard('board1', 'board1', 'crazy message');
    const puzzleCardArray = [puzzlecardone];

    it('Return valid object for valid id',()=>{
        expect(getPuzzleCard('board1', puzzleCardArray)).toBe(puzzlecardone);
    })

    it('Return undefined for invalid id',()=>{
        expect(getPuzzleCard('InvalidID', puzzleCardArray)).toBe(undefined);
    })

})