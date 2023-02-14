import { Grid } from './grid';

describe('Tests for Grid class', () => {
    it('should be able to show the grid initial', () => {
        const grid = [
            ['*', '-', '-', '*', '-', '-', '*'],
            ['|', '*', '-', '*', '-', '*', '|'],
            ['|', '|', '*', '*', '*', '|', '|'],
            ['*', '*', '*', ' ', '*', '*', '*'],
            ['|', '|', '*', '*', '*', '|', '|'],
            ['|', '*', '-', '*', '-', '*', '|'],
            ['*', '-', '-', '*', '-', '-', '*']
        ];
        const gridInit = new Grid();
        expect(gridInit.showGridInit()).toEqual(grid);
    });

    it('should be able to check if Mills exists', () => {
        let gridAux = [
            ['*', '-', '-', '*', '-', '-', '*'],
            ['|', '*', '-', '*', '-', '*', '|'],
            ['|', '|', '*', '*', '*', '|', '|'],
            ['*', '*', '*', ' ', '*', '*', '*'],
            ['|', '|', '*', '*', '*', '|', '|'],
            ['|', '*', '-', '*', '-', '*', '|'],
            ['*', '-', '-', '*', '-', '-', '*']
        ];
        let grid = new Grid();
        expect(grid.showGridInit()).toEqual(gridAux);

        let playerColor = 'W';
        gridAux = [
            ['W', '-', '-', 'W', '-', '-', 'W'],
            ['|', '*', '-', 'W', '-', '*', '|'],
            ['|', '|', '*', 'W', '*', '|', '|'],
            ['*', '*', '*', ' ', '*', '*', 'W'],
            ['|', '|', '*', 'W', '*', '|', '|'],
            ['|', '*', '-', '*', '-', '*', '|'],
            ['*', '-', '-', 'W', '-', '-', 'W']
        ];
        grid.changeValueCoin(playerColor, 6, 3);
        grid.changeValueCoin(playerColor, 0, 0);
        grid.changeValueCoin(playerColor, 0, 6);
        grid.changeValueCoin(playerColor, 1, 3);
        grid.changeValueCoin(playerColor, 4, 3);
        grid.changeValueCoin(playerColor, 6, 6);
        grid.changeValueCoin(playerColor, 0, 3);
        grid.changeValueCoin(playerColor, 2, 3);
        grid.changeValueCoin(playerColor, 3, 6);
        expect(grid.showGridInit()).toEqual(gridAux);
        let row = 3;
        let col = 6;
        expect(grid.checkIfThereMills(playerColor, row, col)).toStrictEqual([['6,6', '3,6', '0,6']]);

        row = 0;
        col = 0;
        expect(grid.checkIfThereMills(playerColor, row, col)).toStrictEqual([['0,0', '0,3', '0,6']]);
    });
});

