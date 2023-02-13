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
}
