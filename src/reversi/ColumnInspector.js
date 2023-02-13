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
    validatePosition () {
    }
}