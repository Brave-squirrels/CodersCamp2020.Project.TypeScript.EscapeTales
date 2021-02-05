import {checkActions} from '../src/board';

describe('checkActions', ()=>{
    it('Returns false for input <= 0', ()=>{
        expect(checkActions({
            action: 0,
            evidences: [1,2,3,4],
            paragraphsList: []
        }))
        .toBe(false);
    });

    it('Returns true for input > 0', ()=>{
        expect(checkActions({
            action: 1,
            evidences:[],
            paragraphsList: []
        }))
        .toBe(true);
    })
})