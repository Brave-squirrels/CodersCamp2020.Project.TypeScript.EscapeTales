import StressCard from "../src/stressCard";

describe("Paragraph test", () => {
  const stressCard = new StressCard("card");

  it(`get text`, () => {
    expect(stressCard.text).toEqual("card");
  });
});
