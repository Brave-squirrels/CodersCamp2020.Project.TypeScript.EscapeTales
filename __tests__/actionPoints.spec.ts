import ActionPoints from "../src/actionPoints";

describe("Action points test", () => {
  const points = new ActionPoints(5);

  it(`get points`, () => {
    expect(points.amount).toEqual(5);
  });

  [4, 3, 2, 1, 0].map((testCase) => {
    it("decrement points", () => {
      points.decrementPoints();
      expect(points.amount).toEqual(testCase);
    });
  });

  it("throw error when points less than 0", () => {
    expect(() => points.decrementPoints()).toThrowError(
      "Points can't be less than 0"
    );
  });

  it("reset points", () => {
    points.resetPoints();
    expect(points.amount).toEqual(5);
  });
});
