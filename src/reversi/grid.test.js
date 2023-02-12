import { Grid } from './grid';

describe('Test for Grid class', () => {
    it('should be able show the initial map', () => {
        const resultMap = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'w', 'b', ' ', ' ', ' '],
            [' ', ' ', ' ', 'b', 'w', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        const map = new Grid();
        expect(map.gridInit()).toStrictEqual(resultMap);
    });

    it('should be able to update and upload the board ', () => {
        const actBoard = [
            [' ', 'w', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', 'b', ' ', ' ', 'b', ' ', ' '],
            ['b', ' ', ' ', 'w', 'b', ' ', ' ', ' '],
            [' ', ' ', ' ', 'b', 'w', ' ', ' ', ' '],
            [' ', 'w', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', 'w', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        let board = new Grid();
        let grid = board.gridInit();
        grid[0][1] = 'w';
        grid[2][2] = 'b';
        grid[2][5] = 'b';
        grid[3][0] = 'b';
        grid[5][1] = 'w';
        grid[6][6] = 'w';
        expect(board.updateBoard(grid)).toStrictEqual(actBoard);
    });
});
