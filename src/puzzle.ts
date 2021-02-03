export default class Puzzle {
  constructor(
    readonly id: string,
    private _paragraph: string,
    private _puzzleCard: string[],
    private _visitedCards: string[],
    readonly price: string,
    readonly solution: string,
    readonly content: string
  ) {}

  get paragraph() {
    return this._paragraph;
  }

  addVisitedCard(elem: string) {
    this._visitedCards.push(elem);
  }

  addPuzzleCard(elem: string) {
    this._puzzleCard.push(elem);
  }
}
