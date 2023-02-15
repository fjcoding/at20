import { Coins } from './coins.js';
import { horizontalMills } from './mills/horizontal.js';
import { verticalMills } from './mills/vertical.js';

export class Grid {
    static coinSymbols = { NA1: '-', NA2: '|', NA3: ' ', PA: '*', WHITE: 'W', BLACK:'B'};

    #gridInit;

    constructor () {
        const notAvailable1 = new Coins(Grid.coinSymbols.NA1);
        const notAvailable2 = new Coins(Grid.coinSymbols.NA2);
        const notAvailable3 = new Coins(Grid.coinSymbols.NA3);
        this.#gridInit = [
            [new Coins(Grid.coinSymbols.PA), notAvailable1, notAvailable1, new Coins(Grid.coinSymbols.PA), notAvailable1, notAvailable1, new Coins(Grid.coinSymbols.PA)],
            [notAvailable2, new Coins(Grid.coinSymbols.PA), notAvailable1, new Coins(Grid.coinSymbols.PA), notAvailable1, new Coins(Grid.coinSymbols.PA), notAvailable2],
            [notAvailable2, notAvailable2, new Coins(Grid.coinSymbols.PA), new Coins(Grid.coinSymbols.PA), new Coins(Grid.coinSymbols.PA), notAvailable2, notAvailable2],
            [new Coins(Grid.coinSymbols.PA), new Coins(Grid.coinSymbols.PA), new Coins(Grid.coinSymbols.PA), notAvailable3, new Coins(Grid.coinSymbols.PA), new Coins(Grid.coinSymbols.PA), new Coins(Grid.coinSymbols.PA)],
            [notAvailable2, notAvailable2, new Coins(Grid.coinSymbols.PA), new Coins(Grid.coinSymbols.PA), new Coins(Grid.coinSymbols.PA), notAvailable2, notAvailable2],
            [notAvailable2, new Coins(Grid.coinSymbols.PA), notAvailable1, new Coins(Grid.coinSymbols.PA), notAvailable1, new Coins(Grid.coinSymbols.PA), notAvailable2],
            [new Coins(Grid.coinSymbols.PA), notAvailable1, notAvailable1, new Coins(Grid.coinSymbols.PA), notAvailable1, notAvailable1, new Coins(Grid.coinSymbols.PA)]
        ];
    }

    showGrid() {
        let grid = [];
        let stringGrid = '';
        for (let row = 0; row < this.#gridInit.length; row++) {
            grid[row] = [];
            stringGrid += row + ' ';
            for (let col = 0; col < this.#gridInit.length; col++) {
                grid[row][col] = this.#gridInit[row][col].symbol;
                stringGrid += this.#gridInit[row][col].symbol + ' ';
            }
            stringGrid += '\n';
        }
        stringGrid += '  0 1 2 3 4 5 6';
        return stringGrid;
    }

    checkIfThereMills(colorPlayer, rowCoin, colCoin) {
        let coinsPosition = [];
        for (let row = 0; row < this.#gridInit.length; row++) {
            for (let col = 0; col < this.#gridInit.length; col++) {
                if (this.getSymbolCoinFromGrid(row, col) === colorPlayer) {
                    coinsPosition.push(row + ',' + col);
                }
            }
        }
        let mill = [];
        this.checkDirectionMills(coinsPosition, mill, rowCoin + ',' + colCoin, horizontalMills);
        this.checkDirectionMills(coinsPosition, mill, rowCoin + ',' + colCoin, verticalMills);
        return mill;
    }

    checkDirectionMills(coinsPosition, mill, posCoin, directionMills) {
        let countCoins;
        for (let hMill in directionMills) {
            countCoins = 0;
            coinsPosition.forEach(position => {
                if (directionMills[hMill].indexOf(position) != -1) {
                    countCoins++;
                }
            });
            if (countCoins == 3 && directionMills[hMill].indexOf(posCoin) != -1) {
                mill.push(directionMills[hMill]);
            }
        }
    }

    getSymbolCoinFromGrid(row, col) {
        return this.#gridInit[row][col].symbol;
    }

    changeValueCoin(newValue, row, col) {
        this.#gridInit[row][col].changeSymbolCoin(newValue);
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

    checkAvailablePos() {
        for (let row = 0; row < this.#gridInit.length; row++) {
            for (let col = 0; col < this.#gridInit.length; col++) {
                if (this.#gridInit[row][col].symbol === Grid.coinSymbols.PA) {
                    return true;
                }
            }
        }
        return false;
    }
}
