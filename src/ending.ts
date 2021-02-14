import {getStateLS} from './getLS';
import {ENDING} from './ENUM';
import TypeIt from "typeit";


export const getEndingStory = () => {
    let endingText : string
    const state = getStateLS()
    const numberOfEvidences : number = state.userEvidencesId.length;
    
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
    
    
    const endingStory = (): void => {
        (document.querySelector('.ending__modal') as HTMLElement).style.display = 'block';
        (document.querySelector('.ending__text') as HTMLElement).innerHTML = '';
        new TypeIt(".ending__text", {
            strings: `${endingText}`,
            speed: 80,
            loop: false,
        }).go();
    };

    endingStory()
}