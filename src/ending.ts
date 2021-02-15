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
                    endingText = `Finally you were able to find that poor girl. Unfortunately you found her dead. The murderer has to know about your presence in the house. Immediately you realize that you are in danger, if you only had a gun. You haven’t even finished your thought when you felt excruciating pain on back of your head, he got you. Everything became blurry and you slowly fell to the ground. This is the end, you weren't even able to save yourself and the perpetrator went unpunished.`;
                break;
                case numberOfEvidences >=2:
                    endingText = `Finally you were able to find that poor girl. Unfortunately you found her dead. The murderer has to know about your presence in the house, but he wasn’t quick enough. You managed to capture and send him to the police hands. At last you stopped him, but at what cost.`;
                break;
            }
        break;
        case 1:
            switch(true){
                case numberOfEvidences === 0:
                    endingText = `Finally you were able to find that poor girl. Unfortunately you found her dead. The murderer has to know about your presence in the house. Immediately you realize that you are in danger. Murderer came up behind you and you started to fight. You were very stressed and clearly in trouble. Everything happened so fast, in one second you delivered the final blow. Murderer fell dead, you were happy. Then you noticed blood, it’s coming out of your head, perpetrator didn’t give up without a fight, all you can do right now is wait, wait for peace to come.`;
                break;
                case numberOfEvidences === 1:
                    endingText = `Finally you were able to find that poor girl. Unfortunately you found her dead. The murderer has to know about your presence in the house. Immediately you realize that you are in danger. Murderer came up behind you and you started to fight. You were very stressed and clearly in trouble. Everything happened so fast, suddenly everything become blurry, “I’m dying” – you thought. You fell on the ground but with a smile, you knew that the police will be on place at any moment to capture him, he won’t get away with that. `;
                break;
                case numberOfEvidences >= 2:
                    endingText = `Finally you were able to find that poor girl. She was still alive. You immediately approached them and started a fight with the murderer, everything happened so fast. You were trying to fight back, but to no avail. He beat you. You felt your life was slipping away. But you were happy, you completed your mission, you saved that girl, and knew that the police will be in any second on the place to capture him. So after all, you win.`;
                break;
            }
        break;
        case 2:
            switch(true){
                case numberOfEvidences <=1:
                    endingText = `Finally you were able to find that poor girl. She was still alive. You immediately approached them and started a fight with the murderer. You were trying to hold him as long as you can, but unfortunately he was much stronger, and he has managed to escape. Mission complete, you did save that girl, but how many lives will he take, until we finally capture him?`;
                break;
                case numberOfEvidences >=2:
                    endingText = `Finally you were able to find that poor girl. She was still alive. You immediately approached them and started a fight with the murderer. Successfully you manage to overthrow him, he lost consciousness. You approach the crying girl and try to reassure her that everything is fine. It’s done, all you have to do now is wait for the police to come.`;
                break;
            }
        break;
        default:
            endingText = 'Something went wrong, reset the game.';
    }

    //Read the ending
    endingStory(endingText);
    
    //Clear localStorage
    localStorage.clear();
}