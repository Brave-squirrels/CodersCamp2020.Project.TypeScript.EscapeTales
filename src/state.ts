import {ENDING, LOCATION} from './ENUM';
import { changePageStoryBook } from './updateDOM';

/*
@Class GameState:
    Actual game state, include:
       -number of actions
       -array of all discovered paragraphes ID
       -array of all discovered puzzles ID
       -ID of actual location
       -array of all visited areas ID
       -number of actual storyline ending 
       -array of all discovered evidences ID

    To add change somthing in GameState use:
        method: setNameOfProperty(element)

    To get property use:
        getter: nameOfProperty
*/
export class GameState {
    
    constructor(protected _actionNumbers : number = 5,
                protected _userParagraphsId : string[] = [],
                protected _userPuzzlesId : string[] = [], 
                protected _userLocationId : LOCATION = LOCATION.FIRST,
                protected _visitedAreasId : string[] = [],
                protected _storyline : ENDING = ENDING.BESTENDING, 
                protected _userEvidencesId : string[] = [],
                protected _progressPoints: number = 0,
                protected _visitedAreas: string[] = [],
                protected _storyBook: string[] = ["Story Book"],
                protected _currentPage: number = 0
                ) {  }


        set actionNumbers(newActionNumber:number){
            this._actionNumbers = newActionNumber;
        }

        set userLocationId(newLocationId:LOCATION){
            this._userLocationId = newLocationId;
        }

        set storyline(newStoryline:ENDING){
            this._storyline = newStoryline;
        }

        addParagraphsId(newParagraphsId:string){
            this._userParagraphsId.push(newParagraphsId);
        }

        addPuzzlesId(newPuzzleId:string){
            this._userPuzzlesId.push(newPuzzleId);
        }
        
        addVisitedAreasId(newVisitedAreasId:string){
            this._visitedAreasId.push(newVisitedAreasId);
        }
        
        addEvidencesId(newEvidencesId:string){
            this._userEvidencesId.push(newEvidencesId);
        }

        removeEvidence(){
            this._userEvidencesId.pop();
        }

        resetProgressPoints(){
            this._progressPoints = 0;
        }

        addProgressPoint(){
            ++this._progressPoints;
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

        nextStoryBookPage(){
            this._currentPage++;
            changePageStoryBook(this._currentPage);
        }

        previousStoryBookPage(){
            this._currentPage--;
            changePageStoryBook(this._currentPage);
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
            return this._visitedAreasId;
        }
        get storyline(){
            return this._storyline;
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
}
