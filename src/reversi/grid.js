export class Grid {
    #map;

    #black = 'b';

    #white = 'w';

    gridInit () {
        const mapDim = 8;
        this.#map = new Array(mapDim).fill().map(() => Array(mapDim).fill(' '));
        this.#map[3][3] = this.#white;
        this.#map[4][3] = this.#black;
        this.#map[3][4] = this.#black;
        this.#map[4][4] = this.#white;

        return this.#map;
    }

    updateBoard (board) {
        let actBoard = board;
        return actBoard;
    }
}