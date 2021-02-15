import  * as ENUM from './ENUM';
import { changePageStoryBook } from './updateDOM';
/*
@Class GameState:
    Actual game state, include:
       -number of actions
       -array of all discovered paragraphes ID
       -array of all discovered puzzles ID
       -array of all solved puzzles
       -ID of actual location
       -story line progress string
       -number of current story line
       -array of all discovered evidences ID
       -number of progress points in current location
        -array of all visited areas ID
       -Story book pages string
       -current number of page in story book

    To add change somthing in GameState use:
        method: setNameOfProperty(element)

    To get property use:
        getter: nameOfProperty
*/
export class GameState {
    
    constructor(protected _actionNumbers : number = 6,
                protected _userParagraphsId : string[] = [],
                protected _userPuzzlesId : string[] = [], 
                protected _puzzlesSolved : string[] =[],
                protected _userLocationId : ENUM.LOCATION = ENUM.LOCATION.FIRST,
                protected _storyline : string[] = [],
                protected _storylineID: number = 0,
                protected _userEvidencesId : string[] = [],
                protected _progressPoints: number = 0,
                protected _visitedAreas: string[] = [],
                protected _storyBook: string[] = ["Story Book"],
                protected _currentPage: number = 0
                ) {  }


        set actionNumbers(newActionNumber:number){
            this._actionNumbers = newActionNumber;
        }

        set userLocationId(newLocationId:ENUM.LOCATION){
            this._userLocationId = newLocationId;
        }

        addPuzzleSolved(id: string){
            this._puzzlesSolved.push(id);
        }

        addParagraphsId(newParagraphsId:string){
            this._userParagraphsId.push(newParagraphsId);
        }

        addPuzzlesId(newPuzzleId:string){
            this._userPuzzlesId.push(newPuzzleId);
        }
        
        addEvidencesId(newEvidencesId:string){
            this._userEvidencesId.push(newEvidencesId);
        }

        removeEvidence(){
            this._userEvidencesId.pop();
        }

        progressPointInc(){
            this._progressPoints++
        }

        removePuzzle(ID: string){
            const index = this._userPuzzlesId.indexOf(ID);
            this._userPuzzlesId.splice(index,1);
        }

        updateVisitedAreas(ID:string){
            this._visitedAreas.push(ID);
        }

        addPage(date: string, text: string){
            const complete: string = date+"<br>"+text;
            this._storyBook.push(complete);
            this._currentPage = this._storyBook.length-1;
        }

        addStoryBook(story){
            this._storyBook = story;
        }

        nextStoryBookPage(){
            this._currentPage++;
            changePageStoryBook(this._currentPage);
        }

        previousStoryBookPage(){
            this._currentPage--;
            changePageStoryBook(this._currentPage);
        }

        currentPageChange(num){
            this._currentPage = num;
        }

        addStoryLine(text : string){
            this._storyline.push(text);
        }

        addStoryLineID(num : number){
            this._storylineID += num;
        }

        get actionNumbers(){
            return this._actionNumbers;
        }
        get userParagraphsId(){
            return this._userParagraphsId;
        }
        get userPuzzlesId(){
            return this._userPuzzlesId;
        }
        get userLocationId(){
            return this._userLocationId;
        }
        get visitedAreasId(){
            return this._visitedAreas;
        }
        get storyline(){
            return this._storyline;
        }
        get storylineID(){
            return this._storylineID;
        }
        get userEvidencesId(){
            return this._userEvidencesId;
        }
        get visitedAreas(){
            return this._visitedAreas;
        }
        get storyBook(){
            return this._storyBook;
        }
        get currentPage(){
            return this._currentPage;
        }
        get progressPoints(){
            return this._progressPoints;
        }
        get story(){
            return this._storyBook;
        }
        get puzzlesSolved(){
            return this._puzzlesSolved;
        }
}
