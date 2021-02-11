import {state} from './data';


export const pageTemplate = (text: string) => {
    if(state.currentPage === 0){
        return`
        <h1 style="text-align: center;">${text}</h1>
        <div class="board__storybook__arrows"style="display: flex;
        justify-content: flex-end;">
        <div class="board__storybook__arrowLeft" style="display:none;">
            <i class="fas fa-reply"></i>
        </div>
        <div class="board__storybook__arrowRight">
            <i class="fas fa-share"></i>
        </div>
        ` ;
    }else if(state.currentPage === state.storyBook.length-1){
        return`
        <h2>${text}</h2>
        <div class="board__storybook__arrows">
        <div class="board__storybook__arrowLeft">
            <i class="fas fa-reply"></i>
        </div>
        <div class="board__storybook__arrowRight" style="display:none;">
            <i class="fas fa-share"></i>
        </div>
        ` ;
    }
    return`
    <h2>${text}</h2>
    <div class="board__storybook__arrows">
    <div class="board__storybook__arrowLeft">
        <i class="fas fa-reply"></i>
    </div>
    <div class="board__storybook__arrowRight">
        <i class="fas fa-share"></i>
    </div>
    ` ;
};
