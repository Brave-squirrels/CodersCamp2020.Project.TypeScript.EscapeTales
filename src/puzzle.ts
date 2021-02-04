/**
 * @Class - Puzzle
 *  class with common properites such as
 *  id,
 *  paragraph,
 *  puzzleCard (array of id),
 *  visitedCards (array of id),
 *  price,
 *  solution
 *  content
 */
export default class Puzzle {
  constructor(
    readonly id: string,
    private _paragraph: string,
    private _puzzleCards: string[],
    private _visitedCards: string[],
    readonly price: string,
    readonly solution: string,
    readonly content: string
  ) {}

  get paragraph() {
    return this._paragraph;
  }

  get puzzleCards() {
    return this._puzzleCards;
  }

  get visitedCards() {
    return this._visitedCards;
  }

  addVisitedCard(elem: string) {
    this._visitedCards.push(elem);
  }

  addPuzzleCard(elem: string) {
    this._puzzleCards.push(elem);
  }
}
