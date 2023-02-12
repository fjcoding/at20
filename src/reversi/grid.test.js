import { Grid } from './grid';

describe('Test for Grid class', () => {
    it('should be able show the initial map', () => {
        const resultMap = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
            [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        const map = new Grid();
        expect(map.gridInit()).toStrictEqual(resultMap);
    });

    it('should be able to update and upload the board ', () => {
        const actBoard = [
            [' ', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', 'B', ' ', ' ', 'B', ' ', ' '],
            ['B', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
            [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
            [' ', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', 'W', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        let board = new Grid();
        let grid = board.gridInit();
        grid[0][1] = 'W';
        grid[2][2] = 'B';
        grid[2][5] = 'B';
        grid[3][0] = 'B';
        grid[5][1] = 'W';
        grid[6][6] = 'W';
        expect(board.updateBoard(grid)).toStrictEqual(actBoard);
    });

    it('should be able to flip the pieces of a positions array', () => {
        //playedBoard =
        //     [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' '],
        //     [' ', ' ', ' ', ' ', 'B', ' ', ' ', ' '],
        //     [' ', ' ', ' ', ' ', 'B', ' ', ' ', ' '],
        //     [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
        //     [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
        //     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        //     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        //     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        //
        const actBoard = [
            [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        let board = new Grid();
        let grid = board.gridInit();
        let whitePiecePlayer = 'W';
        grid[0][4] = 'W';
        grid[1][4] = 'B';
        grid[2][4] = 'B';
        grid[3][4] = 'B';
        let piecesPosForFlip = [[1, 4], [2, 4], [3, 4]];
        let lenArray = piecesPosForFlip.length;
        expect(board.updateBoard(grid, piecesPosForFlip, lenArray, whitePiecePlayer)).toStrictEqual(actBoard);
    });
});
