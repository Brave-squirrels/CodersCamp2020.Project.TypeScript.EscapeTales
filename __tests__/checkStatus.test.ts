import {checkStatus, AreaState} from '../src/board';

describe('checkStatus',()=>{
    it('Returns true if area is pending and not explored',()=>{
        expect(checkStatus('1',[{id: '1', status: AreaState.PENDING}])).toBe(true);
    })
    it('Return false if area is already explored', ()=>{
        expect(checkStatus('1',[{id: '1', status: AreaState.EXPLORED}])).toBe(false);
    })
})