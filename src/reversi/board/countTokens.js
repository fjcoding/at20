

export class Tokens {
    #posX;

    #posY;

    #color;

    #grid;

    #board;

    constructor(board, color) {
        this.#board = board;
        this.#color = color;
    }

    count(board, color) {
        var arr = [];
        const boardLenght = board.length;
        for (var i = 0; i < boardLenght; i++) {
            for (var j = 0; j < boardLenght; j++) {
                if (this.#board[i][j] == color) {
                    arr.push([i, j]);
                }
            }
        }
        return arr.length;
    }
}

