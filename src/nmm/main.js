import { Grid } from './grid.js';
import { Player } from './player.js';
import { rule } from './rule.js';
import promptSync from 'prompt-sync';

let prompt = new promptSync();
let grid = new Grid();
let player1 = new Player('W');
let player2 = new Player('B');

let rule1 = new rule();

while (player1.numberCoinsToPlay > 0 || player2.numberCoinsToPlay > 0) {
    console.clear();
    console.log(grid.showGrid());
    console.log('\nPlayer ' + player1.colorPlayer + ' turn. (' + player1.numberCoinsToPlay + ' coins to play)');
    let rowCoordinate = parseInt(prompt('Enter the row coordinate '));
    let columnCoordinate = parseInt(prompt('Enter the column coordinate '));

    if (rule1.isPossiblePosition([rowCoordinate, columnCoordinate])) {
        grid.changeValueCoin(player1.colorPlayer, rowCoordinate, columnCoordinate);
        player1.updateNumberCoinsToPlay();
        let mill = grid.checkIfThereMills(player1.colorPlayer, rowCoordinate, columnCoordinate);
        if (mill.length > 0) {
            player1.addMill(mill);
            console.log('Delete a coin...');
            let posRowDelete = parseInt(prompt('Enter the row coordinate '));
            let posColDelete = parseInt(prompt('Enter the row coordinate '));
            grid.changeValueCoin('*', posRowDelete, posColDelete);
            player2.updateNumberCoinsRemoved();
        }
        console.clear();
        console.log(grid.showGrid());

        console.log('\nPlayer ' + player2.colorPlayer + ' turn. (' + player2.numberCoinsToPlay + ' coins to play)');
        rowCoordinate = parseInt(prompt('Enter the row coordinate '));
        columnCoordinate = parseInt(prompt('Enter the column coordinate '));
        if (rule1.isPossiblePosition([rowCoordinate, columnCoordinate])) {
            grid.changeValueCoin(player2.colorPlayer, rowCoordinate, columnCoordinate);
            player2.updateNumberCoinsToPlay();
            mill = grid.checkIfThereMills(player2.colorPlayer, rowCoordinate, columnCoordinate);
            if (mill.length > 0) {
                player2.addMill(mill);
                console.log('Delete a coin...');
                let posRowDelete = parseInt(prompt('Enter the row coordinate '));
                let posColDelete = parseInt(prompt('Enter the row coordinate '));
                grid.changeValueCoin('*', posRowDelete, posColDelete);
                player1.updateNumberCoinsRemoved();
            }
            console.clear();
            console.log(grid.showGrid());
        } else {
            console.log('\n**** Invalid position ****\n');
        }
    } else {
        console.log('\n**** Invalid position ****\n');
    }

    // console.clear();
}