import { Grid } from './grid.js';
import { Piece } from './piece.js';

class Game {
    #grid;

    #redPieces = [];

    #whitePieces = [];

    constructor () {
        this.#grid = new Grid();
        this.createPieces();
    }

    createPieces () {
        for (let i = 0; i < Grid.ROW; i += 1) {
            for (let j = 0; j < Grid.COLUMN; j += 1) {
                if ((i + j) % 2 === 0) {
                    if (i < 3) {
                        const piece = new Piece('red', i, j);
                        this.#redPieces.push(piece);
                        this.#grid.gridBoard[i][j] = piece;
                    } else if (i > 4) {
                        const piece = new Piece('white', i, j);
                        this.#whitePieces.push(piece);
                        this.#grid.gridBoard[i][j] = piece;
                    }
                }
            }
        }
    }

    initGame () {
        return this.#grid.toString();
    }
}
let game = new Game();
console.log(game.initGame());