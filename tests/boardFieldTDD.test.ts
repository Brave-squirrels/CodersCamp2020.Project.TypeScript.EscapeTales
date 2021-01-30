import { BoardField, TestEnum } from '../src/boardField';

/**
 * @TDD
*/

describe('BoardField',()=>{
    const newField: BoardField = new BoardField(TestEnum.passed, '1', '2'); 

    test('newField should be an instance of BoardField class',()=>{
        expect(newField instanceof BoardField).toBe(true);
    });

    test('newField should have a method of reading a paragraph',()=>{
        expect(typeof (newField.readParagraph)).toBe('function');
    });
});