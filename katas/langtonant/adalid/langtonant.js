import { showTable } from './table.js';

const antMoves = (matriz = [[]], steps = undefined, direction = '', posX, posY, posBeforeA) => {
    const BLACK = 0;
    const WHITE = 1;
    const UP = 'U';
    const RIGHT = 'R';
    const LEFT = 'L';
    const DOWN = 'D';
    if (posBeforeA === BLACK) {
        if (direction === UP) {
            posBeforeA = matriz[posX][posY - 1];
            console.log(posBeforeA);
            matriz[posX][posY - 1] = 'a';
            matriz[posX][posY] = WHITE;
            steps--;
            direction = LEFT;
            console.log('New direction ' + direction, steps);
            console.log('**********');
            showTable(matriz);
            if (steps > 0) {
                antMoves(matriz, steps, direction, posX, posY, posBeforeA);
            }
        } else
        if (direction === LEFT) {
            posBeforeA = matriz[posX + 1][posY];
            console.log(posBeforeA);
            matriz[posX + 1][posY - 1] = 'a';
            matriz[posX][posY - 1] = WHITE;
            steps--;
            direction = DOWN;

            console.log('New direction ' + direction, steps);
            console.log('**********');
            showTable(matriz);
            if (steps > 0) {
                antMoves(matriz, steps, direction, posX, posY, posBeforeA);
            }
        } else
        if (direction === DOWN) {
            posBeforeA = matriz[posX][posY + 1];
            console.log(posBeforeA);
            matriz[posX + 1][posY] = 'a';
            matriz[posX + 1][posY - 1] = WHITE;
            steps--;
            direction = RIGHT;
            console.log('New direction ' + direction, steps);
            console.log('**********');
            showTable(matriz);
            if (steps > 0) {
                antMoves(matriz, steps, direction, posX, posY, posBeforeA);
            }
        } else
        if (direction === RIGHT) {
            posBeforeA = matriz[posX][posY - 1];//1
            console.log(posBeforeA);
            matriz[posX][posY] = 'a';
            matriz[posX + 1][posY] = WHITE;
            steps--;
            direction = UP;
            console.log('New direction ' + direction, steps);
            console.log('**********');
            showTable(matriz);
            if (steps > 0) {
                antMoves(matriz, steps, direction, posX, posY, posBeforeA);
            }
        }
    }
    //Grid WHITE
    if (posBeforeA === WHITE) {
        if (direction === RIGHT) {
            posBeforeA = matriz[posX][posY + 1];
            console.log(posBeforeA);
            matriz[posX + 1][posY + 1] = 'a';
            matriz[posX][posY + 1] = BLACK;
            steps--;
            direction = DOWN;
            console.log('New direction ' + direction, steps);
            console.log('**********');
            showTable(matriz);
            if (steps > 0) {
                antMoves(matriz, steps, direction, posX, posY, posBeforeA);
            }
        } else
        if (direction === UP) {
            posBeforeA = matriz[posX][posY + 1];//1
            console.log(posBeforeA);
            matriz[posX][posY + 1] = 'a';
            matriz[posX][posY] = BLACK;
            steps--;
            direction = RIGHT;
            console.log('New direction ' + direction, steps);
            console.log('**********');
            showTable(matriz);
            if (steps > 0) {
                antMoves(matriz, steps, direction, posX, posY, posBeforeA);
            }
        } else
        if (direction === LEFT) {
            posBeforeA = matriz[posX + 1][posY];
            console.log(posBeforeA);
            matriz[posX + 1][posY - 1] = 'a';
            matriz[posX][posY - 1] = BLACK;
            steps--;
            direction = UP;
            console.log('New direction ' + direction, steps);
            console.log('**********');
            showTable(matriz);
            if (steps > 0) {
                antMoves(matriz, steps, direction, posX, posY, posBeforeA);
            }
        } else
        if (direction === DOWN) {
            posBeforeA = matriz[posX][posY + 1];
            console.log(posBeforeA);
            matriz[posX + 1][posY] = 'a';
            matriz[posX + 1][posY - 1] = BLACK;
            steps--;
            direction = LEFT;
            console.log('New direction ' + direction, steps);
            console.log('**********');
            showTable(matriz);
            if (steps > 0) {
                antMoves(matriz, steps, direction, posX, posY, posBeforeA);
            }
        }
    }
};
export {antMoves};
