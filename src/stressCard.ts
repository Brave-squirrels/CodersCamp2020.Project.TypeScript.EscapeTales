type fn = (n: number) => void;

/**
 * @Class - StressCard
 *  class with common properites such as
 *  text
 */
export default class StressCard {
  constructor(readonly text: string) {}

  addActionPoint(callack: fn) {
    callack(1);
    // function() -> take the evidence
  }

  readParagraph() {
    // read paragraph function
  }
}
