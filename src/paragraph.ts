import {LOCATION} from './ENUM';
/**
 * @Class - Paragraph
 *  class with common properites such as
 *  id,
 *  location,
 *  story line,
 *  text
 */
export default class Paragraph {
  constructor(
    readonly id: string,
    readonly location: LOCATION,
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
