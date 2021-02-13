//Import
import * as puzzle from './puzzleAction';
import { BoardField} from './boardField';
import {GameState} from './state';
import Paragraph from './paragraph';
import * as ENUM from './ENUM';
import {Puzzle} from './puzzle';
import PuzzleCard from './puzzleCard';
import {read, readStressParagraph} from './readContent';
import * as updateDOM from './updateDOM';
import {getStateLS} from './getLS';
import {updateStateLS} from './updateLS';

//BoardArea validation
//Check the status of the current board
/*
    @param {currentField} - field that user clicked on
    @param {state} - gameState object
*/
const checkStatus = (currentField: BoardField, state: GameState): boolean =>{
    //Check if state property visitedAreas includes ID of current field
    return state.visitedAreas.includes(currentField._fieldID);
}

//Check the amount of action points in game state
/*
    @param {state} - gameState object
*/
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
*/
const updateAction = (numOfPoints: ENUM.ActionPointsEnum,state: GameState): void=>{
    state.actionNumbers += numOfPoints;
}

//Board movement function
/*
  @param {currentField} - current boardField object
*/
const move = (currentField: BoardField) : void=>{
    //Get state object from LS
    const state = getStateLS();
    //Mark the board as explored
    currentField.status = ENUM.BoardState.EXPLORED;
    //Push id of area to the state and mark area in DOM as explored
    state.updateVisitedAreas(currentField._fieldID);
    updateDOM.updateAreaDOM(state);
    //Remove 1 action point;
    state.actionNumbers -= 1;
    //Update state in LS
    updateStateLS(state);
    //Update actionPoints in interface
    updateDOM.updateActionDOM(state.actionNumbers)
}

//Read paragraph
/*
    @param {id} - id of the paragraph, which is the same as ID od DOM element nad board area ID
    @param {paragraphsArray} - array of all the paragraphs
*/
const readParagraph = (id: string, paragraphsArray: Array<Paragraph>): void=>{
    //Get state from LS
    const state = getStateLS();
    //Find current paragraph
    const currentParagraph : Paragraph = paragraphsArray.find((c: Paragraph)=>c.id === id)!;
    //Push current paragraph to the state
    if(currentParagraph){
        state.addParagraphsId(currentParagraph.id);
    }
    //Update LS
    updateStateLS(state);
    //Run DOM paragraphRead function
    read(currentParagraph);
}

//Get content from current area
/*
    @param {boardField} - object of current boardField
    @param {puzzleCardArray} - array of puzzle cards
    @param {puzzleArray} - array of all the puzzle objects
*/
const getAreaContent = (boardField: BoardField, puzzleCardArray: Array<PuzzleCard>, puzzleArray: Array<Puzzle>) : void=>{
    //Get state from LS
    const state = getStateLS();
    switch(boardField.content){
        case ENUM.BoardContent.CLUE:
            //Update points
            updateAction(ENUM.ActionPointsEnum.CLUE, state);
            //Update actionPoints in interface
            updateDOM.updateActionDOM(state.actionNumbers)
            break;
        case ENUM.BoardContent.PUZZLE:
            //Run function which add puzzle if not exist and get the puzzle card
            puzzle.newPuzzle(boardField.fieldID, puzzleArray, puzzleCardArray);
            puzzle.newPuzzleCard(boardField.fieldID, puzzleCardArray, puzzleArray);
            break;
        default:
    }
}

//Main action function
/*
    @param {areaID} - ID get from the DOM
    @param {currentField} - object of field we are exploring
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
    updateAction(ENUM.ActionPointsEnum.STRESSCARD, state);
    //Remove evidence if player have any
    if(state.userEvidencesId.length !== 0){
        state.removeEvidence();
    }
    //Update state
    updateStateLS(state);
    //Update evidences in interface
    updateDOM.updateEvidencesDOM();
    //Run DOM function reading random paragraph, tell the user that he lost evidence
    readStressParagraph(stressParagraphs);
    //Update actionPoints in interface
    updateDOM.updateActionDOM(state.actionNumbers);
}

export {getBoard, checkActions, checkStatus, mainAction, stressCardAction}