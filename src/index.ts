//Import
import {state, actionPoints, boardAreas, paragraphsArray, puzzleCardArray, puzzleArray} from './data';
import {getBoard, checkActions, checkStatus, mainAction} from './board';
import {solvePuzzle} from './puzzleAction';
import {notEnoughPoints, areaExplored} from './readContent';
import navigation from './navigation';


//Board movement event
document.addEventListener("click", (e: any): void => {
  if (e.target.classList.contains("map__square")) {
    //Getting ID of DOM element to find boardArea object
    const areaID: string = e.target.id;

    //Getting current board object
    const currentField = getBoard(areaID, boardAreas);

    //Get the current board object
    if (!checkStatus(currentField)) {
      //End if the area is explored
      //Run DOM function with message that area is explored
      areaExplored();
      return;
    }

    //If we have proper amount of actionPoints
    if (!checkActions(state)) {
      //End function cuz of lack of action points
      //Run DOM function with message that we don't have enough actionPoints
      notEnoughPoints();
      return;
    }

    //Function which run the movement and content events
    mainAction(
      areaID,
      state,
      currentField,
      actionPoints,
      paragraphsArray,
      puzzleCardArray,
      puzzleArray
    );
  }
});

//Puzzle solved event
document.addEventListener("click", (e: any): void => {
  if (e.target.className === "solvePuzzle") {
    //Display puzzle input solve modal
    const puzzleID: string = e.target.id;

    document.addEventListener("click", (evnt: any): void => {
      if (evnt.target.className === `Confirm${puzzleID}`) {
        //Run validation puzzle function
        solvePuzzle(puzzleID, state, puzzleArray, paragraphsArray);
      }
    });
  }
});

//Close paragraph modal
document.addEventListener("click", (e: any): void => {
  const paragraphCnt = document.querySelector(".paragraph") as HTMLElement;
  if (e.target.id === "paragraph__close" || paragraphCnt === e.target) {
    paragraphCnt.style.display = "none";
  }
});

// Navigation
navigation();
