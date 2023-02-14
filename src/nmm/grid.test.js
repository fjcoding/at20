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

    it('should be able to return true if it finds 3 coins in grid', () => {
        const grid = [
            ['w', '-', '-', 'b', '-', '-', '*'],
            ['|', '*', '-', '*', '-', 'b', '|'],
            ['|', '|', 'w', '*', '*', '|', '|'],
            ['*', '*', '*', ' ', '*', '*', '*'],
            ['|', '|', '*', '*', 'w', '|', '|'],
            ['|', '*', '-', 'b', '-', 'b', '|'],
            ['*', '-', '-', '*', '-', '-', '*']
        ];
        const gridInit = new Grid();
        expect(gridInit.verifyThreeCoins(grid)).toEqual('white');
    });

    it('should be able to return true if it finds 3 coins in grid', () => {
        const grid = [
            ['w', '-', '-', 'b', '-', '-', '*'],
            ['|', '*', '-', '*', '-', 'b', '|'],
            ['|', '|', 'w', '*', '*', '|', '|'],
            ['*', '*', '*', ' ', '*', '*', '*'],
            ['|', '|', 'w', '*', 'w', '|', '|'],
            ['|', '*', '-', 'b', '-', 'b', '|'],
            ['*', '-', '-', '*', '-', '-', '*']
        ];
        const gridInit = new Grid();
        expect(gridInit.verifyThreeCoins(grid)).toEqual('none');
    });
    it('should be able to return true if it finds 3 coins in grid', () => {
        const grid = [
            ['w', '-', '-', 'b', '-', '-', '*'],
            ['|', '*', '-', '*', '-', '*', '|'],
            ['|', '|', 'w', '*', '*', '|', '|'],
            ['*', '*', '*', ' ', 'w', '*', '*'],
            ['|', '|', 'b', '*', 'w', '|', '|'],
            ['|', '*', '-', 'b', '-', '*', '|'],
            ['*', '-', '-', '*', '-', '-', '*']
        ];
        const gridInit = new Grid();
        expect(gridInit.verifyThreeCoins(grid)).toEqual('black');
    });

    it('should be able to return true if it finds 3 coins in grid', () => {
        const grid = [
            ['w', '-', '-', 'b', '-', '-', '*'],
            ['|', '*', '-', '*', '-', 'b', '|'],
            ['|', '|', 'w', '*', 'w', '|', '|'],
            ['b', 'b', '*', ' ', '*', '*', '*'],
            ['|', '|', 'w', '*', 'w', '|', '|'],
            ['|', '*', '-', 'b', '-', 'b', '|'],
            ['*', '-', '-', '*', '-', '-', '*']
        ];
        const gridInit = new Grid();
        expect(gridInit.verifyThreeCoins(grid)).toEqual('none');
    });

    it('should be able to return true if it finds 3 coins in grid', () => {
        const grid = [
            ['w', '-', '-', 'b', '-', '-', '*'],
            ['|', '*', '-', '*', '-', 'w', '|'],
            ['|', '|', 'w', 'b', '*', '|', '|'],
            ['*', '*', '*', ' ', 'w', '*', '*'],
            ['|', '|', 'b', '*', 'w', '|', '|'],
            ['|', 'b', '-', 'b', '-', '*', '|'],
            ['*', '-', '-', '*', '-', '-', 'b']
        ];
        const gridInit = new Grid();
        expect(gridInit.verifyThreeCoins(grid)).toEqual('none');
    });

    it('should be able to return true if it finds 3 coins in grid', () => {
        const grid = [
            ['w', '-', '-', '*', '-', '-', '*'],
            ['|', '*', '-', '*', '-', 'b', '|'],
            ['|', '|', '*', '*', 'w', '|', '|'],
            ['b', '*', '*', ' ', '*', '*', '*'],
            ['|', '|', 'w', '*', '*', '|', '|'],
            ['|', '*', '-', 'b', '-', '*', '|'],
            ['*', '-', '-', '*', '-', '-', '*']
        ];
        const gridInit = new Grid();
        expect(gridInit.verifyThreeCoins(grid)).toEqual('both');

    it('Should be able to return true if there are available positions in the grid', () =>{
        const grid = new Grid();
        expect (grid.checkAvailablePos()).toBe(true);
    });
});