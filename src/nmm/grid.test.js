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
});

