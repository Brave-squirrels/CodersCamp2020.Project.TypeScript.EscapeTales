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
    private _text: string,
    readonly _content: string
  ) {}

  get text() {
    return this._text;
  }

  get content(){
    return this._content;
  }

  set text(value: string) {
    this._text = value;
  }
}
