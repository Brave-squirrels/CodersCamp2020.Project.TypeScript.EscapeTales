import {newPuzzle, newPuzzleCard} from './puzzleAction';

//Enum for boardArea state
enum AreaState {
    EXPLORED = 1,
    PENDING = 0
}

//Enum for number of actions
enum ActionPoints {
    MOVE = -1,
    RESET = 6,
    STRESSCARD = 6,
    CLUE = 2
}

//Trying on
interface State  {
    action: number,
    evidences: number[],
    paragraphsList: any
}

interface Board {
    id: string,
    status: AreaState
}

const board1: Board = {
    id: '1',
    status: AreaState.PENDING
}
interface Paragraph{
    id: number,
    text: string,
}
const paragraph: Paragraph = {
    id: 1,
    text: "olaboga"
}

const state: State = {
    action: 6,
    evidences: [1,2,3,4],
    paragraphsList: []
}
const boardAreas = [{id: '1', status: AreaState.PENDING}];
const paragraphs = [{ID: '1', text: 'olaboga'}];

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
const checkStatus = (currentField: Board): boolean =>{
    return currentField.status === AreaState.PENDING;
}
//Check the amount of action points in game state
const checkActions = (state: State):boolean =>{
    return state.action > 0;
}


//Main action function
/*
    @param {areaID} - ID get from the DOM
    @param {boardAreas} - array of all boardArea objects
    @param {state} - game state object
    @param {currentField} - object of field we are exploring
*/
const mainAction = (areaID: string, boardAreas: Array<Board>, state: State, currentField: Board) : void=>{

     //Mark the board, as explored
     move(currentField);

     //Remove 1 Action point
     updateAction(ActionPoints.MOVE, state);

     //Read paragraph and add to the state
     readParagraph(areaID, state);

     //Get content from the area
     getAreaContent(currentField, state);
}


//Get the current board
/*
    @param {id} - id of the boardArea object
    @param {boardAreas} - array of all the boardArea objects
*/
const getBoard = (id:string, boardAreas: Array<Board>) : Board =>{
    return boardAreas.find(c=>c.id===id)!;
}

//Board movement function
/*
  @param {IDofArea} - ID of area which we are exploring
  Mark area, as explored
*/
const move = (currentBoard: Board) : void=>{

    //Mark the board as explored
    currentBoard.status = AreaState.EXPLORED;

}

//Read paragraph
/*
    @param {id} - id of the paragraph, which is the same as ID od DOM element nad board area ID
    @param {state} - state of the game object
*/
const readParagraph = (id: string, state: State): void=>{

    //Find current paragraph
    const currentParagraph = paragraphs.find(c=>c.ID === id);
    //Push current paragraph to the state
    state.paragraphsList.push(currentParagraph);
    //Run read paragraph method from boarArea object

}


//Update points and remove evidence if we have any
/*
    @param {state} - state object, which contains main game state data
*/
const stressCardAction = (state: State) : void=>{
    
    //Add action points
    updateAction(ActionPoints.STRESSCARD, state);
    //Remove evidence if player have any
    if(state.evidences.length !== 0){
        state.evidences.pop();
    }

}

//Update action points
/*
    @param {numOfActions} - number of action's which we wanna add/remove from state
    @param {state} - state object, which contains main game state data
*/
const updateAction = (numOfActions: number, state: State): void=>{

    state.action += numOfActions;

}

//Get content from current area
/*
    @param {boardField} - object of current boardField
*/
const getAreaContent = (boardField: Board, state: State) : void=>{

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
export {AreaState, getBoard, checkActions, checkStatus}