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

    it('Should be able to return true if there are available positions in the grid', () =>{
        const grid = new Grid();
        expect (grid.checkAvailablePos()).toBe(true);
    });

    it('Should be able to return false if there are no available positions in the grid', () =>{
        const grid = new Grid();
        if (grid.gridInit && grid.gridInit.length) {
            for (let row = 0; row < grid.gridInit.length; row++) {
                for (let col = 0; col < grid.gridInit.length; col++) {
                    grid.gridInit[row][col].symbol = Grid.coinSymbols.PA;
                }
            }
        }
        expect(grid.checkAvailablePos()).toBe(false);
    });
});

