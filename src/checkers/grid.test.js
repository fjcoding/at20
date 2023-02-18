import {Grid} from './grid';

describe('Test for Grid Class', () => {
    it('should create an 8x8 grid with all elements set to null', () => {
        const grid = new Grid();
        expect(grid.gridBoard).toEqual([
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
        ]);
    });

    it('should clean the board before rendering the new pieces', () => {
        const grid = new Grid();
        const redPieces = [{ x: 0, y: 0, getColor: () => 'red' }];
        const whitePieces = [{ x: 1, y: 1, getColor: () => 'white' }];
        grid.renderBoard({ redPieces, whitePieces });
        const board = grid.renderBoard({ redPieces: [], whitePieces: [] });
        expect(board).toEqual([
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
        ]);
    });

    it('should be able to create the grid with the initial positions of the pieces ', () => {
        const grid = new Grid();
        const strGrid = grid.toString();
        let expectedGrid = '  0 1 2 3 4 5 6 7\n';
        expectedGrid += '0| |■| |■| |■| |■|\n';
        expectedGrid += '1|■| |■| |■| |■| |\n';
        expectedGrid += '2| |■| |■| |■| |■|\n';
        expectedGrid += '3|■| |■| |■| |■| |\n';
        expectedGrid += '4| |■| |■| |■| |■|\n';
        expectedGrid += '5|■| |■| |■| |■| |\n';
        expectedGrid += '6| |■| |■| |■| |■|\n';
        expectedGrid += '7|■| |■| |■| |■| |\n';
        expect(strGrid).toBe(expectedGrid);
    });
});