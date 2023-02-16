import { positionOnBoard } from '../../board/positionOnBoard.js';
export class ColumnInspector {
    #gridYmax = 7;

    #grid;

    #x;

    #y;

    #player;

    #playerOposite;

    #up = -1;

    #down = 1;

    #blackPlayer = 'B';

    #whitePlayer = 'W';

    constructor(position, grid, player) {
        this.#grid = grid;
        this.#x = position[0];
        this.#y = position[1];
        this.#player = player;
        if (this.#player == this.#blackPlayer) {
            this.#playerOposite = this.#whitePlayer;
        } else {
            this.#playerOposite = this.#blackPlayer;
        }
    }

    findFlipPositions() {
        let pieces =  [];
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
            let cordX = positions[i][0];
            let cordY = positions[i][1];
            possibleMoves = this.#lookPositions(possibleMoves, this.#up, cordX, cordY);
            possibleMoves = this.#lookPositions(possibleMoves, this.#down, cordX, cordY);
        }
        return possibleMoves;
    }

    #lookPieces(CordstoFlip, direction) {
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
                checkPieces.push([key, this.#y]);
            }
            key = key + direction;
        }
        return CordstoFlip;
    }

    #lookPositions (possibleMoves, direction, x, y) {
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
            if ((this.#grid[key][y]) == this.#playerOposite) {
                counter++;
            } else {
                if ((this.#grid[key][y]) == this.#player) {
                    break;
                } else {
                    if (counter > 0) {
                        possibleMoves.push([key, y]);
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