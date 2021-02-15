import Paragraph from "../src/paragraph";

describe("Paragraph test", () => {
  const paragraph = new Paragraph("p1", 1, 1, "Exapmle text", 'Example content');

  it(`get text`, () => {
    expect(paragraph.text).toEqual("Exapmle text");
  });

  it(`get text`, () => {
    paragraph.text = "hello, new text";
    expect(paragraph.text).toEqual("hello, new text");
  });
});
