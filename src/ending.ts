import {getStateLS} from './getLS';
import {ENDING} from './ENUM';
import {endingStory} from './readContent';

export const getEndingStory = () => {
    let endingText : string = '';
    const state = getStateLS();
    const numberOfEvidences : number = state.userEvidencesId.length;
    
    //Add more cases base on choices
    switch (numberOfEvidences) {
        case (ENDING.BESTENDING):
            endingText = 'Happy End!' // 3 evidences
            break
        case (ENDING.MEDIUMENDING2):
            endingText = 'Still good for you!' // 2 evidences
            break
        case (ENDING.MEDIUMENDING1):
            endingText = 'Not bad' // 1 evidence
            break
        case (ENDING.WORSTENDING):
            endingText = 'Really?' // 0 evidences
            break
        default:
            endingText = 'Something went wrong, reset game.'
    }
    //Read the ending
    endingStory(endingText);
    
    //Clear localStorage
    localStorage.removeItem('state');
    localStorage.removeItem('puzzle');
}