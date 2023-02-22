import { Grid } from './grid.js';
import { Player } from './player.js';
import { rule } from './rule.js';
import promptSync from 'prompt-sync';
import { player1PlayStage3 } from './stages/player1PlayStage3.js';
import { player2PlayStage3 } from './stages/player2PlayStage3.js';
import { player1PlayStage2 } from './stages/player1PlayStage2.js';
import { player2PlayStage2 } from './stages/player2PlayStage2.js';


let prompt = new promptSync();
let grid = new Grid();
let player1 = new Player('W');
let player2 = new Player('B');
let rule1 = new rule();
const emptyPosition = '*';
grid.changeValueCoin(player2.colorPlayer, 0, 3);
grid.changeValueCoin(player2.colorPlayer, 0, 6);
grid.changeValueCoin(player2.colorPlayer, 3, 0);
grid.changeValueCoin(player2.colorPlayer, 3, 1);
grid.changeValueCoin(player1.colorPlayer, 4, 3);
grid.changeValueCoin(player1.colorPlayer, 5, 1);
grid.changeValueCoin(player1.colorPlayer, 3, 5);
player1.updateNumberCoinsRemoved();
player1.updateNumberCoinsRemoved();
player1.updateNumberCoinsRemoved();
player1.updateNumberCoinsRemoved();
player1.updateNumberCoinsRemoved();
player1.updateNumberCoinsRemoved();
player2.updateNumberCoinsRemoved();
player2.updateNumberCoinsRemoved();
player2.updateNumberCoinsRemoved();
player2.updateNumberCoinsRemoved();
player2.updateNumberCoinsRemoved();

let win = '';
while (!(player1.numberCoinsRemoved == 7 ||  player2.numberCoinsRemoved == 7)) {
    if (player1.numberCoinsRemoved == 6) {
        player1PlayStage3(prompt, grid, player1, player2, emptyPosition);
    } else if (player1.numberCoinsRemoved < 6) {
        player1PlayStage2(prompt, grid, player1, player2, emptyPosition, rule1);
    }
    if (player2.numberCoinsRemoved == 6) {
        player2PlayStage3(prompt, grid, player1, player2, emptyPosition);
    } else if (player2.numberCoinsRemoved < 6) {
        player2PlayStage2(prompt, grid, player1, player2, emptyPosition, rule1);
    }
}
if (player1.numberCoinsRemoved == 7) {
    win = 'BLACK';
} else {
    win = 'WHITE';
}
console.clear();
console.log(grid.showGrid());
console.log('The winner is ' + win);

