//import {getStateLS} from './getLS';
import {updateStateLS} from './updateLS';
import {updateStoryLine} from './updateDOM';
import {GameState} from './state';
export const choose = (value: string, state : GameState) : void =>{

    //Add story line text to the state
    switch(value){
        case 'l1c0':
            state.addStoryLine('Old oil lamp, I hope I can make use of that');
        break;
        case 'l1c1':
            state.addStoryLine(`I don't know if I am going to use this weapon, but for sure I'm feeling much more safer with it`);
        break;
        case 'l2c1':
            state.addStoryLine(`I have to keep my head cool, I don't know what to expect down here`);
        break;
        case 'l2c0':
            state.addStoryLine(`I have to hurry! Hope that I won't make much noise`);
        break;
    }

    //Get int from value
    const charArr : string[] = Object.assign([], value);

    //Add choose id to the state
    state.addStoryLineID(parseInt(charArr[3], 10));
    //Update state
    updateStateLS(state);
    updateStoryLine();
}