import { findPositionOnBoard } from './checkAndFlipRow';


describe('looking places that are going to change for player', () => {
    it('White ', () => { //black=2 white=1
        const board = [[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
            [' ', ' ', 'W', 'B', 'B', 'W', ' ', ' '], //move that the W player did on 2,4
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
        const y = 2;
        const x = 4;
        const player = 'W';
        const changedPlaces = new findPositionOnBoard(x, y, player, board);


        expect(changedPlaces.asChecker()).toStrictEqual([{x:4, y:3}, {x:4, y:4}]);
    });
});

describe('flip the pieces for', () => {
    it('White ', () => { //black=2 white=1
        const y = 2;
        const x = 4;
        const player = 'W';
        const InitialBoard =  [[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
            [' ', ' ', 'W', 'W', 'W', 'W', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
        const changedPlaces = new findPositionOnBoard(x, y, player, InitialBoard);

        const objectiveBoard = [[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
            [' ', ' ', 'W', 'W', 'W', 'W', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];

        expect(changedPlaces.asflip()).toStrictEqual(objectiveBoard);
    });

    it('black ', () => { //black=2 white=1
        const y = 2;
        const x = 3;
        const player = 'B';
        const InitialBoard =  [[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', 'B', 'W', 'B', ' ', ' ', ' '],
            [' ', ' ', 'W', 'W', 'W', 'W', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
        const changedPlaces = new findPositionOnBoard(x, y, player, InitialBoard);

        const objectiveBoard = [[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', 'B', 'B', 'B', ' ', ' ', ' '],
            [' ', ' ', 'W', 'W', 'W', 'W', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];

        expect(changedPlaces.asflip()).toStrictEqual(objectiveBoard);
    });
});