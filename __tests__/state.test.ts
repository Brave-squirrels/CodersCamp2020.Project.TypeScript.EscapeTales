import {GameState} from '../src/state'
describe('Object gameState:', () => {
    const testGameState = new GameState(5,[],[],[],1,[],0,[],0,['board1'],[],0);

    test('newField should be an instance of BoardField class',()=>{
        expect(testGameState instanceof GameState).toBe(true);
    });

    test('actionNumbers should be a number', () => {
        expect(typeof(testGameState.actionNumbers)).toEqual('number')
    })

    test('userParagraphsId should be a string[]', () => {
        (testGameState.userParagraphsId).forEach(n =>(expect(typeof(n))).toEqual('string'))
    })

    test('userPuzzlesId should be a string[]', () => {
        (testGameState.userPuzzlesId).forEach(n =>(expect(typeof(n))).toEqual('string'))
    })

    test('userLocationId should be string[]', () => {
        expect(typeof(testGameState.userLocationId)).toEqual('number')
    })

    test('visitedAreasId should be a string[]', () => {
        (testGameState.visitedAreasId).forEach(n =>(expect(typeof(n))).toEqual('string'))
    })

    test('storyline should be a Enum', () => {
        expect(typeof(testGameState.storyline)).toEqual('object')
    })

    
    test('userEvidencesId should be a string[]', () => {
        (testGameState.userEvidencesId).forEach(n =>(expect(typeof(n))).toEqual('string'))
    })

})
