export class grid {
    #gridBoard;

    constructor () {
        this.#gridBoard = [];
        for (let i = 0; i < 8; i++) {
            this.#gridBoard[i] = [];
            for (let j = 0; j < 8; j++) {
                this.#gridBoard [i][j] = null;
            }
        }
    }

    showGrid () {
        console.log('  A B C D E F G H');
        console.log('------------------');
        for (let i = 0; i < 8; i++) {
            let row = `${i}|`;
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 === 0) {
                    row += '■|';
                } else if (this.#gridBoard[i][j] === null) {
                    row += ' |';
                }
            }
            console.log(row);
        }
        console.log('------------------');
    }
}
