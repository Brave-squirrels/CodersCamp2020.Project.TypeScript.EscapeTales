//Import
import {newPuzzle, newPuzzleCard} from './puzzleAction';
import { BoardField} from './boardField';
import {GameState} from './state';
import ActionPoints from './actionPoints';
import Paragraph from './paragraph';
import{ActionPointsEnum, BoardState, BoardContent} from './ENUM';
import {Puzzle} from './puzzle';
import PuzzleCard from './puzzleCard';
import {read} from './readContent';

//BoardArea validation
//Check the status of the current board
const checkStatus = (currentField: BoardField): boolean =>{
    return currentField.status === BoardState.PENDING;
}
//Check the amount of action points in game state
const checkActions = (state: GameState):boolean =>{
    return state.actionNumbers > 0;
}

//Get the current board
/*
    @param {id} - id of the boardArea object
    @param {boardAreas} - array of all the boardArea objects
*/
const getBoard = (id:string, boardAreas: Array<BoardField>) : BoardField =>{
    return boardAreas.find((c : BoardField) =>c._fieldID===id)!;
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

//Board movement function
/*
  @param {currentField} - current boardField object
  @param {state} - GameState object
  @param {actionPoints} - actionPoints Object
  Mark area, as explored
*/
const move = (currentField: BoardField, state: GameState, actionPoints: ActionPoints) : void=>{

    //Mark the board as explored
    currentField.status = BoardState.EXPLORED;
    //Mark as visited in DOM - change class to add style's and remove eventListener
    (document.querySelector(`#${currentField._fieldID}`) as HTMLElement).className += ' map__squareVisited';

    //Remove 1 action point
    actionPoints.decrementPoints();

    //Save current action points to the gameState
    state.actionNumbers = actionPoints.currentPoints;

    //Update actionPoints in interface
}

//Read paragraph
/*
    @param {id} - id of the paragraph, which is the same as ID od DOM element nad board area ID
    @param {state} - state of the game object
    @param {currentField} - current field object that we are moving on
    @param {paragraphsArray} - array of all the paragraphs
*/
const readParagraph = (id: string, state: GameState, paragraphsArray: Array<Paragraph>): void=>{

    //Find current paragraph
    const currentParagraph : Paragraph = paragraphsArray.find((c: Paragraph)=>c.id === id)!;
    //Push current paragraph to the state
    if(currentParagraph){
        state.addParagraphsId(currentParagraph.id);
    }
    //Run DOM paragraphRead function
    read(currentParagraph);
    //Update story book
}

//Get content from current area
/*
    @param {boardField} - object of current boardField
    @param {state} - gameState object
    @param {actionObj} - object which contains actionPoints
    @param {puzzleCardArray} - array of puzzle cards
    @param {puzzleArray} - array of all the puzzle objects
*/
const getAreaContent = (boardField: BoardField, state: GameState, actionObj: ActionPoints, puzzleCardArray: Array<PuzzleCard>, puzzleArray: Array<Puzzle>) : void=>{

    switch(boardField.content){

        case BoardContent.CLUE:
            //Update points
            updateAction(ActionPointsEnum.CLUE, state, actionObj);
            //Update actionPoints in interface
            break;
        case BoardContent.PUZZLE:
            //Run function which add puzzle if not exist and get the puzzle card
            newPuzzle(state, boardField.fieldID);
            newPuzzleCard(boardField.fieldID, puzzleCardArray, puzzleArray);
            break;
        default:
    }

}

//Main action function
/*
    @param {areaID} - ID get from the DOM
    @param {state} - game state object
    @param {currentField} - object of field we are exploring
    @param {actionObj} - actionPoints object
    @param {paragraphsArray} - array of all paragraphs
    @param {puzzleCardArray} - array of all puzzleCards
    @param {puzzleArray} - array of all puzzle objects
*/
const mainAction = (areaID: string, state: GameState, currentField: BoardField, actionObj: ActionPoints,paragraphsArray: Array<Paragraph>, puzzleCardArray: Array<PuzzleCard>, puzzleArray: Array<Puzzle> ) : void=>{

     //Mark the board, as explored and remove 1 action point
     move(currentField, state, actionObj);

     //Read paragraph and add to the state
     readParagraph(areaID, state, paragraphsArray);

     //Get content from the area
     getAreaContent(currentField, state, actionObj, puzzleCardArray,puzzleArray);
}

//Update points and remove evidence if we have any
/*
    @param {state} - state object, which contains main game state data
    @param {actionObj} - actionPoints object
*/
/*
const stressCardAction = (state: GameState, actionObj: ActionPoints) : void=>{
    
    //Add action points
    updateAction(ActionPointsEnum.STRESSCARD, state, actionObj);
    //Remove evidence if player have any
    if(state.userEvidencesId.length !== 0){
        state.removeEvidence();
    }
    //Update evidences in interface
    
    //Run DOM function reading random paragraph, tell the user that he lost evidence
    read(randomParagraphFromStressArray);
    //Update actionPoints in interface
}
*/

//Export for testing
export {getBoard, checkActions, checkStatus, mainAction}