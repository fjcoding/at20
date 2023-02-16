import { Grid } from './grid.js';
import { Player } from './player.js';
import promptSync from 'prompt-sync';

let prompt = new promptSync();
let grid = new Grid();
let player1 = new Player('W');
let player2 = new Player('B');
const emptyPosition = '*';

grid.changeValueCoin(player1.colorPlayer, 0, 0);
grid.changeValueCoin(player1.colorPlayer, 0, 3);

export function player2PlayStage1() {
    console.clear();
    console.log(grid.showGrid());
    console.log('\nPlayer ' + player2.colorPlayer + ' turn. (' + player2.numberCoinsToPlay + ' coins to play)');
    let rowCoordinate = parseInt(prompt('Enter the row coordinate '));
    let columnCoordinate = parseInt(prompt('Enter the column coordinate '));
    let isEmpty = grid.checkAvailablePos(rowCoordinate, columnCoordinate);

    while (!isEmpty) {
        console.clear();
        console.log(grid.showGrid());
        console.log('\nSelect another position\n');
        rowCoordinate = parseInt(prompt('Enter the row coordinate '));
        columnCoordinate = parseInt(prompt('Enter the column coordinate '));
        isEmpty = grid.checkAvailablePos(rowCoordinate, columnCoordinate);
    }

    grid.changeValueCoin(player2.colorPlayer, rowCoordinate, columnCoordinate);
    player2.updateNumberCoinsToPlay();
    let mill = grid.checkIfThereMills(player2.colorPlayer, rowCoordinate, columnCoordinate);
    if (mill.length > 0) {
        player2.addMill(mill);
        if (player2.checkNewMillAdded()) {
            console.clear();
            console.log(grid.showGrid());
            console.log('Delete a coin...');
            let posRowDelete = parseInt(prompt('Enter the row coordinate '));
            let posColDelete = parseInt(prompt('Enter the row coordinate '));
            while (!(player1.checkOwnCoin(grid.getSymbolCoinFromGrid(posRowDelete, posColDelete)))) {
                console.clear();
                console.log(grid.showGrid());
                console.log('\nSelect another coin\n');
                posRowDelete = parseInt(prompt('Enter the row coordinate '));
                posColDelete = parseInt(prompt('Enter the row coordinate '));
            }
            grid.changeValueCoin(emptyPosition, posRowDelete, posColDelete);
            player2.updateNumberCoinsRemoved();
        }
    }
}


player2PlayStage1();
player2PlayStage1();
player2PlayStage1();
player2PlayStage1();
player2PlayStage1();