import {newPuzzle, newPuzzleCard} from './puzzleAction';
import { BoardField} from './boardField';
import {GameState} from './state';
import {BoardFieldWithRiddle} from './boardFieldWithRiddle';
import ActionPoints from './actionPoints';
import Paragraph from './paragraph';
import{ActionPointsEnum, BoardState, BoardContent} from './ENUM';

/*
    Paraghraph and area and DOM element, has the same ID
    Paragraph has additional uniq ID
*/

//Board movement event
document.addEventListener('click',(e: any) : void=>{
    
    if(e.target.className === 'boardArea'){

        //Getting ID of DOM element to find boardArea object
        const areaID: string = e.target.id;

        //Getting current board object
        const currentField = getBoard(areaID, boardAreas)

        //Get the current board object
        if(!checkStatus(currentField)){
             //End if the area is explored
             return;
        }

        //If we have proper amount of actionPoints
        if(!checkActions(state)){
            //End function cuz of lack of action points
            return;
        }

        //Function which run the movement and content events
        mainAction(areaID, boardAreas, state, currentField);
    }

})
//BoardArea validation
//Check the status of the current board
const checkStatus = (currentField: BoardField): boolean =>{
    return currentField.status === BoardState.PENDING;
}
//Check the amount of action points in game state
const checkActions = (state: GameState):boolean =>{
    return state.actionNumbers > 0;
}


//Main action function
/*
    @param {areaID} - ID get from the DOM
    @param {boardAreas} - array of all boardArea objects
    @param {state} - game state object
    @param {currentField} - object of field we are exploring
*/
const mainAction = (areaID: string, boardAreas: Array<BoardField>, state: GameState, currentField: BoardField) : void=>{

     //Mark the board, as explored and remove 1 action point
     move(currentField, state, actionObj);

     //Read paragraph and add to the state
     readParagraph(areaID, state, currentField, paragraphsArray);

     //Get content from the area
     getAreaContent(currentField, state, actionObj);
}


//Get the current board
/*
    @param {id} - id of the boardArea object
    @param {boardAreas} - array of all the boardArea objects
*/
const getBoard = (id:string, boardAreas: Array<BoardField>) : BoardField =>{
    return boardAreas.find((c : BoardField) =>c._fieldID===id)!;
}

//Board movement function
/*
  @param {IDofArea} - ID of area which we are exploring
  Mark area, as explored
*/
const move = (currentBoard: BoardField, state: GameState, actionPoints: ActionPoints) : void=>{

    //Mark the board as explored
    currentBoard.status = BoardState.EXPLORED;
    
    //Add paragraph ID to the state
    state.addParagraphsId(currentBoard._fieldID);

    //Remove 1 action point
    actionPoints.decrementPoints();

    //Save current action points to the gameState
    state.actionNumbers = actionPoints.currentPoints;

}

//Read paragraph
/*
    @param {id} - id of the paragraph, which is the same as ID od DOM element nad board area ID
    @param {state} - state of the game object
    @param {currentField} - current field object that we are moving on
    @param {paragraphsArray} - array of all the paragraphs
*/
const readParagraph = (id: string, state: GameState, currentField: BoardField, paragraphsArray: Array<Paragraph>): void=>{

    //Find current paragraph
    const currentParagraph = paragraphsArray.find((c: Paragraph)=>c.id === id)!;
    //Push current paragraph to the state
    state.addParagraphsId(currentParagraph.id);
    //Run read paragraph method from boarArea object
    currentField.readParagraph();

}


//Update points and remove evidence if we have any
/*
    @param {state} - state object, which contains main game state data
*/
const stressCardAction = (state: GameState, actionObj: ActionPoints) : void=>{
    
    //Add action points
    updateAction(ActionPointsEnum.STRESSCARD, state, actionObj);
    //Remove evidence if player have any
    if(state.userEvidencesId.length !== 0){
        state.removeEvidence();
    }
    //Read random paragraph

}

//Update action points
/*
    @param {numOfActions} - number of action's which we wanna add/remove from state
    @param {state} - state object, which contains main game state data
    @param {actionPoints} - action points object
*/
const updateAction = (numOfPoints: ActionPointsEnum,state: GameState, actionPoints: ActionPoints): void=>{

    actionPoints.addPoints(numOfPoints);

    state.actionNumbers = actionPoints.currentPoints;

}

//Get content from current area
/*
    @param {boardField} - object of current boardField
    @param {state} - gameState object
    @actionObj - object which contains actionPoints
*/
const getAreaContent = (boardField: BoardField | BoardFieldWithPoints | BoardFieldWithRiddle, state: GameState, actionObj: ActionPoints) : void=>{

    switch(boardField.content){

        case BoardContent.CLUE:
            //Update points
            updateAction(ActionPointsEnum.CLUE, state, actionObj);
            //Run function which reads paragraph
            break;
        case BoardContent.PUZZLE:
            //Run function which add puzzle if not exist and get the puzzle card
            newPuzzle(state, boardField.fieldID);
            newPuzzleCard(boardField.fieldID, puzzleCardArray, puzzleArray);
            //Read puzzle
            boardField.readRiddle();
            break;
        default:
            //Run function whick tell's that u found nothing

    }

}

//Export for testing
export {getBoard, checkActions, checkStatus, readParagraph}