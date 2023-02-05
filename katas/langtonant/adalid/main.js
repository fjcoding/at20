import { antSteps } from './langtonant.js';

const generateMatriz = (large) => {
    let arr = new Array(large);

    for (let i = 0; i < large; i++) {
        arr[i] = new Array(large);
        for (let j = 0; j < large; j++) {
            arr[i][j] = 0;
        }
    }
    return arr;
};

const startProgram = (large, steps, direction = '') =>{
    if (steps === 0) {
        return null;
    }
    let positionX = Math.floor(large / 2);
    let positionY = Math.floor(large / 2);
    let currentPos;
    let arr = generateMatriz(large);
    currentPos = arr[positionX][positionY];
    const result = antSteps(steps, arr, direction, positionX, positionY, currentPos);
    return result;
};
export {startProgram, generateMatriz};
startProgram(5, 5, 'U');