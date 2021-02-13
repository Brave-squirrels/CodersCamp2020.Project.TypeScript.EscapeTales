import {getStateLS} from './getLS';
import {ENDING} from './ENUM';
import TypeIt from "typeit";


export const getEndingStory = () => {
    let endingText : string
    const state = getStateLS()
    const numberOfEvidences : number = state.userEvidencesId.length
    
    switch (numberOfEvidences) {
        case (ENDING.BESTENDING-1):
            endingText = 'Zakon1'
            break
        case (ENDING.MEDIUMENDING1-1):
            endingText = 'Zakon2'
            break
        case (ENDING.MEDIUMENDING2-1):
            endingText = 'Zakon3'
            break
        case (ENDING.WORSTENDING-1):
            endingText = 'Zakon4'
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