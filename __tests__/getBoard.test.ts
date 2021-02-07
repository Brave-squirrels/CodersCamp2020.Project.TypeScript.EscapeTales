import {getBoard} from '../src/board';
import {BoardState, BoardContent} from '../src/ENUM';
import {BoardField} from '../src/boardField';

describe('Find board in array test', ()=>{
    const boardSample = new BoardField(BoardState.PENDING, 'board1','board1',BoardContent.CLUE)
    const arrayOfBoards = [boardSample]
    it('Return board for board1 id', ()=>{
        expect(getBoard('board1', arrayOfBoards)).toEqual(boardSample);
    })

    it('Return undefined for invalid id', ()=>{
        expect(getBoard('asd', arrayOfBoards)).toEqual(undefined);
    })

})