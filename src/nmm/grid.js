import { Coins } from './coins';
export class Grid {
    static coinSymbols = { NA1: '-', NA2: '|', NA3: ' ', PA: '*' };

    #gridInit;

    constructor () {
        const notAvailable1 = new Coins(Grid.coinSymbols.NA1);
        const notAvailable2 = new Coins(Grid.coinSymbols.NA2);
        const notAvailable3 = new Coins(Grid.coinSymbols.NA3);
        const posAvailable = new Coins(Grid.coinSymbols.PA);
        this.#gridInit = [
            [posAvailable, notAvailable1, notAvailable1, posAvailable, notAvailable1, notAvailable1, posAvailable],
            [notAvailable2, posAvailable, notAvailable1, posAvailable, notAvailable1, posAvailable, notAvailable2],
            [notAvailable2, notAvailable2, posAvailable, posAvailable, posAvailable, notAvailable2, notAvailable2],
            [posAvailable, posAvailable, posAvailable, notAvailable3, posAvailable, posAvailable, posAvailable],
            [notAvailable2, notAvailable2, posAvailable, posAvailable, posAvailable, notAvailable2, notAvailable2],
            [notAvailable2, posAvailable, notAvailable1, posAvailable, notAvailable1, posAvailable, notAvailable2],
            [posAvailable, notAvailable1, notAvailable1, posAvailable, notAvailable1, notAvailable1, posAvailable]
        ];
    }

    showGridInit() {
        let grid = [];
        let stringGrid = '';
        for (let row = 0; row < this.#gridInit.length; row++) {
            grid[row] = [];
            stringGrid += (this.#gridInit.length - (row + 1)) + ' ';
            for (let col = 0; col < this.#gridInit.length; col++) {
                grid[row][col] = this.#gridInit[row][col].symbol;
                stringGrid += this.#gridInit[row][col].symbol + ' ';
            }
            stringGrid += '\n';
        }
        stringGrid += '  a b c d e f g';
        console.log(stringGrid);
        return grid;
    }

    verifyThreeCoins (grid) {
        if (this.countCoinsInGrid(grid, 'w') === 3 && this.countCoinsInGrid(grid, 'b') === 3) {
            return 'both';
        } else if (this.countCoinsInGrid(grid, 'b') === 3) {
            return 'black';
        } else if (this.countCoinsInGrid(grid, 'w') === 3) {
            return 'white';
        } else {
            return 'none';
        }
    }
    
    countCoinsInGrid (grid, symbol) {
        let coins = 0;
        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid.length; col++) {
                if (grid[row][col] === symbol) {
                    coins += 1;
                } 
            }
        }
        return coins;
    }
}