import { Grid } from './grid.js';
import { Player } from './player.js';

describe('Tests for Grid class', () => {
    it('should be able to show the grid initial', () => {
        const grid = '0 * - - * - - * \n' +
        '1 | * - * - * | \n' +
        '2 | | * * * | | \n' +
        '3 * * *   * * * \n' +
        '4 | | * * * | | \n' +
        '5 | * - * - * | \n' +
        '6 * - - * - - * \n' +
        '  0 1 2 3 4 5 6';

        const gridInit = new Grid();
        expect(gridInit.showGrid()).toBe(grid);
    });

    it('should be able to check if Mills exists', () => {
        let gridAux = '0 * - - * - - * \n' +
        '1 | * - * - * | \n' +
        '2 | | * * * | | \n' +
        '3 * * *   * * * \n' +
        '4 | | * * * | | \n' +
        '5 | * - * - * | \n' +
        '6 * - - * - - * \n' +
        '  0 1 2 3 4 5 6';
        let grid = new Grid();
        expect(grid.showGrid()).toEqual(gridAux);

        let player = new Player('W');

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
        let row = 3;
        let col = 6;
        expect(grid.checkIfThereMills(player, row, col)).toStrictEqual([['6,6', '3,6', '0,6']]);
        let mill = grid.checkIfThereMills(player, row, col);
        expect(player.addMill(mill)).toStrictEqual(1);

        row = 0;
        col = 0;
        expect(grid.checkIfThereMills(player, row, col)).toStrictEqual([['0,0', '0,3', '0,6']]);
        mill = grid.checkIfThereMills(player, row, col);
        expect(player.addMill(mill)).toStrictEqual(2);
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
