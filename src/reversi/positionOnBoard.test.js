import { positionOnBoard } from './positionOnBoard';

describe('Black and white exist in the board', () => {
    it('White position', () => { //black=2 white=1
        const board =  [[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
            [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
        const color = 'W';
        //const board = new Grid();
        //const map = board.gridInit();
        //const white = 1;
        const position = new positionOnBoard(board, color);
        expect(position.asPositionOnBoard()).toStrictEqual([[3, 3], [4, 4]]);
    });

    it('Black position', () => { //black=2 white=1
        const color = 'B';
        const board =  [[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
            [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
        const position = new positionOnBoard(board, color);
        expect(position.asPositionOnBoard()).toStrictEqual([[3, 4], [4, 3]]);
    });
});
