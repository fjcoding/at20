export class Grid {
    static COLUMN = 8;

    static ROW = 8;

    #gridBoard = [];

    get gridBoard () {
        return this.#gridBoard;
    }

    renderBoard({ redPieces, whitePieces }) {
        this.cleanBoard();
        const board = this.#gridBoard;
        redPieces.forEach(piece => {
            board[piece.x][piece.y] = piece;
        });
        whitePieces.forEach(piece => {
            board[piece.x][piece.y] = piece;
        });
        return board;
    }

    cleanBoard() {
        this.#gridBoard.forEach((column, index) => {
            column.forEach((row, rowIndex) => {
                this.gridBoard[index][rowIndex] = null;
            });
        });
    }

    // Create a function to create an 8x8 grid with all elements set to null
    createGrid (gridBoard) {
        for (let i = 0; i < Grid.COLUMN; i += 1) {
            gridBoard [i] = [];
            for (let j = 0; j < Grid.ROW; j += 1) {
                gridBoard [i][j] = null;
            }
        }
    }

    // Create a function to display the grid as a string
    toString() {
        let initGrid = '';
        let numbers = '  0 1 2 3 4 5 6 7';

        initGrid += numbers + '\n';

        // Loop through the grid rows
        for (let i = 0; i < Grid.ROW; i += 1) {
            initGrid += `${i}|`;
            // Loop through the grid columns
            for (let j = 0; j < Grid.COLUMN; j += 1) {
                // Check if the current row and column are even
                if ((i + j) % 2 === 0) {
                    // Check if the current grid cell is not null
                    if (this.#gridBoard[i][j] !== null) {
                        // Display "R" if the piece is red, or "W" if the piece is white
                        initGrid += `${this.#gridBoard[i][j].getColor() === 'red' ? 'R' : 'W'}|`;
                    } else {
                        // Display an empty cell if the grid cell is null
                        initGrid += ' |';
                    }
                } else {
                    // Display a filled cell if the row and column are odd
                    initGrid += '■|';
                }
            }
            initGrid += '\n';
        }
        return initGrid;
    }

    constructor () {
        // Call the createGrid function to initialize the gridBoard property
        this.createGrid(this.#gridBoard);
    }
}