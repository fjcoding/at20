export class RowInspector {
    #grid;

    constructor(x, y, grid, player) {
        // this.newToken = newToken;
        this.#grid = grid;
        this.x = x;
        this.y = y;
        this.player = player;
        this.checkRow();
    }

    checkRow() {
        var gridXmax = 7;

        /*var ntxCoor = this.newToken[0];
        var ntyCoor = this.newToken[1];
        var ntValue = this.newToken[3];*/
        var y = this.y;

        var flip = [];
        var checkPieces = [];//[0,0,0,0,1,2,2,1]
        for (var index = y + 1; index < gridXmax; index++) {//find pieces in a row to the right
            if ((this.#grid[this.x][index]) == this.player || (this.#grid[this.x][index] == 0)) {
                if (this.#grid[this.x][index] == this.player) {
                    flip = checkPieces;
                }
                break;
            } else {
                var arr = [];
                arr = [this.x, index];
                checkPieces.push(arr);
            }
        }

        for (var keyf1 = y - 1; keyf1 > 0; keyf1--) {//find pieces in a row to the left
            if ((this.#grid[this.x][keyf1]) == this.player || (this.#grid[this.x][keyf1] == 0)) {
                if (this.#grid[this.x][keyf1] === this.player) {
                    flip = checkPieces;
                }
                break;
            } else {
                var arr1 = [];
                arr1 = [this.x, keyf1];
                checkPieces.push(arr1);
            }
        }

        return flip;
    }


    asFlip() {
        if (this.checkRow() == []) {
            return this.#grid;
        } else {
            this.#grid[this.x][this.y] = this.player;
            var lengthFlip = this.checkRow().length;
            var arr = [];
            arr = this.checkRow();
            for (var i = 0; i < lengthFlip; i++) {
                var x = arr[i][0];
                var y = arr[i][1];
                if (this.#grid[x][y] == 'W') {
                    this.#grid[x][y] = 'B';
                } else {
                    this.#grid[x][y] = 'W';
                }
            }
            return this.#grid;
        }
    }
}