
export class findPositionOnBoard {
    #xPosition;

    #board;

    #yPosition;

    #player;


    constructor(xPosition, yPosition, player, board) {
        this.#xPosition = xPosition;
        this.#yPosition = yPosition;
        this.#board = board;
        this.#player = player;
    }


    asChecker() {
        /*  const board =  [[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
                        [' ', ' ', 'W', 'B', 'B', 'W', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];
*/
        //row right
        var changedList = [];
        var flipList = [];
        var yPosition = this.#yPosition;

        while (yPosition < 7) {
            yPosition += 1;
            var valueNextToX = this.#board[this.#xPosition][yPosition];
            if (valueNextToX == ' ' || valueNextToX == this.#player) {
                if (valueNextToX == this.#player) {
                    flipList = flipList.concat(changedList);
                }
            } else {
                var newLocation = {x:this.#xPosition, y:yPosition};
                changedList.push(newLocation);
            }
        }

        //row left
        if (flipList == []) {
            changedList = [];
            flipList = [];
            yPosition = this.#yPosition;

            while (yPosition > 0) {
                yPosition -= 1;
                valueNextToX = this.#board[this.#xPosition][yPosition];
                if (valueNextToX == ' ' || valueNextToX == this.#player) {
                    if (valueNextToX == this.#player) {
                        flipList = flipList.concat(changedList);
                    }
                } else {
                    newLocation = {x:this.#xPosition, y:yPosition};
                    changedList.push(newLocation);
                }
            }
        }
        return flipList;
    }

    asflip() {
        /* const board =  [[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
                        [' ', ' ', 'W', 'B', 'B', 'W', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
                        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']];*/

        var flipLenght = this.asChecker().length;
        for (var index = 0; index < flipLenght; index++) {
            var flipList = this.asChecker();
            var x = flipList[index].x;
            var y = flipList[index].y;
            if (this.#board[x][y] == 'B') {
                this.#board[x][y] = 'W';
            } else {
                this.#board[x][y] = 'B';
            }
        }

        return this.#board;
    }
}


