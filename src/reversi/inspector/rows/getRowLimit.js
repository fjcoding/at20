import { positionOnBoard } from '../../board/positionOnBoard.js';

export class getRowLimit {
    #grid;

    #player;

    constructor(grid, player) {
        this.#grid = grid;
        this.#player = player;
    }

    rowLimitToRight() {
        var player;
        if (this.#player == 'B') {
            player = 'W';
        } else {
            player = 'B';
        }
        const piecePosition = new positionOnBoard(this.#grid, player);
        var newPositions = [];
        newPositions = piecePosition.asPositionOnBoard();
        var checkPieces = [];
        for (var index1 = 0; index1 < newPositions.length; index1++) {
            var x = newPositions[index1][0];
            var y = newPositions[index1][1] + 1;
            if (this.#grid[x][y] == ' ' && y <= 7 && this.#grid[x][y - 2] != ' ') {
                for (var keyf1 = y - 1; keyf1 >= 0; keyf1--) {
                    if ((this.#grid[x][keyf1]) == this.#player) {
                        var NewPositionArray = [];
                        NewPositionArray = [x, y];
                        checkPieces.push(NewPositionArray);
                        break;
                    }
                }
            }
        }
        return checkPieces;
    }

    rowLimitToLeft() {
        var player;
        if (this.#player == 'B') {
            player = 'W';
        } else {
            player = 'B';
        }
        const piecePosition = new positionOnBoard(this.#grid, player);
        var newPositions = [];
        newPositions = piecePosition.asPositionOnBoard();
        var checkPieces = [];
        for (var index = 0; index < newPositions.length; index++) {
            var x = newPositions[index][0];
            var y = newPositions[index][1] - 1;
            if (this.#grid[x][y] == ' ' && y <= 7 && this.#grid[x][y + 2] != ' ') {
                for (var keyf2 = y + 1; keyf2 <= 7; keyf2++) {
                    if ((this.#grid[x][keyf2]) == this.#player) {
                        var NewPositionArray = [];
                        NewPositionArray = [x, y];
                        checkPieces.push(NewPositionArray);
                        break;
                    }
                }
            }
        }
        return checkPieces;
    }
}