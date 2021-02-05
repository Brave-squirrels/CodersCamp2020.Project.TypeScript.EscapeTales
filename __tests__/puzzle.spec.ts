import Puzzle from "../src/puzzle";

describe("Paragraph test", () => {
  const puzzle = new Puzzle(
    "pz1",
    "paragraph",
    ["p1, p2"],
    ["p3"],
    "medal",
    "1234",
    "content text"
  );

  it(`get text`, () => {
    expect(puzzle.paragraph).toEqual("paragraph");
  });

  it(`get text`, () => {
    puzzle.addVisitedCard("p6");
    expect(puzzle.visitedCards).toEqual(["p3", "p6"]);
  });
});
