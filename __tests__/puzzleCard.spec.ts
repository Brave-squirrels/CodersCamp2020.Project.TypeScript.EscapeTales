import PuzzleCard from "../src/puzzleCard";

describe("Paragraph test", () => {
  const puzzleCard = new PuzzleCard("pzc1", "pz1", "content text");

  it(`get content`, () => {
    expect(puzzleCard.content).toEqual("content text");
  });

  it(`get id`, () => {
    expect(puzzleCard.id).toEqual("pzc1");
  });
});
