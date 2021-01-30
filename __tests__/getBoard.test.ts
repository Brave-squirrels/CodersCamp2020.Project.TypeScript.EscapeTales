import {getBoard, AreaState} from '../src/board';

describe('Find current board',()=>{
    it('Return board object with this ID', ()=>{
        expect(getBoard('1',[{id: '1', status: AreaState.PENDING}, {id: '2', status: AreaState.EXPLORED}])).toEqual({id: '1', status: AreaState.PENDING});
    })
})