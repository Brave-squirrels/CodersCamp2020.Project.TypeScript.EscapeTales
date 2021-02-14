//Import
import { BoardField} from './boardField';
import Paragraph from './paragraph';
import{BoardState, BoardContent, LOCATION, PuzzleReward} from './ENUM';
import {Puzzle} from './puzzle';
import PuzzleCard from './puzzleCard';
import {Evidence} from './evidence';

//BoardFields
export const boardAreas : Array<BoardField> = [
    //First location
    new BoardField(BoardState.PENDING, 'l1b11', 'l1b11', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l1b12', 'l1b12', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l1b13', 'l1b13', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l1b14', 'l1b14', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l1b15', 'l1b15', BoardContent.CLUE),
    new BoardField(BoardState.PENDING, 'l1b21', 'l1b21', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l1b22', 'l1b22', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l1b23', 'l1b23', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l1b24', 'l1b24', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l1b25', 'l1b25', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l1b31', 'l1b31', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l1b32', 'l1b32', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l1b33', 'l1b33', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l1b34', 'l1b34', BoardContent.CLUE),
    new BoardField(BoardState.PENDING, 'l1b35', 'l1b35', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l1b41', 'l1b41', BoardContent.NOTHING ),
    new BoardField(BoardState.PENDING, 'l1b42', 'l1b42', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l1b43', 'l1b43', BoardContent.CLUE),
    new BoardField(BoardState.PENDING, 'l1b44', 'l1b44', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l1b45', 'l1b45', BoardContent.NOTHING),
    //Second location
    new BoardField(BoardState.PENDING, 'l2b11', 'l2b11', BoardContent.CLUE),
    new BoardField(BoardState.PENDING, 'l2b12', 'l2b12', BoardContent.CLUE),
    new BoardField(BoardState.PENDING, 'l2b13', 'l2b13', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l2b14', 'l2b14', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b15', 'l2b15', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b21', 'l2b21', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l2b22', 'l2b22', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b23', 'l2b23', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l2b24', 'l2b24', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l2b25', 'l2b25', BoardContent.CLUE),
    new BoardField(BoardState.PENDING, 'l2b31', 'l2b31', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l2b32', 'l2b32', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l2b33', 'l2b33', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l2b34', 'l2b34', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l2b35', 'l2b35', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b41', 'l2b41', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l2b42', 'l2b42', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l2b43', 'l2b43', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l2b44', 'l2b44', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l2b45', 'l2b45', BoardContent.PUZZLE),
    //Third location
    new BoardField(BoardState.PENDING, 'l3b11', 'l3b11', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b12', 'l3b12', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l3b13', 'l3b13', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b14', 'l3b14', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l3b15', 'l3b15', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l3b21', 'l3b21', BoardContent.CLUE),
    new BoardField(BoardState.PENDING, 'l3b22', 'l3b22', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l3b23', 'l3b23', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l3b24', 'l3b24', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b25', 'l3b25', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l3b31', 'l3b31', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l3b32', 'l3b32', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l3b33', 'l3b33', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b34', 'l3b34', BoardContent.CLUE),
    new BoardField(BoardState.PENDING, 'l3b35', 'l3b35', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b41', 'l3b41', BoardContent.PUZZLE),
    new BoardField(BoardState.PENDING, 'l3b42', 'l3b42', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l3b43', 'l3b43', BoardContent.NOTHING),
    new BoardField(BoardState.PENDING, 'l3b44', 'l3b44', BoardContent.CLUE),
    new BoardField(BoardState.PENDING, 'l3b45', 'l3b45', BoardContent.PUZZLE),
]

//Paragraphs

export const paragraphsArray : Array<Paragraph> = [
    //First location
    new Paragraph('l1b11', LOCATION.FIRST, 1, 'While entering the shed you noticed strange combination of numbers on one of the notes...', 'New puzzle card'),
    new Paragraph('l1b12', LOCATION.FIRST, 1, 'You were slowly approaching the workbench, while you spotted a strange note, if you just can decode it', 'New puzzle card'),
    new Paragraph('l1b13', LOCATION.FIRST, 1, `Near the house you noticed a strange hatch, you are trying to open it, but it's locked`,'New puzzle card'),
    new Paragraph('l1b14', LOCATION.FIRST, 1, 'You notices that there is smoke coming out of the chimney, but the rooftop is too high','Nothing'),
    new Paragraph('l1b15', LOCATION.FIRST, 1, 'You came to look through the window and you spotted the murderer, now you know that he is in house. You have to be careful','Clue'),
    new Paragraph('l1b21', LOCATION.FIRST, 1, `Just an old tree, but you see an old shed, maybe it's worth to approach?`,'Nothing'),
    new Paragraph('l1b22', LOCATION.FIRST, 1, `There's nothing in here, but this old workbench seems interesting`,'Nothing'),
    new Paragraph('l1b23', LOCATION.FIRST, 1, 'Doors are locked with some sort of code, if you just know the letter order...','New puzzle card'),
    new Paragraph('l1b24', LOCATION.FIRST, 1, 'This house is really old and damaged, looks like abandoned','Nothing'),
    new Paragraph('l1b25', LOCATION.FIRST, 1, 'You found a strange mound near the tree','New puzzle card'),
    new Paragraph('l1b31', LOCATION.FIRST, 1, `Old forest, seems interesting but you haven't found there anything that may help you`,'Nothing'),
    new Paragraph('l1b32', LOCATION.FIRST, 1, `Nothing in here, but this old fountain is still working, strange, maybe you should check it`,'Nothing'),
    new Paragraph('l1b33', LOCATION.FIRST, 1, 'Nothing in here, just a pile of grass and an old tree','Nothing'),
    new Paragraph('l1b34', LOCATION.FIRST, 1, `You stopped for a while and looked at the house, it looks very messy, like no one has ever took care of that`,'Clue'),
    new Paragraph('l1b35', LOCATION.FIRST, 1, 'Nothing there, but this near by tree looks interesting','Nothing'),
    new Paragraph('l1b41', LOCATION.FIRST, 1, `Old forest, seems interesting but you haven't found there anything that may help you`,'Nothing'),
    new Paragraph('l1b42', LOCATION.FIRST, 1, `It's strange that there is fountain, but you can't see where the pipes are, there has to be something underground`,'New puzzle card'),
    new Paragraph('l1b43', LOCATION.FIRST, 1, `Road looks like no one has visited this house since many years, it's middle of nowhere, it has to be there`,'Clue'),
    new Paragraph('l1b44', LOCATION.FIRST, 1, 'You came from there','Nothing'),
    new Paragraph('l1b45', LOCATION.FIRST, 1, 'You came from there','Nothing'),
    //Second location
    new Paragraph('l2b11', LOCATION.SECOND, 1, 'The flowers look well-groomed, someone has to take care of it','Clue'),
    new Paragraph('l2b12', LOCATION.SECOND, 1, 'Family photos, this person is not that lonely after all','Clue'),
    new Paragraph('l2b13', LOCATION.SECOND, 1, `There's nothing in here`,'Nothing'),
    new Paragraph('l2b14', LOCATION.SECOND, 1, 'In the bathroom you notice traces of some sort of animal, I wonder what animal it is...','New puzzle card'),
    new Paragraph('l2b15', LOCATION.SECOND, 1, 'Among the pots you notice some shiny thing, looks like some sort of key','New puzzle card'),
    new Paragraph('l2b21', LOCATION.SECOND, 1, 'Nothing in here, but this carpet looks strange in some places','Nothing'),
    new Paragraph('l2b22', LOCATION.SECOND, 1, `Under the carpet you discovered a passage to the murderers' lair, if only you had the key to open it...`,'New puzzle card'),
    new Paragraph('l2b23', LOCATION.SECOND, 1, 'Nothing in here, but this carpet looks strange in some places','Nothing'),
    new Paragraph('l2b24', LOCATION.SECOND, 1, 'It smells weird in this bathroom, like an animal or something','Nothing'),
    new Paragraph('l2b25', LOCATION.SECOND, 1, `Strange, there's not running water in the tub...`,'Clue'),
    new Paragraph('l2b31', LOCATION.SECOND, 1, 'From there you can see how messy this mansion is','Nothing'),
    new Paragraph('l2b32', LOCATION.SECOND, 1, `It looks like under the couch carpet looks different, maybe it's worth to approach`,'Nothing'),
    new Paragraph('l2b33', LOCATION.SECOND, 1, 'Nothing in here, but this carpet looks strange in some places','Nothing'),
    new Paragraph('l2b34', LOCATION.SECOND, 1, 'Flowers looks healthy, but this kitchen looks kinda strange','Nothing'),
    new Paragraph('l2b35', LOCATION.SECOND, 1, 'Among of all the papers on the table you found an electricity bill','New puzzle card'),
    new Paragraph('l2b41', LOCATION.SECOND, 1, 'On the shelf you found a lot of photos, but what does they mean','New puzzle card'),
    new Paragraph('l2b42', LOCATION.SECOND, 1, `It's strange, in some places the lights are not working, maybe you should check it`,'Nothing'),
    new Paragraph('l2b43', LOCATION.SECOND, 1, 'There is nothing in here, maybe you should go somewhere else','Nothing'),
    new Paragraph('l2b44', LOCATION.SECOND, 1, 'The lights in here are perfectly fine, but what about the kitchen','Nothing'),
    new Paragraph('l2b45', LOCATION.SECOND, 1, 'Strange, it look like, nothing that require electricity is working in this kitchen','New puzzle card'),
    //Third location
    new Paragraph('l3b11', LOCATION.THIRD, 1, 'Strange bookshelf, some of the books clearly are missing','New puzzle card'),
    new Paragraph('l3b12', LOCATION.THIRD, 1, 'There is nothing in here, you should go somewhere else','Nothing'),
    new Paragraph('l3b13', LOCATION.THIRD, 1, 'Fireplace is fresh, someone has to be here','New puzzle card'),
    new Paragraph('l3b14', LOCATION.THIRD, 1, `It's really warm in here, maybe you should check the fireplace`,'Nothing'),
    new Paragraph('l3b15', LOCATION.THIRD, 1, `Everything candles instead of bulbs, strange...`,'Nothing'),
    new Paragraph('l3b21', LOCATION.THIRD, 1, 'This place looks really comfy, this must be the place','Clue'),
    new Paragraph('l3b22', LOCATION.THIRD, 1, 'This place is really big, you should look around','Nothing'),
    new Paragraph('l3b23', LOCATION.THIRD, 1, 'Nothing in here, but this couch looks really strange','Nothing'),
    new Paragraph('l3b24', LOCATION.THIRD, 1, 'You are approaching the couch, there is strange note, looks like some sort of puzzle...','New puzzle card'),
    new Paragraph('l3b25', LOCATION.THIRD, 1, 'Nothing in here, but this couch looks really strange','Nothing'),
    new Paragraph('l3b31', LOCATION.THIRD, 1, 'Nothing in here, you should check somewhere else','Nothing'),
    new Paragraph('l3b32', LOCATION.THIRD, 1, 'You came from there','Nothing'),
    new Paragraph('l3b33', LOCATION.THIRD, 1, 'Candles are fresh, someone has to light them recently','Nothing'),
    new Paragraph('l3b34', LOCATION.THIRD, 1, `It's strange that someone build another room in the basement...`,'Clue'),
    new Paragraph('l3b35', LOCATION.THIRD, 1, 'Strange couch, after moving it a bit you discovered a lock, when you have to type a certain combination','New puzzle card'),
    new Paragraph('l3b41', LOCATION.THIRD, 1, 'Lying book, maybe it has something in common with bookshelf...','New puzzle card'),
    new Paragraph('l3b42', LOCATION.THIRD, 1, 'You came from there','Nothing'),
    new Paragraph('l3b43', LOCATION.THIRD, 1, 'Nothing in here, maybe you should the the room next to you','Nothing'),
    new Paragraph('l3b44', LOCATION.THIRD, 1, 'Wheelchair, you are getting closer','Clue'),
    new Paragraph('l3b45', LOCATION.THIRD, 1, 'This wheelchair looks very disturbing','Nothing'),
    //Puzzle solve paragraphs
    new Paragraph('l1b11solve', LOCATION.FIRST, 1, 'Finally you were able to crack this code', 'Progress Token'),
    new Paragraph('l1b13solve', LOCATION.FIRST, 1, 'You were manage to put pieces together, and you discovered that the house has a secret basement, maybe this is the place where you should go', 'Progress Token'),
    new Paragraph('l1b12solve', LOCATION.FIRST, 1, 'You noticed that the strange note was actually a map, that has marked where the bodies are buried', 'A map'),
    new Paragraph('l2b15solve', LOCATION.SECOND, 1, 'Finally you were manage to open the secret passage to the basement', 'Progress Token'),
    new Paragraph('l2b35solve', LOCATION.SECOND, 1, 'It seems like, something in this house requires a lot of power, maybe some hideout', 'Progress Token'),
    new Paragraph('l2b14solve', LOCATION.SECOND, 1, 'It seems like the person that lives in this house own a cat, only high functional sociopath can own one of these creatures', 'A cat photography'),
    new Paragraph('l3b11solve', LOCATION.THIRD, 1, 'You discovered that the shelf has missing book, you were manage to put in here missing book, and heard that something clicked...', 'Progress Token'),
    new Paragraph('l3b24solve', LOCATION.THIRD, 1, 'Finally you were manage to solve this strange puzzle, after typing the correct password, you heard that something clicked...', 'Progress Token'),
    new Paragraph('l3b13solve', LOCATION.THIRD, 1, 'You noticed that next to the fireplace some documents were manage to survive so you picked up them', 'Documents')
]

//Puzzles Card array
export const puzzleCardArray : Array<PuzzleCard> = [
    new PuzzleCard('l1b11', 'l1b11', '3 5 2 1 4'),
    new PuzzleCard('l1b23', 'l1b11', 'A E D M R'),
    new PuzzleCard('l1b13', 'l1b13', 'What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?'),
    new PuzzleCard('l1b42', 'l1b13', 'Rabbit Raccoon Ram Rat Rattlesnake Raven...'),
    new PuzzleCard('l1b12', 'l1b12', 'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?'),
    new PuzzleCard('l1b25', 'l1b12', 'You can see the whole world on it and then put it in your pocket'),
    new PuzzleCard('l2b15', 'l2b15', `
        Where child fear grows,
        And adult brave becomes
    `),
    new PuzzleCard('l2b22', 'l2b15', `
        Perhaps a wine is there,
        and some jam may too
    `),
    new PuzzleCard('l2b35', 'l2b35', `
    Capitol
    `),
    new PuzzleCard('l2b45', 'l2b35', `
    Take your time,
    In the darkness just sit,
    Make your mind think,
    End is near
    `),
    new PuzzleCard('l2b14', 'l2b14', `
    No soult it has, nor cute it is,
    Humans friend? Suppose... it is?
    `),
    new PuzzleCard('l2b41', 'l2b14', `
    Four legs - for sure,
    lives...
    `),
    new PuzzleCard('l3b11', 'l3b11', `
        There was a green house. Inside the green house there was w white house.
        Inside the white house there was a red house.
        Inside the red house there were lots of babies.
        What is it?
    `),
    new PuzzleCard('l3b41', 'l3b11', `
        ...lots of black black babies
    `),
    new PuzzleCard('l3b24', 'l3b24', `
        What is greater than God,
        more evil than devil,
        the poor have it,
        the rich need it,
        and if you eat it, you'll die?
    `),
    new PuzzleCard('l3b35', 'l3b24', `
        Something
    `),
    new PuzzleCard('l3b13', 'l3b13', `
        You can drop me from the tallest building and I'll be fine,
        but if you drop me in water I die.
        What am I?
    `),
    new PuzzleCard('l3b13', 'l3b33', `
        You can find me in an office
    `)
]

//Puzzles objects array
export const puzzleArrayMain : Array<Puzzle> = [
    new Puzzle('l1b11', 'l1b11solve', ['l1b11','l1b23'], [], PuzzleReward.PROGRESSPOINT, 'dream', 'The code'),
    new Puzzle('l1b12', 'l1b12solve', ['l1b12','l1b25'], [], PuzzleReward.EVIDENCE, 'map', 'The way in'),
    new Puzzle('l1b13', 'l1b13solve', ['l1b13','l1b42'], [], PuzzleReward.PROGRESSPOINT, 'r', 'Secret place'),
    new Puzzle('l2b15', 'l2b15solve', ['l2b15', 'l2b22'], [], PuzzleReward.PROGRESSPOINT, 'basement', 'Locke & key'),
    new Puzzle('l2b35', 'l2b35solve', ['l2b35', 'l2b45'], [], PuzzleReward.PROGRESSPOINT, 'time', 'Lack of power'),
    new Puzzle('l2b14', 'l2b14solve', ['l2b14', 'l2b41'], [], PuzzleReward.EVIDENCE, 'cat', 'An animal'), 
    new Puzzle('l3b11', 'l3b11solve', ['l3b11', 'l3b41'], [], PuzzleReward.PROGRESSPOINT, 'watermelon', 'Missing page'),
    new Puzzle('l3b24', 'l3b24solve', ['l3b24', 'l3b35'], [], PuzzleReward.PROGRESSPOINT, 'nothing', 'Combination'),
    new Puzzle('l3b13', 'l3b13solve', ['l3b13', 'l3b33'], [], PuzzleReward.EVIDENCE, 'paper', 'Find me')
]

//Stress card paragraphs
export const stressParagraphs : string[] = [
    'This house is really creepy, your mental health is put to the test',
    `You can't get rid of the thoughts that the murderer can be next to you`,
    'You are afraid the you will not get out of here in one piece',
    'Suddenly you start to feel dizzy, you are running out of time, pull yourself together',
    'Loud screaming distracts you, you should hurry up',
    `You can't get the feeling out of your head, that someone is always behind you, you see shadows, but there's no one there`,
    'You realised that you are getting tired, you start to question your ability to stay focused',
    'Your heart starts to race, your vision becomes blurry, you wonder if you are capable of doing this on your own'
]

//Evidence objects array (to update DOM)
export const evidencesArray : Array<Evidence> = [
    new Evidence('l1b12', 'Map'),
    new Evidence('l2b14', 'Cat photography'),
    new Evidence('l3b13', 'Documents')
]