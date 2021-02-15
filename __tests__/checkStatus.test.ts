import {checkActions, checkStatus} from '../src/board';
import {BoardState, BoardContent} from '../src/ENUM';
import {BoardField} from '../src/boardField';
import {GameState} from '../src/state';

describe("Check if field is already explored", ()=>{
    const boardSample1 = new BoardField(BoardState.EXPLORED, 'board1','board1',BoardContent.CLUE);
    const boardSample2 = new BoardField(BoardState.PENDING, 'board2','board1',BoardContent.CLUE);
    const stateSample1 = new GameState(5,[],[],[],1,[],0,[],0,['board1'],[],0);
    it('Return true if area is explored',()=>{
        expect(checkStatus(boardSample1,stateSample1)).toBe(true);
    })

    it('Return false if area is pending', ()=>{
        expect(checkStatus(boardSample2,stateSample1)).toBe(false);
    })

})

describe("Check if there is enough amount of points",()=>{
    const state2 = new GameState(5,[],[],[],1,[],0,[],0,['board1'],[],0);
    const state1 = new GameState(0,[],[],[],1,[],0,[],0,['board1'],[],0);
    it('Retun true if we have >0 amount of actionPoints', ()=>{
        expect(checkActions(state2)).toBe(true);
    })

    it('Retun false if we have 0<= amount of actionPoints', ()=>{
        expect(checkActions(state1)).toBe(false);
    })

})