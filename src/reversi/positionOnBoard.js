
import { Grid } from './grid';
export class positionOnBoard {
    #posX;

    #posY;

    #color;

    #grid = new Grid();

    #board = this.#grid.gridInit();

    constructor(board, color) {
        this.#board = board;
        this.#color = color;
    }

    asPositionOnBoard() {
        var arr = [];
        const boardLenght = this.#board.length;
        for (var i = 0; i < boardLenght; i++) {
            for (var j = 0; j < boardLenght; j++) {
                if (this.#board[i][j] == this.#color) {
                    arr.push([i, j]);
                }
            }
        }
        return arr;
    }
}

