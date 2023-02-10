export class Grid {
    static COLUMN = 8;

    static ROW = 8;

    #gridBoard = [];

    get gridBoard () {
        return this.#gridBoard;
    }

    createGrid (gridBoard) {
        for (let i = 0; i < Grid.COLUMN; i += 1) {
            gridBoard [i] = [];
            for (let j = 0; j < Grid.ROW; j += 1) {
                gridBoard [i][j] = null;
            }
        }
    }

    toString() {
        let initGrid = '';
        let letter = ' A B C D E F G H';
        let board = ' ---------------  ';

        initGrid += letter + '\n';
        initGrid += board + '\n';

        for (let i = 0; i < Grid.ROW; i += 1) {
            initGrid += `${i}|`;
            for (let j = 0; j < Grid.COLUMN; j += 1) {
                if ((i + j) % 2 === 0) {
                    initGrid += '■|';
                } else if (this.#gridBoard [i] [j] === null) {
                    initGrid += ' |';
                }
            }
            initGrid += '\n';
        }
        initGrid += board;
        return initGrid;
    }

    constructor () {
        this.createGrid(this.#gridBoard);
    }
}
