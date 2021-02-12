//Import
import {
  state,
  actionPoints,
  boardAreas,
  paragraphsArray,
  puzzleCardArray,
  puzzleArray,
  stressParagraphs,
} from "./data";
import {
  getBoard,
  checkActions,
  checkStatus,
  mainAction,
  stressCardAction,
} from "./board";
import { solvePuzzle } from "./puzzleAction";
import { notEnoughPoints, areaExplored } from "./readContent";
import navigation from "./navigation";
import { solvePuzzleModal } from "./updateDOM";
import { updateLocalStorage } from './localStorage'

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
      updateLocalStorage();
      return;
    }

    //If we have proper amount of actionPoints
    if (!checkActions(state)) {
      //End function cuz of lack of action points
      //Run DOM function with message that we don't have enough actionPoints
      notEnoughPoints();
      updateLocalStorage();
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
    updateLocalStorage();
  }
});

//Puzzle solved event
document.addEventListener("click", (e: any): void => {
  if (e.target.classList.contains("interface__puzzle__container")) {
    //Display puzzle input solve modal
    const puzzleID: string = e.target.id;
    (document.querySelector(".puzzle") as HTMLElement).style.display = "block";

    //Add data to the modal
    solvePuzzleModal(puzzleID, puzzleArray, puzzleCardArray);

    document.addEventListener("click", (evnt: any): void => {
      if (evnt.target.classList.contains(`Confirm${puzzleID}`)) {
        //Run validation puzzle function
        solvePuzzle(puzzleID, state, puzzleArray, paragraphsArray);
        updateLocalStorage();
      }
    });
    updateLocalStorage();
  }
});

//Close puzzle modal
document.addEventListener("click", (e: any): void => {
  const puzzleCnt = document.querySelector(".puzzle") as HTMLElement;
  if (e.target.id === "puzzle__close" || puzzleCnt === e.target) {
    puzzleCnt.style.display = "none";
    updateLocalStorage();
  }
});

//Close paragraph modal
document.addEventListener("click", (e: any): void => {
  const paragraphCnt = document.querySelector(".paragraph") as HTMLElement;
  if (e.target.id === "paragraph__close" || paragraphCnt === e.target) {
    paragraphCnt.style.display = "none";
    updateLocalStorage();
  }
});

//Change story book page
document.addEventListener("click", (e: any): void => {
  if (
    e.target.className === "board__storybook__arrowLeft" ||
    e.target.className === "fas fa-reply"
  ) {
    state.previousStoryBookPage();
    updateLocalStorage();
  } else if (
    e.target.className === "board__storybook__arrowRight" ||
    e.target.className === "fas fa-share"
  ) {
    state.nextStoryBookPage();
    updateLocalStorage();
  }
});

//Display instruction
document.addEventListener("click", (e: any) => {
  if (e.target.id === "displayInstruction") {
    (document.querySelector(".instructionModal") as HTMLElement).style.display = "block";
    updateLocalStorage();
  }
  if (
    e.target.id === "instruction__close" ||
    (document.querySelector(".instructionModal") as HTMLElement) === e.target
  ) {
    (document.querySelector(".instructionModal") as HTMLElement).style.display = "none";
    updateLocalStorage();
  }
});

//Take stress card
document.addEventListener("click", (e: any) => {
  if (
    e.target.id === "interface__stressCard" ||
    e.target.id === "interface__stressCard__title"
  ) {
    stressCardAction(state, actionPoints, stressParagraphs);
    updateLocalStorage();
  }
});

//Close not enough points
document.addEventListener("click", (e: any) => {
  if (
    e.target.id === "noPoints__close" ||
    e.target === (document.querySelector(".noPoints__modal") as HTMLElement)
  ) {
    (document.querySelector(".noPoints__modal") as HTMLElement).style.display = "none";
      updateLocalStorage();
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
    updateLocalStorage();
  }
});

// Navigation
navigation();
