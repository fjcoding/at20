import { Player } from './player.js';
import { Game } from './game.js';

const game = new Game();
console.log(game.showBoard());

const player1 = new Player('Babe', 'R', 12, game);
player1.selectPiece({ x: 2, y: 0 });
player1.movePiece({ x: 3, y: 1 });

game.refreshGrid();
console.log(game.showBoard());

const player2 = new Player('Jude', 'W', 12, game);
player2.selectPiece({ x: 5, y: 7 });
player2.movePiece({ x: 4, y: 6 });
game.refreshGrid();
console.log(game.showBoard());


