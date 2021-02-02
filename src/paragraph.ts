export default class Paragraph {
  constructor(
    private _id: number,
    private location: number,
    private storyLine: number,
    private _text: string
  ) {}

  get id() {
    return this._id;
  }

  get text() {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  position() {
    return { location: this.location, storyLine: this.storyLine };
  }
}
