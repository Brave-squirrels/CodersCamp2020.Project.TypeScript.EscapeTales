enum ENDING{
    HAPPYENDING,
    SADENDING
    }

interface GameState {
    actionNumbers: number;
    userParagraphsId: string[];
    userPuzzlesId: string[];
    userLocationId: string[];
    visitedAreasId: string[];
    storyline: ENDING;
    userEvidencesId: string[];
}


const gameState : GameState = {
    actionNumbers: 0,
    userParagraphsId: [],
    userPuzzlesId: [],
    userLocationId: [],
    visitedAreasId: [],
    storyline: ENDING.HAPPYENDING,
    userEvidencesId: []
}



console.log(gameState)