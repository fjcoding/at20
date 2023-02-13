import { Player } from './player.js';
import { Game } from './game.js';

const game = new Game();

const player1 = new Player('Babe', 'R', 12, game);
console.log(player1);
player1.selectPiece({ x: 0, y: 2 });
player1.movePiece({ x: 1, y:3});
console.log(game.initGame());
console.log(game);

