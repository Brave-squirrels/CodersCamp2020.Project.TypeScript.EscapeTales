//Function that pull out localStorage state
import {GameState} from './state';

export const getStateLS = () : GameState => {
    const stateData = JSON.parse(localStorage.getItem('state')!);
        return new GameState(
        stateData._actionNumbers,
        stateData._userParagraphsId,
        stateData._userPuzzlesId,
        stateData._userLocationId,
        stateData._visitedAreasId,
        stateData._storyLine,
        stateData._userEvidencesId,
        stateData._progressPoints,
        stateData._visitedAreas,
        stateData._storyBook,
        stateData._currentPage
    )
}