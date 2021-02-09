import {GameState} from '../src/state'
import {ENDING, LOCATION} from '../src/ENUM';
describe('Object gameState:', () => {
    const testGameState = new GameState (3, ['A1p'], ['A1z'], LOCATION.SECOND, ['A2', 'A3'], ENDING.SADENDING, ['A1d'], 0, []);

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
        expect(typeof(testGameState.storyline)).toEqual('number')
    })

    
    test('userEvidencesId should be a string[]', () => {
        (testGameState.userEvidencesId).forEach(n =>(expect(typeof(n))).toEqual('string'))
    })

})
