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
    });

    it('Should be able to return true if there are available positions in the grid', () =>{
        const grid = new Grid();
        expect (grid.checkAvailablePos()).toBe(true);
    });
});
