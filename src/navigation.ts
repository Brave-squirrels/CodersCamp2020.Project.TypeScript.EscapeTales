// Render page from template
class GamePanel {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLElement;
  element: HTMLElement;

  constructor(nameId: string) {
    this.templateElement = document.getElementById(
      nameId
    ) as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLElement;

    this.attach(true);
  }

  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? "afterbegin" : "beforeend",
      this.element
    );
  }
}

// Navitgation
const homePanel = new GamePanel("home-page");
const boardPanel = new GamePanel("game-board");

const home = document.querySelector(".home")! as HTMLElement;
const board = document.querySelector(".container")! as HTMLElement;
const startBtn = document.querySelector("#startBtn")! as HTMLDivElement;
const homeBackBtn = document.querySelector("#homeBack")! as HTMLDivElement;

export default function navigation() {
  // go to board panel
  startBtn.addEventListener("click", () => {
    home.style.display = "none";
    home.style.opacity = "0";

    board.style.display = "block";
    setTimeout(() => {
      board.style.opacity = "1";
    }, 10);
  });

  // go to home panel
  homeBackBtn.addEventListener("click", () => {
    board.style.display = "none";
    board.style.opacity = "0";

    home.style.display = "flex";
    setTimeout(() => {
      home.style.opacity = "1";
    }, 10);
  });
}
