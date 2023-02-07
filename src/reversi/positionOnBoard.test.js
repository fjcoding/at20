import { positionOnBoard } from './positionOnBoard';
describe('Black and white exist in the board', () => {
    it('White position', () => { //black=2 white=1
        const board =  [[0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 1, 0, 0, 0],
            [0, 0, 0, 1, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]];
        const white = 1;
        const position = new positionOnBoard(board, white);
        expect(position.asPosition()).toStrictEqual([[3, 4], [4, 3]]);
    });

    it('Black position', () => { //black=2 white=1
        const board =  [[0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 1, 0, 0, 0],
            [0, 0, 0, 1, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]];
        const black = 2;
        const position = new positionOnBoard(board, black);
        expect(position.asPosition()).toStrictEqual([[3, 3], [4, 4]]);
    });
});
