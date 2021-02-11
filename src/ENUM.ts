//Enum for number of actions
export enum ActionPointsEnum {
    MOVE = -1,
    RESET = 6,
    STRESSCARD = 4,
    CLUE = 2
}

export enum PuzzleReward{
    EVIDENCE,
    PROGRESSPOINT
}

export enum BoardContent{
    PUZZLE,
    CLUE,
    NOTHING
}

export enum BoardState{
    PENDING,
    EXPLORED
}

export enum ENDING{
    BESTENDING,
    WORSTENDING,
    MEDIUMENDING1,
    MEDIUMENDING2
}

export enum LOCATION{
    FIRST,
    SECOND,
    THIRD
}