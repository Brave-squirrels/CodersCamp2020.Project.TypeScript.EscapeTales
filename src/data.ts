//Import
import { BoardField} from './boardField';
import {GameState} from './state';
import ActionPoints from './actionPoints';
import Paragraph from './paragraph';
import{BoardState, BoardContent, LOCATION, PuzzleReward} from './ENUM';
import {Puzzle} from './puzzle';
import PuzzleCard from './puzzleCard';

//Default state object
export const state = new GameState();

//Action points object
export const actionPoints = new ActionPoints(5);

//BoardFields
export const boardAreas : Array<BoardField> = [
    //First location
    new BoardField(BoardState.PENDING, 'l1b11', 'l1b11', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l1b12', 'l1b12', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l1b13', 'l1b13', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l1b14', 'l1b14', BoardContent.CLUE),
    new BoardField(BoardState.PENDING, 'l1b15', 'l1b15', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l1b21', 'l1b21', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l1b22', 'l1b22', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l1b23', 'l1b23', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l1b24', 'l1b24', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l1b25', 'l1b25', BoardContent.CLUE),
    new BoardField(BoardState.PENDING, 'l1b31', 'l1b31', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l1b32', 'l1b32', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l1b33', 'l1b33', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l1b34', 'l1b34', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l1b35', 'l1b35', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l1b41', 'l1b41', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l1b42', 'l1b42', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l1b43', 'l1b43', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l1b44', 'l1b44', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l1b45', 'l1b45', BoardContent.NOTHING),
    //Second location
    new BoardField(BoardState.PENDING, 'l2b11', 'l2b11', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b12', 'l2b12', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b13', 'l2b13', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b14', 'l2b14', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b15', 'l2b15', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b21', 'l2b21', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b22', 'l2b22', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b23', 'l2b23', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b24', 'l2b24', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b25', 'l2b25', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b31', 'l2b31', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b32', 'l2b32', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b33', 'l2b33', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b34', 'l2b34', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b35', 'l2b35', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b41', 'l2b41', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b42', 'l2b42', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b43', 'l2b43', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b44', 'l2b44', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b45', 'l2b45', BoardContent.PUZZLE),
    //Third location
    new BoardField(BoardState.PENDING, 'l3b11', 'l3b11', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b12', 'l3b12', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b13', 'l3b13', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b14', 'l3b14', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b15', 'l3b15', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b21', 'l3b21', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b22', 'l3b22', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b23', 'l3b23', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b24', 'l3b24', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b25', 'l3b25', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b31', 'l3b31', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b32', 'l3b32', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b33', 'l3b33', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b34', 'l3b34', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b35', 'l3b35', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b41', 'l3b41', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b42', 'l3b42', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b43', 'l3b43', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b44', 'l3b44', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b45', 'l3b45', BoardContent.PUZZLE),
]

//Paragraphs

export const paragraphsArray : Array<Paragraph> = [
    //First location
    new Paragraph('l1b11', LOCATION.FIRST, 1, 'Test paragraph'),
    new Paragraph('l1b12', LOCATION.FIRST, 1, ''),
    new Paragraph('l1b13', LOCATION.FIRST, 1, ''),
    new Paragraph('l1b14', LOCATION.FIRST, 1, ''),
    new Paragraph('l1b15', LOCATION.FIRST, 1, ''),
    new Paragraph('l1b21', LOCATION.FIRST, 1, ''),
    new Paragraph('l1b22', LOCATION.FIRST, 1, ''),
    new Paragraph('l1b23', LOCATION.FIRST, 1, ''),
    new Paragraph('l1b24', LOCATION.FIRST, 1, ''),
    new Paragraph('l1b25', LOCATION.FIRST, 1, ''),
    new Paragraph('l1b31', LOCATION.FIRST, 1, ''),
    new Paragraph('l1b32', LOCATION.FIRST, 1, ''),
    new Paragraph('l1b33', LOCATION.FIRST, 1, ''),
    new Paragraph('l1b34', LOCATION.FIRST, 1, ''),
    new Paragraph('l1b35', LOCATION.FIRST, 1, ''),
    new Paragraph('l1b41', LOCATION.FIRST, 1, ''),
    new Paragraph('l1b42', LOCATION.FIRST, 1, ''),
    new Paragraph('l1b43', LOCATION.FIRST, 1, ''),
    new Paragraph('l1b44', LOCATION.FIRST, 1, ''),
    new Paragraph('l1b45', LOCATION.FIRST, 1, ''),
    //Second location
    new Paragraph('l2b11', LOCATION.SECOND, 1, ''),
    new Paragraph('l2b12', LOCATION.SECOND, 1, ''),
    new Paragraph('l2b13', LOCATION.SECOND, 1, ''),
    new Paragraph('l2b14', LOCATION.SECOND, 1, ''),
    new Paragraph('l2b15', LOCATION.SECOND, 1, ''),
    new Paragraph('l2b21', LOCATION.SECOND, 1, ''),
    new Paragraph('l2b22', LOCATION.SECOND, 1, ''),
    new Paragraph('l2b23', LOCATION.SECOND, 1, ''),
    new Paragraph('l2b24', LOCATION.SECOND, 1, ''),
    new Paragraph('l2b25', LOCATION.SECOND, 1, ''),
    new Paragraph('l2b31', LOCATION.SECOND, 1, ''),
    new Paragraph('l2b32', LOCATION.SECOND, 1, ''),
    new Paragraph('l2b33', LOCATION.SECOND, 1, ''),
    new Paragraph('l2b34', LOCATION.SECOND, 1, ''),
    new Paragraph('l2b35', LOCATION.SECOND, 1, ''),
    new Paragraph('l2b41', LOCATION.SECOND, 1, ''),
    new Paragraph('l2b42', LOCATION.SECOND, 1, ''),
    new Paragraph('l2b43', LOCATION.SECOND, 1, ''),
    new Paragraph('l2b44', LOCATION.SECOND, 1, ''),
    new Paragraph('l2b45', LOCATION.SECOND, 1, ''),
    //Third location
    new Paragraph('l3b11', LOCATION.THIRD, 1, ''),
    new Paragraph('l3b12', LOCATION.THIRD, 1, ''),
    new Paragraph('l3b13', LOCATION.THIRD, 1, ''),
    new Paragraph('l3b14', LOCATION.THIRD, 1, ''),
    new Paragraph('l3b15', LOCATION.THIRD, 1, ''),
    new Paragraph('l3b21', LOCATION.THIRD, 1, ''),
    new Paragraph('l3b22', LOCATION.THIRD, 1, ''),
    new Paragraph('l3b23', LOCATION.THIRD, 1, ''),
    new Paragraph('l3b24', LOCATION.THIRD, 1, ''),
    new Paragraph('l3b25', LOCATION.THIRD, 1, ''),
    new Paragraph('l3b31', LOCATION.THIRD, 1, ''),
    new Paragraph('l3b32', LOCATION.THIRD, 1, ''),
    new Paragraph('l3b33', LOCATION.THIRD, 1, ''),
    new Paragraph('l3b34', LOCATION.THIRD, 1, ''),
    new Paragraph('l3b35', LOCATION.THIRD, 1, ''),
    new Paragraph('l3b41', LOCATION.THIRD, 1, ''),
    new Paragraph('l3b42', LOCATION.THIRD, 1, ''),
    new Paragraph('l3b43', LOCATION.THIRD, 1, ''),
    new Paragraph('l3b44', LOCATION.THIRD, 1, ''),
    new Paragraph('l3b45', LOCATION.THIRD, 1, ''),
    //Puzzle solve paragraphs
    new Paragraph('l3b11solve', LOCATION.FIRST, 1, ''),
    new Paragraph('l3b12solve', LOCATION.FIRST, 1, ''),
]

//Puzzles Card array
export const puzzleCardArray : Array<PuzzleCard> = [
    new PuzzleCard('l1b11', 'l1b11', 'Hint1'),
    new PuzzleCard('l1b12', 'l1b11', 'Hint2'),
]

//Puzzles objects array
export const puzzleArray : Array<Puzzle> = [
    new Puzzle('l1b11','l1b11solve', ['l1b11','b1b12'], [], PuzzleReward.PROGRESSPOINT, 'Solution', 'Content')
]
