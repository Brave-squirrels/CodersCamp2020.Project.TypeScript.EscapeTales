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
        expect(typeof (newField.getStatus)).toBe('string');
    });

    test('newField should have a getter of paragraphID',()=>{
        expect(typeof (newField.getParagraphID)).toBe('string');
    });

    test('newField should have a setter for current status',()=>{
        newField.setCurrentStatus = TestEnum.failed;
        expect(newField.getStatus).toBe('FAILED');
    });
});
