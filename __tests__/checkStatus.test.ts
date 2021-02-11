import {checkActions, checkStatus} from '../src/board';
import {BoardState, BoardContent, LOCATION, ENDING} from '../src/ENUM';
import {BoardField} from '../src/boardField';
import {GameState} from '../src/state';

describe("Check if field is already explored", ()=>{
    const boardSample1 = new BoardField(BoardState.EXPLORED, 'board1','board1',BoardContent.CLUE);
    const boardSample2 = new BoardField(BoardState.PENDING, 'board1','board1',BoardContent.CLUE);
    it('Return false if area is explored',()=>{
        expect(checkStatus(boardSample1)).toBe(false);
    })

    it('Return true if area is pending', ()=>{
        expect(checkStatus(boardSample2)).toBe(true);
    })

})

describe("Check if there is enough amount of points",()=>{
    const state1 = new GameState(0, [],[],LOCATION.FIRST,[],ENDING.BESTENDING, [], 0);
    const state2 = new GameState(3, [],[],LOCATION.FIRST,[],ENDING.BESTENDING, [], 0);
    it('Retun true if we have >0 amount of actionPoints', ()=>{
        expect(checkActions(state2)).toBe(true);
    })

    it('Retun false if we have 0<= amount of actionPoints', ()=>{
        expect(checkActions(state1)).toBe(false);
    })

})