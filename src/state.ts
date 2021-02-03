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
    
    constructor(protected actionNumbers : number = 5,
                protected userParagraphsId : string[] = [],
                protected userPuzzlesId : string[] = [], 
                protected userLocationId : LOCATION = LOCATION.FIRST,
                protected visitedAreasId : string[] = [],
                protected storyline : ENDING = ENDING.HAPPYENDING, 
                protected userEvidencesId : string[] = []
                ) {  }


        set setActionNumbers(newActionNumber:number){
            this.actionNumbers = newActionNumber;
        }
        set setUserParagraphsId(newParagraphsId:string){
            this.userParagraphsId.push(newParagraphsId);
        }
        set setUserPuzzlesId(newPuzzleId:string){
            this.userPuzzlesId.push(newPuzzleId);
        }
        set setUserLocationId(newLocationId:LOCATION){
            this.userLocationId = (newLocationId);
        }
        set setVisitedAreasId(newVisitedAreasId:string){
            this.visitedAreasId.push(newVisitedAreasId);
        }
        set setStoryline(newStoryline:ENDING){
            this.storyline = newStoryline;
        }
        set setUserEvidencesId(newEvidencesId:string){
            this.userEvidencesId.push(newEvidencesId);
        }


        get getActionsNumbers(){
            return this.actionNumbers;
        }
        get getUserParagraphsId(){
            return this.userParagraphsId;
        }
        get getUserPuzzlesId(){
            return this.userPuzzlesId;
        }
        get getUserLocationId(){
            return this.userLocationId;
        }
        get getVisitedAreasId(){
            return this.visitedAreasId;
        }
        get getStoryline(){
            return this.storyline;
        }
        get getUserEvidencesId(){
            return this.userEvidencesId;
        }

}

