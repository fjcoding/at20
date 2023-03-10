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

    it('should not flip any pieces and return the same board', () => {
        const actBoard = [
            [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', 'B', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', 'B', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
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
        let piecesPosForFlip = [];
        let lenArray = piecesPosForFlip.length;
        expect(board.updateBoard(grid, piecesPosForFlip, lenArray, whitePiecePlayer)).toStrictEqual(actBoard);
    });

    it('Should be able to display the board as string', () => {
        var board = new Grid;

        const boardAsArray = [
            [' ', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', 'B', ' ', ' ', 'B', ' ', ' '],
            ['B', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
            [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
            [' ', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', 'W', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        const boardTostring =

        '-------------------------------------------------\n' +
        '|     |  W  |     |     |     |     |     |     |  0\n' +
        '-------------------------------------------------\n' +
        '|     |     |     |     |     |     |     |     |  1\n' +
        '-------------------------------------------------\n' +
        '|     |     |  B  |     |     |  B  |     |     |  2\n' +
        '-------------------------------------------------\n' +
        '|  B  |     |     |  W  |  B  |     |     |     |  3\n' +
        '-------------------------------------------------\n' +
        '|     |     |     |  B  |  W  |     |     |     |  4\n' +
        '-------------------------------------------------\n' +
        '|     |  W  |     |     |     |     |     |     |  5\n' +
        '-------------------------------------------------\n' +
        '|     |     |     |     |     |     |  W  |     |  6\n' +
        '-------------------------------------------------\n' +
        '|     |     |     |     |     |     |     |     |  7\n' +
        '-------------------------------------------------\n' +
        '   0     1     2     3     4     5     6     7\n'
        ;

        expect(board.displayBoard(boardAsArray)).toStrictEqual(boardTostring);
    });
});
