//import {getStateLS} from './getLS';
import {updateStateLS} from './updateLS';
import {updateStoryLine} from './updateDOM';
export const choose = (value: string, state) : void =>{

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

    //Add choose id to the state
    state.addStoryLineID(value);
    //Update state
    updateStateLS(state);
    updateStoryLine();
}