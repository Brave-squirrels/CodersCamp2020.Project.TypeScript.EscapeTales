import {state} from './data';


export const pageTemplate = (text: string) => {
    if(state.currentPage === 0){
        return  `
        <h2>${text}</h2>
        <div class="board__storybook__arrows">
        <div class="board__storybook__arrowRight">
            >
        </div>
        ` ;
    }else if(state.currentPage === state.storyBook.length-2){
        return`
        <h2>${text}</h2>
        <div class="board__storybook__arrows">
        <div class="board__storybook__arrowLeft">
            <
        </div>
        ` ;
    }
    return`
    <h2>${text}</h2>
    <div class="board__storybook__arrows">
    <div class="board__storybook__arrowLeft">
        <
    </div>
    <div class="board__storybook__arrowRight">
        >
    </div>
    ` ;
};
