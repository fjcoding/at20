export class Grid {
    #map;

    #black = 'B';

    #white = 'W';

    #board;

    #player;

    #positionsForFlip = [];

    #lenArray = 0;

    gridInit () {
        const mapDim = 8;
        this.#map = new Array(mapDim).fill().map(() => Array(mapDim).fill(' '));
        this.#map[3][3] = this.#white;
        this.#map[4][3] = this.#black;
        this.#map[3][4] = this.#black;
        this.#map[4][4] = this.#white;

        return this.#map;
    }

    updateBoard (board, positionsForFlip, lenArray, player) {
        this.#board = board;
        this.#player = player;
        this.#positionsForFlip = positionsForFlip;
        this.#lenArray = lenArray;

        let actBoard = this.#board;
        let colorFlip = this.#player;
        if (this.#positionsForFlip == []) {
            return actBoard;
        } else {
            var arrayForFlip = this.#positionsForFlip;
            for (var index = 0; index < lenArray; index++) {
                var posX = arrayForFlip [index][0];
                var posY = arrayForFlip [index][1];
                if (actBoard[posX][posY] != colorFlip) {
                    actBoard[posX][posY] = colorFlip;
                }
            }
            return actBoard;
        }
    }


    displayBoard(gridInt)  {
        var display = '';
        var sizeX = gridInt.length;

        for (var rowCount = 0; rowCount < sizeX; rowCount++) {
            var sizeY = gridInt[rowCount].length;
        }

        display += '-------------------------------------------------';
        display += '\n';
        for (var iDg = 0; iDg < sizeX; iDg++) {
            display += '| ';

            for (var jDg = 0; jDg < sizeY; jDg++) {
                display += ' ' + gridInt[iDg][jDg] + '  | ';
            }
            display = display + ' ' + iDg;
            display += '\n';
            display += '-------------------------------------------------';
            display += '\n';
        }
        display += '   0     1     2     3     4     5     6     7';
        display += '\n';
        return display;
    }
}
