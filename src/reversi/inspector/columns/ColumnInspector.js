import { positionOnBoard } from '../../board/positionOnBoard.js';
export class ColumnInspector {
    #gridYmax = 7;

    #grid;

    #x;

    #y;

    #player;

    #up = -1;

    #down = 1;

    constructor(position, grid, player) {
        this.#grid = grid;
        this.#x = position[0];
        this.#y = position[1];
        this.#player = player;
    }

    findFlipPositions(pieces) {
        //this.#grid[this.#x][this.#y] = this.#player;
        pieces = this.#lookPieces(pieces, this.#up);
        pieces = this.#lookPieces(pieces, this.#down);
        return pieces;
    }

    possibleMovements () {
        const position = new positionOnBoard(this.#grid, this.#player);
        let positions = [];
        positions = position.asPositionOnBoard();
        let possibleMoves = [];
        for (let i = 0; i < positions.length; i++) {
            let x = positions[i][0];
            let y = positions[i][1];
            possibleMoves = this.lookPositions(possibleMoves, this.#up, x, y);
            possibleMoves = this.lookPositions(possibleMoves, this.#down, x, y);
        }
        return possibleMoves;
    }

    #lookPieces(CordstoFlip, direction) {
        let array = [];
        let checkPieces = [];
        let gridLimit = this.#gridYmax;
        if (direction == this.#up) {
            gridLimit = 0;
        }
        let key = this.#x + direction;
        while (key != gridLimit) {
            if ((this.#grid[key][this.#y]) == this.#player || (this.#grid[key][this.#y] == 0)) {
                if (this.#grid[key][this.#y] == this.#player) {
                    CordstoFlip = checkPieces;
                }
                break;
            } else {
                array = [key, this.#y];
                checkPieces.push(array);
            }
            key = key + direction;
        }
        return CordstoFlip;
    }

    lookPositions (possibleMoves, direction, x, y) {
        let playerOposite;
        if (this.#player == 'B') {
            playerOposite = 'W';
        } else {
            playerOposite = 'B';
        }
        let counter = 0;
        let gridLimit = this.#gridYmax + 1;
        if (direction == this.#up) {
            gridLimit = 0;
        }
        let key = x + direction;
        if (key < 0) {
            key = 0;
        }
        while (key != gridLimit) {
            if ((this.#grid[key][y]) == playerOposite) {
                counter++;
            } else {
                if ((this.#grid[key][y]) == this.#player) {
                    break;
                } else {
                    if (counter > 0) {
                        let arr = [];
                        arr = [key, y];
                        possibleMoves.push(arr);
                        break;
                    }
                    break;
                }
            }
            key = key + direction;
        }
        return possibleMoves;
    }
}