//Import
import * as data from "./data";
import * as boardAction from "./board";
import { solvePuzzle } from "./puzzleAction";
import * as readContent from "./readContent";
import navigation from "./navigation";
import * as updateDOM from "./updateDOM";
import { initNewGame } from "./newGame";
import { onLoadUpdate } from "./continue";
import * as getLS from "./getLS";
import { nextLocation } from "./goNext";
import { updateStateLS } from "./updateLS";
import { getEndingStory } from "./ending";

//Board movement event
document.addEventListener("click", (e: any): void => {
  if (e.target.classList.contains("map__square")) {
    //Get state from localStorage
    const state = getLS.getStateLS();
    //Getting ID of DOM element to find boardArea object
    const areaID: string = e.target.id;

    //Getting current board object
    const currentField = boardAction.getBoard(areaID, data.boardAreas);

    //Get the current board object
    if (boardAction.checkStatus(currentField, state)) {
      //Run DOM function with message that area is explored
      readContent.areaExplored();
      //End function
      return;
    }

    //If we have proper amount of actionPoints
    if (!boardAction.checkActions(state)) {
      //Run DOM function with message that we don't have enough actionPoints
      readContent.notEnoughPoints();
      //End function
      return;
    }

    //Get puzzle array from LS
    let puzzleArrayMain = getLS.getPuzzleLS();
    //Function which run the movement and content events
    boardAction.mainAction(
      areaID,
      currentField,
      data.paragraphsArray,
      data.puzzleCardArray,
      puzzleArrayMain
    );
  }
});

//Puzzle solved event
document.addEventListener("click", (e: any): void => {
  if (e.target.classList.contains("interface__puzzle__container")) {
    //Get state from localStorage
    const puzzleArray = getLS.getPuzzleLS();
    //Display puzzle input solve modal
    const puzzleID: string = e.target.id;
    (document.querySelector(".puzzle") as HTMLElement).style.display = "block";

    //Add data to the modal
    updateDOM.solvePuzzleModal(puzzleID, puzzleArray, data.puzzleCardArray);
  } else if (e.target.classList.contains(`puzzle__solve__submit`)) {
    //Get puzzleArray from LS
    const puzzleArray = getLS.getPuzzleLS();
    //Take puzzle ID from DOM
    const puzzleID = e.target.id;
    //Run validation puzzle function
    solvePuzzle(puzzleID, puzzleArray, data.paragraphsArray);
  }
});

//Close puzzle modal
document.addEventListener("click", (e: any): void => {
  const puzzleCnt = document.querySelector(".puzzle") as HTMLElement;
  if (e.target.id === "puzzle__close" || puzzleCnt === e.target) {
    puzzleCnt.style.display = "none";
  }
});

//Close paragraph modal
document.addEventListener("click", (e: any): void => {
  const paragraphCnt = document.querySelector(".paragraph") as HTMLElement;
  if (e.target.id === "paragraph__close" || paragraphCnt === e.target) {
    paragraphCnt.style.display = "none";
  }
});

//Change story book page
document.addEventListener("click", (e: any): void => {
  if (
    e.target.className === "board__storybook__arrowLeft" ||
    e.target.className === "fas fa-reply"
  ) {
    //Get state from localStorage
    const state = getLS.getStateLS();
    state.previousStoryBookPage();
    updateStateLS(state);
    updateDOM.updateStoryBook();
  } else if (
    e.target.className === "board__storybook__arrowRight" ||
    e.target.className === "fas fa-share"
  ) {
    //Get state from localStorage
    const state = getLS.getStateLS();
    state.nextStoryBookPage();
    updateStateLS(state);
    updateDOM.updateStoryBook();
  }
});

//Display instruction
document.addEventListener("click", (e: any) => {
  if (e.target.id === "displayInstruction") {
    (document.querySelector(".instructionModal") as HTMLElement).style.display =
      "block";
  }
  if (
    e.target.id === "instruction__close" ||
    (document.querySelector(".instructionModal") as HTMLElement) === e.target
  ) {
    (document.querySelector(".instructionModal") as HTMLElement).style.display =
      "none";
  }
});

//Take stress card
document.addEventListener("click", (e: any) => {
  if (
    e.target.id === "interface__stressCard" ||
    e.target.id === "interface__stressCard__title"
  ) {
    //Get state from localStorage
    const state = getLS.getStateLS();
    boardAction.stressCardAction(state, data.stressParagraphs);
  }
});

//Close not enough points
document.addEventListener("click", (e: any) => {
  if (
    e.target.id === "noPoints__close" ||
    e.target === (document.querySelector(".noPoints__modal") as HTMLElement)
  ) {
    (document.querySelector(".noPoints__modal") as HTMLElement).style.display =
      "none";
  }
});

//Close ending story
document.addEventListener("click", (e: any) => {
  if (
    e.target.id === "ending__close" ||
    e.target === (document.querySelector(".ending__modal") as HTMLElement)
  ) {
    (document.querySelector(".ending__modal") as HTMLElement).style.display =
      "none";
  }
});



//Close areaExplored
document.addEventListener("click", (e: any) => {
  if (
    e.target.id === "areaExplored__close" ||
    e.target === (document.querySelector(".areaExplored__modal") as HTMLElement)
  ) {
    (document.querySelector(
      ".areaExplored__modal"
    ) as HTMLElement).style.display = "none";
  }
});

// Go next
document.addEventListener("click", (e: any) => {
  if (/goNext/.test(e.target.className)) {
    const currentBoard = document.querySelector(".activeBoard")!;
    const currentId = parseInt(currentBoard.id.toString().match(/\d/)![0]);
    //Get state from LS
    const state = getLS.getStateLS();
    //Check if player has enough progressPoints
    if (state.progressPoints === 2) {
      if (currentId !== 3) {
        //Go the the next location

        // HERE WE HAVE TO SWITCH IF WITH ELSE 
        getEndingStory()
      } else {
        const nextBoard = document.querySelector(`#board${currentId + 1}`)!;
        currentBoard.classList.toggle("activeBoard");
        nextBoard.classList.toggle("activeBoard");
        state.userLocationId += 1;
        nextLocation(currentId);
      }
    } else {
      //Read notification
      readContent.readNotEnughPR();
    }
  }
});

//Start new game
document.addEventListener("click", (e: any) => {
  if (
    e.target === (document.querySelector("#newGameBtn") as HTMLElement) ||
    e.target === (document.querySelector("#resetGame") as HTMLElement)
  ) {
    initNewGame();
  }
});

//Continue game
document.addEventListener("click", (e: any) => {
  if (e.target === (document.querySelector("#continueBtn") as HTMLElement)) {
    onLoadUpdate();
  }
});

//Save data when refresh the site
window.onload = onLoadUpdate;

// Navigation
navigation();
