import { TestEnum } from '../src/boardField';
import { BoardFieldWithPoints } from '../src/boardFieldWithPoints';

/**
 * @TDD
 */
describe('BoardField with Action Points', ()=>{
    const boardFieldWithAction = new BoardFieldWithPoints(TestEnum.passed, '1', '2');

    test('Should have methods of normal BoardField class', ()=>{
        expect(typeof(boardFieldWithAction.readParagraph)).toEqual('function');
    })

    test('Should have a method of adding a points to game state',()=>{
        expect(typeof(boardFieldWithAction.addPoints)).toEqual('function');
    })

})