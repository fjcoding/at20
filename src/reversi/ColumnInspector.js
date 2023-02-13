import { positionOnBoard } from './positionOnBoard';
export class ColumnInspector {
    #gridYmax = 7;

    #grid;

    #x;

    #y;

    #player;

    constructor(position, grid, player) {
        this.#grid = grid;
        this.#x = position[0];
        this.#y = position[1];
        this.#player = player;
    }

    findFlipPositions(array) {
        this.#grid[this.#x][this.#y] = this.#player;
        let CordstoFlip = [];
        let checkPieces = [];
        for (let keyf1 = this.#x + 1; keyf1 < this.#gridYmax; keyf1++) {//find pieces in a column down
            if ((this.#grid[keyf1][this.#y]) == this.#player || (this.#grid[keyf1][this.#y] == 0)) {
                if (this.#grid[keyf1][this.#y] == this.#player) {
                    CordstoFlip = checkPieces;
                }
                break;
            } else {
                array = [keyf1, this.#y];
                checkPieces.push(array);
            }
        }

        for (var keyf2 = this.#x - 1; keyf2 > 0; keyf2--) {//find pieces in a column up
            if ((this.#grid[keyf2][this.#y]) == this.#player || (this.#grid[keyf2][this.#y] == 0)) {
                if (this.#grid[keyf2][this.#y] === this.#player) {
                    CordstoFlip = checkPieces;
                }
                break;
            } else {
                array = [keyf2, this.#y];
                checkPieces.push(array);
            }
        }

        return CordstoFlip;
    }

    possibleMovements () {
        let playerOposite;
        if (this.#player == 'B') {
            playerOposite = 'W';
        } else {
            playerOposite = 'B';
        }
        const position = new positionOnBoard(this.#grid, this.#player);
        let positions = [];
        positions = position.asPositionOnBoard();
        let possibleMoves = [];
        for (let i = 0; i < positions.length; i++) {
            let x = positions[i][0];
            let y = positions[i][1];
            let counter = 0;
            //Search down
            for (let keyf1 = x + 1; keyf1 <= this.#gridYmax; keyf1++) {
                if ((this.#grid[keyf1][y]) == playerOposite) {
                    counter++;
                } else {
                    if ((this.#grid[keyf1][y]) == this.#player) {
                        break;
                    } else {
                        if (counter > 0) {
                            let arr = [];
                            arr = [keyf1, y];
                            possibleMoves.push(arr);
                            counter = 0;
                        }
                    }
                }
            }
            counter = 0;
            //Search up
            for (let keyf2 = x - 1; keyf2 >= 0; keyf2--) {
                if ((this.#grid[keyf2][y]) == playerOposite) {
                    counter++;
                } else {
                    if ((this.#grid[keyf2][y]) == this.#player) {
                        break;
                    } else {
                        if (counter > 0) {
                            let arr = [];
                            arr = [keyf2, y];
                            possibleMoves.push(arr);
                            counter = 0;
                        }
                    }
                }
            }
        }
        return possibleMoves;
    }
}