import { Grid } from './grid.js';
import { Player } from './player.js';
import promptSync from 'prompt-sync';
import { player1PlayStage1 } from './stages/player1PlayStage1.js';
import { player2PlayStage1 } from './stages/player2PlayStage1.js';

let prompt = new promptSync();
let grid = new Grid();
let player1 = new Player('W');
let player2 = new Player('B');
const emptyPosition = '*';

for (let index = 0; index < 9; index++) {
    player1PlayStage1(prompt, grid, player1, player2, emptyPosition);
    player2PlayStage1(prompt, grid, player1, player2, emptyPosition);
}
