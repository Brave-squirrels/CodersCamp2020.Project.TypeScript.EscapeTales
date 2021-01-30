export enum TestEnum{
    passed = 'PASSED'
}

export class BoardField {
    constructor(
        protected status: TestEnum, 
        protected fieldID: string, 
        protected paragraphID: string){}

        readParagraph(){
            // wywolanie funkcji z frontu do wczytania paragrafu
        };
}