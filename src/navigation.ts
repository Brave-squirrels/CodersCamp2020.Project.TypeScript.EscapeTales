// Render page from template
/*
    @param {nameId} - id of template to display
*/
const createFormTemplate = (nameId: string) => {
  const templateElement = document.getElementById(
    nameId
  ) as HTMLTemplateElement;

  const hostElement = document.getElementById("app")! as HTMLElement;
  const importedNode = document.importNode(templateElement.content, true);

  const element = importedNode.firstElementChild as HTMLElement;

  hostElement.insertAdjacentElement("afterbegin", element);
};

createFormTemplate("home-page");
createFormTemplate("game-board");

const home = document.querySelector(".home")! as HTMLElement;
const board = document.querySelector(".container")! as HTMLElement;
const startBtn = document.querySelector("#startBtn")! as HTMLDivElement;
const homeBackBtn = document.querySelector("#homeBack")! as HTMLDivElement;

// Display page from template
/*
    @param {oldElem} - element to hide
    @param {newElem} - element to show
*/
const handleClick = (oldElem: HTMLElement, newElem: HTMLElement) => {
  oldElem.style.display = "none";
  oldElem.style.opacity = "0";

  newElem.style.display = newElem === board ? "block" : "flex";
  setTimeout(() => {
    newElem.style.opacity = "1";
  }, 10);
};

// Navigate between panels
export default function navigation() {
  // go to board panel
  startBtn.addEventListener("click", () => {
    handleClick(home, board);
  });

  // go to home panel
  homeBackBtn.addEventListener("click", () => {
    handleClick(board, home);
  });
}
