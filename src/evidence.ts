export class Evidence {
    constructor(
        readonly _ID: string,
        readonly _content: string
    ){}
    
    get content(){
        return this._content;
    }

    get evidenceID(){
        return this._ID;
    }
}