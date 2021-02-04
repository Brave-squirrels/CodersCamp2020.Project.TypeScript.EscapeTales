export enum TestEnum {
  passed = "PASSED",
  failed = "FAILED",
}

/**
 * @Class - BoardField
 *  standard boardField with common properites sucj as status(explored or not), fieldID and paragraphID (story line text)
 */

export class BoardField {
  constructor(
    protected _status: TestEnum,
    readonly _fieldID: string,
    readonly _paragraphID: string
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

  set status(status: TestEnum) {
    this._status = status;
  }

  readParagraph() {
    // wywolanie funkcji z frontu do wczytania paragrafu
  }
}
