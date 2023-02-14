import { Coins } from './coins';
import { horizontalMills } from './mills/horizontal';
import { verticalMills } from './mills/vertical';

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

    checkIfThereMills(playerSymbol, rowCoin, colCoin) {
        let coinsPosition = [];
        for (let row = 0; row < this.#gridInit.length; row++) {
            for (let col = 0; col < this.#gridInit.length; col++) {
                if (this.getSymbolCoinFromGrid(row, col) === playerSymbol) {
                    coinsPosition.push(row + ',' + col);
                }
            }
        }
        let mills = [];
        this.checkHorizontalMills(coinsPosition, mills, rowCoin + ',' + colCoin);
        this.checkVerticalMills(coinsPosition, mills, rowCoin + ',' + colCoin);
        return mills;
    }

    checkHorizontalMills(coinsPosition, mills, posCoin) {
        let countCoins;
        for (let hMill in horizontalMills) {
            countCoins = 0;
            coinsPosition.forEach(position => {
                if (horizontalMills[hMill].indexOf(position) != -1) {
                    countCoins++;
                }
            });
            if (countCoins == 3 && horizontalMills[hMill].indexOf(posCoin) != -1) {
                mills.push(horizontalMills[hMill]);
            }
        }
    }

    checkVerticalMills(coinsPosition, mills, posCoin) {
        let countCoins;
        for (let vMill in verticalMills) {
            countCoins = 0;
            coinsPosition.forEach(position => {
                if (verticalMills[vMill].indexOf(position) != -1) {
                    countCoins++;
                }
            });
            if (countCoins == 3 && verticalMills[vMill].indexOf(posCoin) != -1) {
                mills.push(verticalMills[vMill]);
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