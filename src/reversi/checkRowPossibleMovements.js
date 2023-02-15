import { positionOnBoard } from './positionOnBoard.js';
import { RowInspector } from './RowInspector.js';

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
        //rigth
        for (var index1 = 0; index1 < positions.length; index1++) {
            var x = positions[index1][0];
            var y = positions[index1][1] + 1;
            if (this.#grid[x][y] == ' ' && y <= 7 ) {
                //revisar de este punto a la izquierda
                for (var keyf1 = y - 1; keyf1 >= 0; keyf1--) {//find pieces in a row to the left
                    if ((this.#grid[x][keyf1]) == this.#player) {
                        var arr = [];
                        arr = [x, y];
                        checkPieces.push(arr);
                        break
                    }
                }


            }
        }
        for (var index1 = 0; index1 < positions.length; index1++) {
             //left
             x = positions[index1][0];
             y = positions[index1][1] - 1;
            if (this.#grid[x][y] == ' ' && y <= 7 ) {
                //revisar de este punto a la derecha
                for (var keyf2 = y + 1; keyf2 <=7 ; keyf2++) {//find pieces in a row to the left
                    if ((this.#grid[x][keyf2]) == this.#player) {
                        var arr = [];
                        arr = [x, y];
                        checkPieces.push(arr);
                        break
                    }
                }

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
            var arr = [x, y];
            var checkRowPieces = new RowInspector(arr, this.#grid, this.#player);
            if (checkRowPieces.checkRow() != []) {
                var plays = { play:[x, y],
                    Moves:checkRowPieces.checkRow()
                };
                playsArray.push(plays);
            }
        }
        return playsArray;
    }

    possibleMoves() {
        var possibleRow = [];
        const moves = this.asPossibleMovement();
        const rowLenght = moves.length;
        for (var index = 0; index < rowLenght; index++) {
            possibleRow.push(moves[index].play);
        }
        return possibleRow;
    }
}