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

    To change property use:
        setNameOfProperty(element)

    To get property use:
        getNameOfProperty
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


        set setActionNumbers(newActionNumber:number){
            this._actionNumbers = newActionNumber;
        }
        set setUserParagraphsId(newParagraphsId:string){
            this._userParagraphsId.push(newParagraphsId);
        }
        set setUserPuzzlesId(newPuzzleId:string){
            this._userPuzzlesId.push(newPuzzleId);
        }
        set setUserLocationId(newLocationId:LOCATION){
            this._userLocationId = (newLocationId);
        }
        set setVisitedAreasId(newVisitedAreasId:string){
            this._visitedAreasId.push(newVisitedAreasId);
        }
        set setStoryline(newStoryline:ENDING){
            this._storyline = newStoryline;
        }
        set setUserEvidencesId(newEvidencesId:string){
            this._userEvidencesId.push(newEvidencesId);
        }


        get getActionsNumbers(){
            return this._actionNumbers;
        }
        get getUserParagraphsId(){
            return this._userParagraphsId;
        }
        get getUserPuzzlesId(){
            return this._userPuzzlesId;
        }
        get getUserLocationId(){
            return this._userLocationId;
        }
        get getVisitedAreasId(){
            return this._visitedAreasId;
        }
        get getStoryline(){
            return this._storyline;
        }
        get getUserEvidencesId(){
            return this._userEvidencesId;
        }

}



