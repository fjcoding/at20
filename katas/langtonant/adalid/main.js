import { antMoves } from './langtonant.js';

const startProgram = (large = undefined, steps = undefined, direction = '') =>{
    if (large === undefined) {
        return console.warn('You did not enter any number for the size of the arr');
    }
    if (typeof large !== 'number') {
        return console.error(`The valu ${large} entered is NOT a number`);
    }
    if (Math.sign(large) === -1) {
        return console.error('The number cannot be negative');
    }
    if (steps === undefined) {
        return console.warn('You did not enter a valid number of steps');
    }
    if (typeof steps !== 'number') {
        return console.error(`The valu ${steps} entered is NOT a number`);
    }
    if (Math.sign(steps) === -1) {
        return console.error('The steps cannot be negative');
    }

    let positionX = Math.floor(large / 2);
    let positionY = Math.floor(large / 2);
    let posBeforeA;
    console.log(direction);
    //build grid
    let arr = new Array(large);

    for (let i = 0; i < large; i++) {
        arr[i] = new Array(large);
        for (let j = 0; j < large; j++) {
            arr[i][j] = 0;
        }
    }
    //Save the initial position
    posBeforeA = arr[positionX][positionY];
    arr[positionX][positionY] = 'a';
    antMoves(arr, steps, direction, positionX, positionY, posBeforeA);
};

startProgram(5, 4, 'U');