export class Grid {
    #posX;

    #posY;

    #color;

    #map;

    #black = 'b';

    #white = 'w';

    constructor(posX, posY, color) {
        this.#posX = posX;
        this.#posY = posY;
        this.#color = color;
    }

    gridInit () {
        const mapDim = 8;
        this.#map = new Array(mapDim).fill().map(() => Array(mapDim).fill(' '));
        this.#map[this.#posX][this.#posY] = this.#color;
        this.#map[4][3] = this.#black;
        this.#map[3][4] = this.#black;
        this.#map[4][4] = this.#white;

        return this.#map;
    }
}