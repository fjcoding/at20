import { showTable } from './table.js';

const antMoves = (matriz = [[]], steps = undefined, sense = '', posX, posY, posBeforeA) => {
    const BLACK = 0;
    const WHITE = 1;
    const UP = 'U';
    const RIGHT = 'R';
    const LEFT = 'L';
    const DOWN = 'D';
    if (posBeforeA === BLACK) {
        if (sense === UP) {
            posBeforeA = matriz[posX][posY - 1];
            console.log(posBeforeA);
            matriz[posX][posY - 1] = 'a';
            matriz[posX][posY] = WHITE;
            steps--;
            sense = LEFT;
            console.log('New sense ' + sense, steps);
            console.log('**********');
            showTable(matriz);
            if (steps > 0) {
                antMoves(matriz, steps, sense, posX, posY, posBeforeA);
            }
        } else
        if (sense === LEFT) {
            posBeforeA = matriz[posX + 1][posY];
            console.log(posBeforeA);
            matriz[posX + 1][posY - 1] = 'a';
            matriz[posX][posY - 1] = WHITE;
            steps--;
            sense = DOWN;

            console.log('New sense ' + sense, steps);
            console.log('**********');
            showTable(matriz);
            if (steps > 0) {
                antMoves(matriz, steps, sense, posX, posY, posBeforeA);
            }
        } else
        if (sense === DOWN) {
            posBeforeA = matriz[posX][posY + 1];
            console.log(posBeforeA);
            matriz[posX + 1][posY] = 'a';
            matriz[posX + 1][posY - 1] = WHITE;
            steps--;
            sense = RIGHT;
            console.log('New sense ' + sense, steps);
            console.log('**********');
            showTable(matriz);
            if (steps > 0) {
                antMoves(matriz, steps, sense, posX, posY, posBeforeA);
            }
        } else
        if (sense === RIGHT) {
            posBeforeA = matriz[posX][posY - 1];//1
            console.log(posBeforeA);
            matriz[posX][posY] = 'a';
            matriz[posX + 1][posY] = WHITE;
            steps--;
            sense = UP;
            console.log('New sense ' + sense, steps, posBeforeA);
            console.log('**********');
            showTable(matriz);
            if (steps > 0) {
                antMoves(matriz, steps, sense, posX, posY, posBeforeA);
            }
        }
    }
    //Grid WHITE
    if (posBeforeA === WHITE) {
        if (sense === RIGHT) {
            posBeforeA = matriz[posX][posY + 1];
            console.log(posBeforeA);
            matriz[posX + 1][posY + 1] = 'a';
            matriz[posX][posY + 1] = BLACK;
            steps--;
            sense = DOWN;
            console.log('New sense ' + sense, steps, posBeforeA);
            console.log('**********');
            showTable(matriz);
            if (steps > 0) {
                antMoves(matriz, steps, sense, posX, posY, posBeforeA);
            }
        } else
        if (sense === UP) {
            posBeforeA = matriz[posX][posY + 1];//1
            console.log(posBeforeA);
            matriz[posX][posY + 1] = 'a';
            matriz[posX][posY] = BLACK;
            steps--;
            sense = RIGHT;
            console.log('New sense ' + sense, steps);
            console.log('**********');
            showTable(matriz);
            if (steps > 0) {
                antMoves(matriz, steps, sense, posX, posY, posBeforeA);
            }
        } else
        if (sense === LEFT) {
            posBeforeA = matriz[posX + 1][posY];
            console.log(posBeforeA);
            matriz[posX + 1][posY - 1] = 'a';
            matriz[posX][posY - 1] = BLACK;
            steps--;
            sense = UP;
            console.log('New sense ' + sense, steps);
            console.log('**********');
            showTable(matriz);
            if (steps > 0) {
                antMoves(matriz, steps, sense, posX, posY, posBeforeA);
            }
        } else
        if (sense === DOWN) {
            posBeforeA = matriz[posX][posY + 1];
            console.log(posBeforeA);
            matriz[posX + 1][posY] = 'a';
            matriz[posX + 1][posY - 1] = BLACK;
            steps--;
            sense = LEFT;
            console.log('New sense ' + sense, steps);
            console.log('**********');
            showTable(matriz);
            if (steps > 0) {
                antMoves(matriz, steps, sense, posX, posY, posBeforeA);
            }
        }
        return steps;
    }
};
export {antMoves};
