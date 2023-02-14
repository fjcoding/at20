import { Grid } from './grid.js';
import { Piece } from './piece.js';

export class Game {
    #grid;

    #redPieces = [];

    #whitePieces = [];

    constructor () {
        this.#grid = new Grid();
        this.createPieces();
    }


    get redPieces() {
        return this.#redPieces;
    }

    get whitePieces() {
        return this.#whitePieces;
    }

    get grid() {
        return this.#grid;
    }

    refreshGrid() {
        this.#grid.renderBoard({ redPieces: this.#redPieces, whitePieces: this.#whitePieces });
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

    showBoard() {
        return this.#grid.toString();
    }
}