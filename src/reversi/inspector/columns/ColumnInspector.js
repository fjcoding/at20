import { positionOnBoard } from '../../board/positionOnBoard.js';
export class ColumnInspector {
    #grid;

    #playerPosition = [];

    #actualPlayer;

    #playerOposite;

    #directionToLook = [-1, 1]; //up: -1, down: 1;

    #playerSymbol = ['B', 'W']; //black: B, white: W

    constructor(position, grid, player) {
        this.#grid = grid;
        this.#playerPosition[0] = position[0];
        this.#playerPosition[1] = position[1];
        this.#actualPlayer = player;
        if (this.#actualPlayer == this.#playerSymbol[0]) {
            this.#playerOposite = this.#playerSymbol[1];
        } else {
            this.#playerOposite = this.#playerSymbol[0];
        }
    }

    findFlipPositions() {
        let pieces =  [];
        pieces = this.#lookPieces(pieces, this.#directionToLook[0]);
        pieces = this.#lookPieces(pieces, this.#directionToLook[1]);
        return pieces;
    }

    possibleMovements () {
        const position = new positionOnBoard(this.#grid, this.#actualPlayer);
        let positions = [];
        positions = position.asPositionOnBoard();
        let possibleMoves = [];
        for (let i = 0; i < positions.length; i++) {
            let cordX = positions[i][0];
            let cordY = positions[i][1];
            possibleMoves = this.#lookPositions(possibleMoves, this.#directionToLook[0], cordX, cordY);
            possibleMoves = this.#lookPositions(possibleMoves, this.#directionToLook[1], cordX, cordY);
        }
        return possibleMoves;
    }

    #lookPieces(CordstoFlip, direction) {
        let checkPieces = [];
        let gridLimit = this.#grid.length - 1;
        if (direction == this.#directionToLook[0]) {
            gridLimit = 0;
        }
        let key = this.#playerPosition[0] + direction;
        while (key != gridLimit) {
            if ((this.#grid[key][this.#playerPosition[1]]) == this.#actualPlayer || (this.#grid[key][this.#playerPosition[1]] == 0)) {
                if (this.#grid[key][this.#playerPosition[1]] == this.#actualPlayer) {
                    CordstoFlip = checkPieces;
                }
                break;
            } else {
                checkPieces.push([key, this.#playerPosition[1]]);
            }
            key = key + direction;
        }
        return CordstoFlip;
    }

    #lookPositions (possibleMoves, direction, x, y) {
        let counter = 0;
        let gridLimit = this.#grid.length;
        if (direction == this.#directionToLook[0]) {
            gridLimit = -1;
        }
        let key = x + direction;
        if (key < 0) {
            key = 0;
        }
        while (key != gridLimit) {
            if ((this.#grid[key][y]) == this.#playerOposite) {
                counter++;
            } else {
                if ((this.#grid[key][y]) == this.#actualPlayer) {
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