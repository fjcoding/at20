import { positionOnBoard } from './positionOnBoard';
import { Grid } from './grid';
describe('Black and white exist in the board', () => {
    it('White position', () => { //black=2 white=1
        /* const board =  [[0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, W, B, 0, 0, 0],
                        [0, 0, 0, B, W, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0]];*/
        const color = 'W';
        const board = new Grid();
        const map = board.gridInit();
        //const white = 1;
        const position = new positionOnBoard(map, color);
        expect(position.asPositionOnBoard()).toStrictEqual([[3, 3], [4, 4]]);
    });

    it('Black position', () => { //black=2 white=1
        const color = 'B';
        const board = new Grid();
        const map = board.gridInit();
        const position = new positionOnBoard(map, color);
        expect(position.asPositionOnBoard()).toStrictEqual([[3, 4], [4, 3]]);
    });
});
