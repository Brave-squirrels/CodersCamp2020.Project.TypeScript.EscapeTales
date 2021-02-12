import Paragraph from "./paragraph";
import TypeIt from "typeit";
import {updateStoryBook} from "./updateDOM";
import {getDate} from './date'
import {getStateLS} from './getLS';

/*
    Function which open modals and read paragraph in cases such as:
    -Move on board and get content (puzzle/card/clue/nothing)
    -Solve puzzle
    @param {paragraph} - paragraph object
*/
export const read = (paragraph: Paragraph): void => {
  const state = getStateLS();
  (document.querySelector(".paragraph") as HTMLElement).style.display = "block";
  (document.querySelector('.paragraph__text') as HTMLElement).innerHTML = '';
  //Slow type effect
  new TypeIt(".paragraph__text", {
    strings: `${paragraph.text} <br> You gain: <br>  ${paragraph.content}`,
    speed: 80,
    loop: false,
  }).go();
  const date: string = getDate().toString();
  state.addPage(date,paragraph.text);
  localStorage.setItem("state", JSON.stringify(state));
  updateStoryBook();
};

/*
    Read stressCard
    @param {stressParagraphs} - array of stress paragraphs
*/
export const readStressParagraph = (stressParagraphs: string[]) : void =>{

  const index = Math.floor(Math.random() * (stressParagraphs.length));

  (document.querySelector(".paragraph") as HTMLElement).style.display = "block";
  (document.querySelector('.paragraph__text') as HTMLElement).innerHTML = '';

  //Slow type effect
  new TypeIt(".paragraph__text", {
    strings: `${stressParagraphs[index]}`,
    speed: 80,
    loop: false,
  }).go();
}

/*
    Function with notification that the solution of a puzzle is incorrect
*/
export const incorrectPuzzle = (): void => {

  const validInput = document.querySelector('.puzzle__solve__input') as HTMLElement;
  validInput.classList.add('incorrect__solution');

  setTimeout(function(){
      validInput.classList.remove('incorrect__solution');
  }, 500);
  
};

/*
    Notification that the player has not enough points
*/
export const notEnoughPoints = (): void => {
  (document.querySelector('.noPoints__modal') as HTMLElement).style.display = 'block';
  (document.querySelector('.noPoints__text') as HTMLElement).innerHTML = '';
  new TypeIt(".noPoints__text", {
    strings: `You have not enough action points`,
    speed: 80,
    loop: false,
  }).go();
};


/*
    Notification that area is already explored
*/
export const areaExplored = (): void => {
  (document.querySelector('.areaExplored__modal') as HTMLElement).style.display = 'block';
  (document.querySelector('.areaExplored__text') as HTMLElement).innerHTML = '';
  new TypeIt(".areaExplored__text", {
    strings: `Area has been already explored`,
    speed: 80,
    loop: false,
  }).go();
};
