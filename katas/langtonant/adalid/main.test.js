import { startProgram, generateMatriz } from './main';
import {positionInGrid, antSteps} from './langtonant';

const commonMatriz = generateMatriz(5);
const smallMatriz = generateMatriz(3);

test ('startProgram should generate the next results with large: 3, steps:2, direction: UP', () => {
    const result = startProgram(3, 2, 'U');
    expect(result).toEqual({ currentPos: 0, direction: 'D', matriz: [[0, 0, 0], [0, 0, 0], [0, 0, 0]], posX: 2, posY: 0});
});

test ('antSteps should generate the next results with this data steps:2, matriz=large: 3, x:1, y:1', () => {
    const steps = 2;
    const matriz = smallMatriz;
    const direction = 'U';
    const posX = 1;
    const posY = 1;
    const currentPos = 0;
    const result = antSteps(steps, matriz, direction, posX, posY, currentPos);
    expect(result).toEqual({
        matriz: [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ],
        direction: 'D',
        posX: 2,
        posY: 0,
        currentPos: 0
    });
});

test ('generateMatriz function should generate a matriz of 2 when large is 2', () => {
    const large = 2;
    const result = generateMatriz(large);
    expect(result).toEqual([[ 0, 0 ], [0, 0]]);
});

test ('positionInGrid function should return a next object positions when recieves a x: 2, y:3 , direction: UP', () => {
    const payload = {
        direction: 'U',
        currentPos: 1, posX: 2, posY: 3, matriz: commonMatriz
    };
    const result = positionInGrid(payload);
    expect(result).toEqual({ posX: 2, posY: 4, direction: 'R' });
});
