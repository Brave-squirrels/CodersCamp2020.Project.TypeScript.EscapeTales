export enum ENDING{
    HAPPYENDING,
    SADENDING
    }

export enum LOCATION{
    FIRST,
    SECOND,
    THIRD
}

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
                protected _storyline : ENDING = ENDING.HAPPYENDING, 
                protected _userEvidencesId : string[] = []
                ) {  }


        setActionNumbers(newActionNumber:number){
            this._actionNumbers = newActionNumber;
        }
        setUserParagraphsId(newParagraphsId:string){
            this._userParagraphsId.push(newParagraphsId);
        }
        setUserPuzzlesId(newPuzzleId:string){
            this._userPuzzlesId.push(newPuzzleId);
        }
        setUserLocationId(newLocationId:LOCATION){
            this._userLocationId = (newLocationId);
        }
        setVisitedAreasId(newVisitedAreasId:string){
            this._visitedAreasId.push(newVisitedAreasId);
        }
        setStoryline(newStoryline:ENDING){
            this._storyline = newStoryline;
        }
        setUserEvidencesId(newEvidencesId:string){
            this._userEvidencesId.push(newEvidencesId);
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

}

