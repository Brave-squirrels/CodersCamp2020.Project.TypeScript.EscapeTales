import { BoardField, TestEnum } from '../src/boardField';

/**
 * @TDD
*/

describe('BoardField',()=>{
    const newField = new BoardField(TestEnum.passed, '1', '2'); 

    test('newField should be an instance of BoardField class',()=>{
        expect(newField instanceof BoardField).toBe(true);
    });

    test('newField should have a method of reading a paragraph',()=>{
        expect(typeof (newField.readParagraph)).toBe('function');
    });

    test('newField should have a getter for status',()=>{
        expect(typeof (newField.status)).toBe('string');
    });

    test('newField should have a getter of paragraphID',()=>{
        expect(typeof (newField.paragraphID)).toBe('string');
    });

    test('newField should have a setter for current status',()=>{
        newField.status = TestEnum.failed;
        expect(newField.status).toBe('FAILED');
    });
});
