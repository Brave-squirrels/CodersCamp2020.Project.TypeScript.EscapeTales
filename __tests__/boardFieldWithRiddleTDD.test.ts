import { BoardFieldWithRiddle } from '../src/boardFieldWithRiddle';
import { TestEnum } from '../src/boardField'; 

/**
 * @TDD
 */

describe('BoardFieldWithRiddle',()=>{
    const newFieldWithRiddle: BoardFieldWithRiddle = new BoardFieldWithRiddle(TestEnum.passed, '1', '2'); 

    test('newFieldWithRiddle should be an instance of BoardFieldWithRiddle class',()=>{
        expect(newFieldWithRiddle instanceof BoardFieldWithRiddle).toBe(true);
    });

    test('newFieldWithRiddle should have a method of reading a paragraph from normal BoardField',()=>{
        expect(typeof (newFieldWithRiddle.readParagraph)).toBe('function');
    });

    test('newFieldWithRiddle should have a method of reading a riddle from BoardFieldWithRiddle',()=>{
        expect(typeof (newFieldWithRiddle.readRiddle)).toBe('function');
    });
});