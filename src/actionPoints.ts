export default class ActionPoints {
  constructor(
    private totalPoints: number = 0,
    private currentPoints: number = totalPoints,
    private existence: boolean = true
  ) {}

  get amount() {
    return this.currentPoints;
  }

  get isExist() {
    return this.existence;
  }

  resetPoints() {
    this.currentPoints = this.totalPoints;
    this.existence = true;
  }

  decrementPoints() {
    if (this.currentPoints > 0) {
      --this.currentPoints;
      this.existence = false;
    } else throw new Error("Points can't be less than 0");
  }
}
