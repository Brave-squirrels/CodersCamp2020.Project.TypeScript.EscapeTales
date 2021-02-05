//Import
import { BoardField} from './boardField';
import {GameState} from './state';
import ActionPoints from './actionPoints';
import Paragraph from './paragraph';
import{BoardState, BoardContent, LOCATION, ENDING, PuzzleReward} from './ENUM';
import {Puzzle} from './puzzle';
import PuzzleCard from './puzzleCard';
import {getBoard, checkActions, checkStatus, mainAction} from './board';
import {solvePuzzle} from './puzzleAction';
//Testing
const state = new GameState(3, [],[],LOCATION.FIRST,[],ENDING.HAPPYENDING, [], 0);
const boardField = new BoardField(BoardState.PENDING, 'board1','board1',BoardContent.CLUE)
const boardAreas = [boardField];
const actionPoints = new ActionPoints(6,2);
const paragraph = new Paragraph('board1', 1,1,'crazy paragraph');
const paragraphsArray = [paragraph];
const puzzlecardone = new PuzzleCard('board1', 'board1', 'crazy message');
const puzzleone = new Puzzle ('board1', 'crazy paragraph', ['board1'], [], PuzzleReward.EVIDENCE, 'solution is lmao', 'crazy content');
const puzzleCardArray = [puzzlecardone];
const puzzleArray = [puzzleone];

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
             //Run DOM function with message that area is explored
             return;
        }

        //If we have proper amount of actionPoints
        if(!checkActions(state)){
            //End function cuz of lack of action points
            //Run DOM function with message that we don't have enough actionPoints
            return;
        }

        //Function which run the movement and content events
        mainAction(areaID, state, currentField, actionPoints, paragraphsArray, puzzleCardArray, puzzleArray);
    }

})

//Puzzle solved event
document.addEventListener('click', (e:any) : void=>{

    if(e.target.className === 'solvePuzzle'){

        //Display puzzle input solve modal
        const puzzleID: string = e.target.id;

        document.addEventListener('click', (evnt:any) : void =>{

            if(evnt.target.className === `Confirm${puzzleID}`){
                //Run validation puzzle function
                solvePuzzle(puzzleID, state, puzzleArray, paragraphsArray);
            }

        })

    }

})