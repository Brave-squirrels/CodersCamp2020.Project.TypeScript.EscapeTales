import { BoardField } from '../src/boardField';
import {BoardState, BoardContent } from '../src/ENUM';

/**
 * @TDD
*/

describe('BoardField',()=>{
    const newField = new BoardField(BoardState.PENDING, '1', '2', BoardContent.CLUE); 

    test('newField should be an instance of BoardField class',()=>{
        expect(newField instanceof BoardField).toBe(true);
    });

    test('newField should have a getter for status',()=>{
        expect(typeof (newField.status)).toBe('number');
    });

    test('newField should have a getter of paragraphID',()=>{
        expect(typeof (newField.paragraphID)).toBe('string');
    });

    test('newField should have a setter for current status',()=>{
        newField.status = BoardState.EXPLORED;
        expect(newField.status).toBe(1);
    });
});
