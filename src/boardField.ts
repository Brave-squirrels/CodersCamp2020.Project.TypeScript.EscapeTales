import { BoardContent, BoardState } from "./ENUM";

/**
 * @Class - BoardField
 *  standard boardField with common properites sucj as status(explored or not), fieldID and paragraphID (story line text)
 */

export class BoardField {
  constructor(
    protected _status: BoardState,
    readonly _fieldID: string,
    readonly _paragraphID: string,
    readonly _content: BoardContent
  ) {}

  get status() {
    return this._status;
  }

  get fieldID() {
    return this._fieldID;
  }

  get paragraphID() {
    return this._paragraphID;
  }

  get content() {
    return this._content;
  }

  set status(status: BoardState) {
    this._status = status;
  }
}