export enum TestEnum{
    passed = 'PASSED'
}


/**
 * @Class - BoardField
 *  standard boardField with common properites sucj as status(explored or not), fieldID and paragraphID (story line text)
 */

export class BoardField {
    constructor(
        protected status: TestEnum, 
        protected fieldID: string, 
        protected paragraphID: string){}

    readParagraph(){
        // wywolanie funkcji z frontu do wczytania paragrafu
    };
}