export enum TestEnum{
    passed = 'PASSED',
    failed = 'FAILED'
}


/**
 * @Class - BoardField
 *  standard boardField with common properites sucj as status(explored or not), fieldID and paragraphID (story line text)
 */

export class BoardField {
    constructor(
        protected status: TestEnum, 
        readonly fieldID: string, 
        readonly paragraphID: string){}

    get getStatus(){
        return this.status;
    }

    get getFieldID(){
        return this.fieldID;
    }

    get getParagraphID(){
        return this.paragraphID;
    }

    set setCurrentStatus(status: TestEnum){
        this.status=TestEnum.failed;
    }

    readParagraph(){
        // wywolanie funkcji z frontu do wczytania paragrafu
    };
}