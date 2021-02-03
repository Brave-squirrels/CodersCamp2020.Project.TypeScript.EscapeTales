type fn = (n: number) => void;

/**
 * @Class - StressCard
 *  class with common properites such as
 *  text
 */
export default class StressCard {
  constructor(readonly text: string) {}

  addActionPoint(callback: fn) {
    callback(1); // add a point to action points
    // function() -> take the evidence
  }

  readParagraph() {
    // read paragraph function
  }
}
