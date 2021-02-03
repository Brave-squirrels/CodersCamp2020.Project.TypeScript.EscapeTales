import {GameState, ENDING} from '../src/state'
describe('Object gameState:', () => {
    const testGameState = new GameState (3, ['A1p'], ['A1z'], ['A1'], ['A2', 'A3'], ENDING.SADENDING, ['A1d'])

    test('newField should be an instance of BoardField class',()=>{
        expect(testGameState instanceof GameState).toBe(true);
    });

    test('actionNumbers should be a number', () => {
        expect(typeof(testGameState.getActionsNumbers)).toEqual('number')
    })

    test('userParagraphsId should be a string[]', () => {
        (testGameState.getUserParagraphsId).forEach(n =>(expect(typeof(n))).toEqual('string'))
    })

    test('userPuzzlesId should be a string[]', () => {
        (testGameState.getUserPuzzlesId).forEach(n =>(expect(typeof(n))).toEqual('string'))
    })

    test('userLocationId should be string[]', () => {
        (testGameState.getUserLocationId).forEach(n =>(expect(typeof(n))).toEqual('string'))
    })

    test('visitedAreasId should be a string[]', () => {
        (testGameState.getVisitedAreasId).forEach(n =>(expect(typeof(n))).toEqual('string'))
    })

    test('storyline should be a Enum', () => {
        expect(typeof(testGameState.getStoryline)).toEqual('number')
    })

    
    test('userEvidencesId should be a string[]', () => {
        (testGameState.getUserEvidencesId).forEach(n =>(expect(typeof(n))).toEqual('string'))
    })

})