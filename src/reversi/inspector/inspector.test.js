import { Inspector } from './inspector.js';


describe('Test the methods given to the inspector class', () => {
    it('Should be able to return the possible moves coordinates in an array for a Black token placed in row 4 and column 4 ', () => {
        const inspector = new Inspector();
        const currentPlayer = 'B';
        const referenceBoard = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', 'W', 'W', ' ', ' '],
            [' ', ' ', ' ', 'W', 'B', 'W', ' ', ' '],
            [' ', ' ', ' ', ' ', 'W', 'W', ' ', ' '],
            [' ', ' ', 'W', ' ', ' ', 'W', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];

        expect(inspector.checkPossiblePositions(referenceBoard, currentPlayer)).toStrictEqual([[4, 2], [4, 6], [2, 4], [6, 4], [6, 6], [2, 6], [2, 2]]);
    });

    it('Should be able to return the positions of the Black tokens trapped between two White tokens, when a White token is placed in 3,3', () => {
        const inspector = new Inspector();
        const currentPlayer = 'W';
        const newTokenPosition = [3, 3];
        const referenceBoard = [
            [' ', ' ', ' ', 'W', ' ', ' ', ' ', ' '],
            [' ', 'W', ' ', 'B', ' ', 'W', ' ', ' '],
            [' ', ' ', 'B', 'B', 'B', ' ', ' ', ' '],
            [' ', 'W', 'B', 'W', 'B', 'W', ' ', ' '],
            [' ', ' ', 'B', 'B', 'B', 'W', ' ', ' '],
            [' ', 'B', ' ', 'W', ' ', 'W', ' ', ' '],
            ['W', ' ', 'W', 'B', 'W', 'W', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        expect(inspector.checkMatchesToFlip(newTokenPosition, referenceBoard, currentPlayer)).toStrictEqual([[3, 4], [3, 2], [4, 3], [4, 4], [4, 2], [5, 1], [2, 4], [2, 2]]);// faltan las columnas superiores[2,3],[1,3]
    });

    it('Should be able to verify whether the position where the current player wants to place the token is allowed', () => {
        const inspector = new Inspector();
        const newTokenPosition = [0, 0];
        const currentPlayer = 'B';
        const referenceBoard = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', 'W', 'W', ' ', ' '],
            [' ', ' ', ' ', 'W', 'B', 'W', ' ', ' '],
            [' ', ' ', ' ', 'W', 'W', 'W', ' ', ' '],
            [' ', ' ', 'W', ' ', ' ', 'W', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        const allowedPositions = inspector.checkPossiblePositions(referenceBoard, currentPlayer);
        expect(inspector.validatePosition(newTokenPosition, allowedPositions)).toStrictEqual(false);
    });

    it('Should be able to verify whether the position where the current player wants to place the token is allowed', () => {
        const inspector = new Inspector();
        const newTokenPosition = [0, 4];
        const currentPlayer = 'B';
        const referenceBoard = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', 'W', 'W', ' ', ' '],
            [' ', ' ', ' ', 'W', 'B', 'W', ' ', ' '],
            [' ', ' ', ' ', 'W', 'W', 'W', ' ', ' '],
            [' ', ' ', 'W', ' ', ' ', 'W', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        const allowedPositions = inspector.checkPossiblePositions(referenceBoard, currentPlayer);
        expect(inspector.validatePosition(newTokenPosition, allowedPositions)).toStrictEqual(true);
    });

    it('Should count the tokens on the board at the end of the game and decide who wins, in this case Black wins', () => {
        const inspector = new Inspector();
        const referenceBoard = [
            ['W', 'W', 'B', 'W', 'B', 'B', 'B', 'B'],
            ['B', 'B', 'W', 'B', 'B', 'W', 'B', 'B'],
            ['W', 'B', 'B', 'W', 'B', 'B', 'B', 'B'],
            ['B', 'W', 'B', 'W', 'W', 'W', 'B', 'B'],
            ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
            ['B', 'W', 'B', 'B', 'W', 'W', 'B', 'W'],
            ['W', 'B', 'W', 'W', 'B', 'W', 'B', 'B'],
            ['B', 'B', 'B', 'B', 'B', 'B', 'W', 'B']
        ];
        var resultOfTheGame = inspector.countTokenForWinner(referenceBoard);
        expect(resultOfTheGame).toBe('Black WINS with 40 tokens Vs 24 white tokens!');
    });


    it('Should count the tokens on the board at the end of the game and decide who wins, in this case White wins', () => {
        const inspector = new Inspector();
        const referenceBoard = [
            ['W', 'W', 'B', 'W', 'B', 'B', 'B', 'B'],
            ['B', 'W', 'W', 'B', 'W', 'W', 'W', ' '],
            ['W', 'B', 'W', 'W', 'B', 'W', 'W', 'W'],
            ['W', 'W', 'B', 'W', 'W', 'W', 'W', 'B'],
            ['W', 'W', 'B', 'W', 'B', 'W', 'W', 'W'],
            ['B', 'W', 'W', 'B', 'W', 'W', 'W', 'W'],
            ['W', 'B', 'W', 'W', 'B', 'W', 'W', 'B'],
            ['B', 'B', 'B', 'B', 'B', 'B', 'W', 'B']
        ];
        var resultOfTheGame = inspector.countTokenForWinner(referenceBoard);
        expect(resultOfTheGame).toBe('White WINS with 38 tokens Vs 25 black tokens!');
    });


    it('Should count the tokens on the board at the end of the game and decide who wins, in this case is a tie', () => {
        const inspector = new Inspector();
        const referenceBoard = [
            [' ', ' ', ' ', 'B', ' ', ' ', ' ', ' '],
            [' ', ' ', 'B', 'B', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'B', ' ', ' ', ' ', ' '],
            [' ', ' ', 'B', 'W', 'W', 'W', 'B', 'B'],
            [' ', ' ', ' ', 'W', 'B', 'W', ' ', ' '],
            [' ', 'B', ' ', 'W', 'W', 'W', ' ', ' '],
            [' ', ' ', 'W', 'B', ' ', 'W', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        var resultOfTheGame = inspector.countTokenForWinner(referenceBoard);
        expect(resultOfTheGame).toBe('It is a Tie! with 10 tokens');
    });
});

