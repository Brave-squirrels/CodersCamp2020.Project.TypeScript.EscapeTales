const gameStatesObject = require('../src/state')
describe('Object gameState:', () => {

    test('actionNumber should return 0', () => {
        expect(gameStatesObject.actionNumbers).toBe(0)
    })

    test('userParagraphsId should return []', () => {
        expect(gameStatesObject.userParagraphsId).toEqual([])
    })

    test('userPuzzlesId should return []', () => {
        expect(gameStatesObject.userPuzzlesId).toEqual([])
    })

    test('userLocationId should return []', () => {
        expect(gameStatesObject.userLocationId).toEqual([])
    })

    test('visitedAreasId should return []', () => {
        expect(gameStatesObject.visitedAreasId).toEqual([])
    })

    test('storyline should return 0', () => {
        expect(gameStatesObject.storyline).toBe(0)
    })

    test('userEvidencesId should return []', () => {
        expect(gameStatesObject.userEvidencesId).toEqual([])
    })
})