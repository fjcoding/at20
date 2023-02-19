import { Grid } from './grid.js';
import { Player } from './player.js';
import { rule } from './rule.js';
import promptSync from 'prompt-sync';
import { player1PlayStage1 } from './stages/player1PlayStage1.js';
import { player2PlayStage1 } from './stages/player2PlayStage1.js';
import { player1PlayStage2 } from './stages/player1PlayStage2.js';
import { player2PlayStage2 } from './stages/player2PlayStage2.js';

let prompt = new promptSync();
let grid = new Grid();
let player1 = new Player('W');
let player2 = new Player('B');
const emptyPosition = '*';
const t = true;
let rule1 = new rule();

for (let index = 0; index < 9; index++) {
    player1PlayStage1(prompt, grid, player1, player2, emptyPosition);
    player2PlayStage1(prompt, grid, player1, player2, emptyPosition);
}

while (t) {
    player1PlayStage2(prompt, grid, player1, player2, emptyPosition, rule1);
    if (player2.numberCoinsRemoved === 6) {
        break;
    }
    player2PlayStage2(prompt, grid, player1, player2, emptyPosition, rule1);
    if (player1.numberCoinsRemoved === 6) {
        break;
    }
}