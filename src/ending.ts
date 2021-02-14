import {getStateLS} from './getLS';
import {endingStory} from './readContent';

export const getEndingStory = () => {
    let endingText : string = '';
    const state = getStateLS();
    const numberOfEvidences : number = state.userEvidencesId.length;
    const numberOfChoices : number = state.storylineID;

    switch(numberOfChoices) {
        case 0:
            switch(true){
                case numberOfEvidences <=1:
                    endingText = 'U dead, murderer scaped, she dead';
                break;
                case numberOfEvidences >=2:
                    endingText = 'U live, she dead, murderer captured';
                break;
            }
        break;
        case 1:
            switch(true){
                case numberOfEvidences === 0:
                    endingText = 'U dead, murderer dead, she dead';
                break;
                case numberOfEvidences === 1:
                    endingText = 'U dead, she dead, murderer captured';
                break;
                case numberOfEvidences >= 2:
                    endingText = 'U live, she dead, murderer captured';
                break;
            }
        break;
        case 2:
            switch(true){
                case numberOfEvidences <=1:
                    endingText = 'U live, she live, murderer escaped';
                break;
                case numberOfEvidences >=2:
                    endingText = 'U live, she live, murderer captured';
                break;
            }
        break;
        default:
            endingText = 'Something went wrong, reset the game.';
    }

    //Endings
    /*
        U dead, murderer escaped, she dead          // 0-1 evidences, 0 good choices
        U dead, murderer dead, she dead            // 0 evidences, 1 good choice
        U live, she live, murderer captured       // 2-3 evidences, 2 good choices
        U live, she live, murderer escaped       // 0-1 evidences, 2 good choices
        U live, she dead, murderer captured     // 2-3 evidences, 0 good choices
        U dead, murderer dead, she lived       // 1 evidences, 1 good choice
        U dead, murderer captured, she lived  //2-3 evidences, 1 good choice 
    */

    //Read the ending
    endingStory(endingText);
    
    //Clear localStorage
    localStorage.removeItem('state');
    localStorage.removeItem('puzzle');
}