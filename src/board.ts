import {newPuzzle, newPuzzleCard} from './puzzleAction';
import { BoardField,TestEnum } from './boardField';
import {GameState} from './state';
import {BoardFieldWithPoints} from './boardFieldWithPoints';
import {BoardFieldWithRiddle} from './boardFieldWithRiddle';

//Enum for number of actions
enum ActionPoints {
    MOVE = -1,
    RESET = 6,
    STRESSCARD = 4,
    CLUE = 2
}

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
    return currentField.status === TestEnum.passed;
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

     //Mark the board, as explored
     move(currentField, state);

     //Remove 1 Action point
     updateAction(ActionPoints.MOVE, state);

     //Read paragraph and add to the state
     readParagraph(areaID, state, currentField);

     //Get content from the area
     getAreaContent(currentField, state);
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
const move = (currentBoard: BoardField, state: GameState) : void=>{

    //Mark the board as explored
    currentBoard.status = TestEnum.passed;
    
    //Add paragraph ID to the state
    state.addParagraphsId(currentBoard._fieldID);

}

//Read paragraph
/*
    @param {id} - id of the paragraph, which is the same as ID od DOM element nad board area ID
    @param {state} - state of the game object
*/
const readParagraph = (id: string, state: GameState, currentField: BoardField): void=>{

    //Find current paragraph
    const currentParagraph = paragraphs.find((c)=>c.id === id);
    //Push current paragraph to the state
    state.addParagraphsId(currentParagraph.id);
    //Run read paragraph method from boarArea object
    currentField.readParagraph();
}


//Update points and remove evidence if we have any
/*
    @param {state} - state object, which contains main game state data
*/
const stressCardAction = (state: GameState) : void=>{
    
    //Add action points
    updateAction(ActionPoints.STRESSCARD, state);
    //Remove evidence if player have any
    if(state.userEvidencesId.length !== 0){
        state.removeEvidence();
    }

}

//Update action points
/*
    @param {numOfActions} - number of action's which we wanna add/remove from state
    @param {state} - state object, which contains main game state data
*/
const updateAction = (numOfActions: number, state: GameState): void=>{

    state.actionNumbers = (numOfActions + state.actionNumbers);

}

//Get content from current area
/*
    @param {boardField} - object of current boardField
*/
const getAreaContent = (boardField: BoardField, state: GameState) : void=>{

    switch(boardField.content){

        case enum.clue:
            //Run function which tell's u that u have found a clue
            updateAction(ActionPoints.CLUE, state);
            break;
        case enum.puzzle:
            //Run function which add puzzle if not exist and get the puzzle card
            newPuzzle(state, boardField.id);
            newPuzzleCard(boardField.id, puzzleCardArray, puzzleArray);
            break;
        default:
            //Run function whick tell's that u found nothing
            console.log('nothing');

    }

}

//Export for testing
export {getBoard, checkActions, checkStatus, readParagraph}