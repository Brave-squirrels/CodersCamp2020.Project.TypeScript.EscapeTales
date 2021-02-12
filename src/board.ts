//Import
import {newPuzzle, newPuzzleCard} from './puzzleAction';
import { BoardField} from './boardField';
import {GameState} from './state';
import Paragraph from './paragraph';
import{ActionPointsEnum, BoardState, BoardContent} from './ENUM';
import {Puzzle} from './puzzle';
import PuzzleCard from './puzzleCard';
import {read, readStressParagraph} from './readContent';
import {updateAreaDOM, updateActionDOM, updateEvidencesDOM} from './updateDOM';
import {getStateLS} from './getLS';

//BoardArea validation
//Check the status of the current board
const checkStatus = (currentField: BoardField, state: GameState): boolean =>{
    return state.visitedAreas.includes(currentField._fieldID);
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
const updateAction = (numOfPoints: ActionPointsEnum,state: GameState): void=>{

    state.actionNumbers += numOfPoints;

}

//Board movement function
/*
  @param {currentField} - current boardField object
  @param {state} - GameState object
  @param {actionPoints} - actionPoints Object
  Mark area, as explored
*/
const move = (currentField: BoardField) : void=>{
    const state = getStateLS();
    //Mark the board as explored
    currentField.status = BoardState.EXPLORED;
    //Push id of area to the state and mark area in DOM as explored
    state.updateVisitedAreas(currentField._fieldID);
    updateAreaDOM(state);
    //Remove 1 action point;
    state.actionNumbers -= 1;
    localStorage.setItem("state", JSON.stringify(state));
    //Update actionPoints in interface
    updateActionDOM(state.actionNumbers)
}

//Read paragraph
/*
    @param {id} - id of the paragraph, which is the same as ID od DOM element nad board area ID
    @param {state} - state of the game object
    @param {currentField} - current field object that we are moving on
    @param {paragraphsArray} - array of all the paragraphs
*/
const readParagraph = (id: string, paragraphsArray: Array<Paragraph>): void=>{
    const state = getStateLS();
    //Find current paragraph
    const currentParagraph : Paragraph = paragraphsArray.find((c: Paragraph)=>c.id === id)!;
    //Push current paragraph to the state
    if(currentParagraph){
        state.addParagraphsId(currentParagraph.id);
    }
    localStorage.setItem("state", JSON.stringify(state));
    //Run DOM paragraphRead function
    read(currentParagraph);
}

//Get content from current area
/*
    @param {boardField} - object of current boardField
    @param {state} - gameState object
    @param {actionObj} - object which contains actionPoints
    @param {puzzleCardArray} - array of puzzle cards
    @param {puzzleArray} - array of all the puzzle objects
*/
const getAreaContent = (boardField: BoardField, puzzleCardArray: Array<PuzzleCard>, puzzleArray: Array<Puzzle>) : void=>{
    const state = getStateLS();
    switch(boardField.content){
        case BoardContent.CLUE:
            //Update points
            updateAction(ActionPointsEnum.CLUE, state);
            //Update actionPoints in interface
            updateActionDOM(state.actionNumbers)
            break;
        case BoardContent.PUZZLE:
            //Run function which add puzzle if not exist and get the puzzle card
            newPuzzle(boardField.fieldID, puzzleArray, puzzleCardArray);
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
const mainAction = (areaID: string, currentField: BoardField,paragraphsArray: Array<Paragraph>, puzzleCardArray: Array<PuzzleCard>, puzzleArray: Array<Puzzle> ) : void=>{

     //Mark the board, as explored and remove 1 action point
     move(currentField);

     //Read paragraph and add to the state
     readParagraph(areaID, paragraphsArray);
    
     //Get content from the area
     getAreaContent(currentField, puzzleCardArray,puzzleArray);
}

//Update points and remove evidence if we have any
/*
    @param {state} - state object, which contains main game state data
    @param {actionObj} - actionPoints object
*/
const stressCardAction = (state: GameState, stressParagraphs : string[]) : void=>{
    //Add action points
    updateAction(ActionPointsEnum.STRESSCARD, state);
    //Remove evidence if player have any
    if(state.userEvidencesId.length !== 0){
        state.removeEvidence();
    }
    //Update state
    localStorage.setItem('state', JSON.stringify(state));
    //Update evidences in interface
    updateEvidencesDOM();
    //Run DOM function reading random paragraph, tell the user that he lost evidence
    readStressParagraph(stressParagraphs);
    //Update actionPoints in interface
    updateActionDOM(state.actionNumbers);
}


//Export for testing
export {getBoard, checkActions, checkStatus, mainAction, stressCardAction}