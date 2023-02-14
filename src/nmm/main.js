import { Grid } from './grid.js';
import { Player } from './player.js';
import { rule } from './rule.js';
import promptSync from 'prompt-sync';

let prompt = new promptSync();
let grid = new Grid();
let player1 = new Player('W');
let player2 = new Player('B');

let rule1 = new rule();
let index = 0;

while (index < 9) {
    console.clear();
    console.log(grid.showGrid());
    console.log('Player ' + player1.colorPlayer + ' turn');
    let rowCoordinate = parseInt(prompt('Enter the row coordinate '));
    let columnCoordinate = parseInt(prompt('Enter the column coordinate '));

    if (rule1.isPossiblePosition([rowCoordinate, columnCoordinate])) {
        grid.changeValueCoin(player1.colorPlayer, rowCoordinate, columnCoordinate);
        let mill = grid.checkIfThereMills(player1.colorPlayer, rowCoordinate, columnCoordinate);
        if (mill.length > 0) {
            player1.addMill(mill);
            console.log(grid.showGrid());
            console.log('Delete a coin...');
            let posRowDelete = parseInt(prompt('Enter the row coordinate '));
            let posColDelete = parseInt(prompt('Enter the row coordinate '));
            grid.changeValueCoin('*', posRowDelete, posColDelete);
        }
        console.log(grid.showGrid());

        console.log('Player ' + player2.colorPlayer + ' turn');
        rowCoordinate = parseInt(prompt('Enter the row coordinate '));
        columnCoordinate = parseInt(prompt('Enter the column coordinate '));
        if (rule1.isPossiblePosition([rowCoordinate, columnCoordinate])) {
            grid.changeValueCoin(player2.colorPlayer, rowCoordinate, columnCoordinate);
            mill = grid.checkIfThereMills(player2.colorPlayer, rowCoordinate, columnCoordinate);
            if (mill.length > 0) {
                player2.addMill(mill);
                console.log(grid.showGrid());
                console.log('Delete a coin...');
                let posRowDelete = parseInt(prompt('Enter the row coordinate '));
                let posColDelete = parseInt(prompt('Enter the row coordinate '));
                grid.changeValueCoin('*', posRowDelete, posColDelete);
            }
            console.log(grid.showGrid());
            index++;
        } else {
            console.log('\n**** Invalid position ****\n');
        }
    } else {
        console.log('\n**** Invalid position ****\n');
    }

    // console.clear();
}