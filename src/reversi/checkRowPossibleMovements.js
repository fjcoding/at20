import { positionOnBoard } from './positionOnBoard';
import { checkAndFlipRow } from './RowPiecesThatCanFlip';

export class checkRowPossibleMovements {
    #grid;

    #player;

    constructor(grid, player) {
        this.#grid = grid;
        this.#player = player;
        this.checkRow();
    }

    checkRow() {
        var playerForPosition;
        if (this.#player == 'B') {
            playerForPosition = 'W';
        } else {
            playerForPosition = 'B';
        }
        const position = new positionOnBoard(this.#grid, playerForPosition);
        var positions = [];
        positions = position.asPositionOnBoard();
        var checkPieces = [];
        for (var index1 = 0; index1 < positions.length; index1++) {
            var x = positions[index1][0];
            var y = positions[index1][1] + 1;
            if (this.#grid[x][y] == ' ' && y <= 7) {
                var arr = [];
                arr = [x, y];
                checkPieces.push(arr);
            }
        }
        //left
        for (index1 = 0; index1 < positions.length; index1++) {
            x = positions[index1][0];
            y = positions[index1][1] - 1;
            if (this.#grid[x][y] == ' ' && y >= 0) {
                arr = [];
                arr = [x, y];
                checkPieces.push(arr);
            }
        }
        return checkPieces;
    }

    asPossibleMovement() {
        var playsArray = [];
        var arrP = this.checkRow();
        for (var index = 0; index < arrP.length; index++) {
            var x = arrP[index][0];
            var y = arrP[index][1];
            var checkRowPieces = new checkAndFlipRow(x, y, this.#grid, this.#player);
            if (checkRowPieces.checkRow() != []) {
                var plays = { play:[x, y],
                    Moves:checkRowPieces.checkRow()
                };
                playsArray.push(plays);
            }
        }
        return playsArray;
    }
}