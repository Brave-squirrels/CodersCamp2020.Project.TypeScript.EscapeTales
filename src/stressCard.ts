type fn = (n: number) => void;

export default class StressCard {
  constructor(readonly text: string) {}

  addActionPoint(callack: fn) {
    callack(1);
    // function() -> take the evidence
  }
}
