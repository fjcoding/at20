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
        let letter = ' A B C D E F G H';
        let board = ' ------------------';
        for (let i = 0; i < Grid.COLUMN; i += 1) {
            let box = `${i}|`;
            for (let j = 0; j < Grid.ROW; j += 1) {
                if ((i + j) % 2 === 0) {
                    box += '■|';
                }
                else if (gridBoard [i] [j] === null)
                {
                    box += ' |';
                }
            }
        }

        let initGrid = letter + '/n' + board + '/n' + box + '/n' + board;
        return initGrid;
    }

    constructor () {
        this.createGrid(this.#gridBoard);       
    }
}
