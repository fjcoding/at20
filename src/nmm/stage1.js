import { Grid } from './grid.js';
import { Player } from './player.js';
import { rule } from './rule.js';
import promptSync from 'prompt-sync';
import { player1PlayStage1 } from './player1PlayStage1.js';
import { player2PlayStage1 } from './player2PlayStage1.js';

let prompt = new promptSync();
let grid = new Grid();
let player1 = new Player('W');
let player2 = new Player('B');
let rule1 = new rule();
const emptyPosition = '*';

player1PlayStage1(prompt, grid, player1, player2, emptyPosition);
player2PlayStage1(prompt, grid, player1, player2, emptyPosition);