export default class Paragraph {
  constructor(
    readonly id: string,
    readonly location: number,
    readonly storyLine: number,
    private _text: string
  ) {}

  get text() {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }
}
