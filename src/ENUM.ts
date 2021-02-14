//Enum for number of actions
enum ActionPointsEnum {
    MOVE = -1,
    STRESSCARD = 4,
    CLUE = 3
}

//Reward from solving the puzzle
enum PuzzleReward{
    EVIDENCE,
    PROGRESSPOINT
}

//Content on board
enum BoardContent{
    PUZZLE,
    CLUE,
    NOTHING
}

//State of the board
enum BoardState{
    PENDING,
    EXPLORED
}

//Game ending
enum ENDING{
    BESTENDING,
    WORSTENDING,
    MEDIUMENDING1,
    MEDIUMENDING2
}

//Location
enum LOCATION{
    FIRST = 1,
    SECOND = 2,
    THIRD = 3
}

export {LOCATION, ENDING, BoardState, PuzzleReward, ActionPointsEnum, BoardContent};