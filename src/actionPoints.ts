/**
 * @Class - ActionPoints
 *  class with common properites such as
 *  totalPoints(constant default value),
 *  currentPoints (changing value)
 */
export default class ActionPoints {
  constructor(
    private _totalPoints: number,
    private _currentPoints: number = _totalPoints
  ) {}

  get currentPoints() {
    return this._currentPoints;
  }

  resetPoints() {
    this._currentPoints = this._totalPoints;
  }

  addPoints(points: number) {
    this._currentPoints += points;
  }

  decrementPoints() {
    if (this._currentPoints > 0) --this._currentPoints;
    else throw new Error("Points can't be less than 0");
  }
}
