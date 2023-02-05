import { createGrid } from './langtonant';
import { initialPosition } from './langtonant';
import { nextPosition } from './langtonant';
import { updateValues } from './langtonant';
import { verifyPainted } from './langtonant';
import { changeColor } from './langtonant';
import { antPath } from './langtonant';

test('Function that creates the grid with dimension N', () => {
    let dimension = 5;
    let grid = Array(dimension);
    for (let row = 0; row < dimension; row++) {
        grid[row] = new Array(dimension);
        for (let col = 0; col < dimension; col++) {
            grid[row][col] = { valueBox: ' ', isPaintedNextPosition: false, };
        }
    }
    expect(createGrid(dimension)).toStrictEqual(grid);

    dimension = 20;
    grid = Array(dimension);
    for (let row = 0; row < dimension; row++) {
        grid[row] = new Array(dimension);
        for (let col = 0; col < dimension; col++) {
            grid[row][col] = { valueBox: ' ', isPaintedNextPosition: false, };
        }
    }
    expect(createGrid(dimension)).toStrictEqual(grid);

    dimension = 25;
    grid = Array(dimension);
    for (let row = 0; row < dimension; row++) {
        grid[row] = new Array(dimension);
        for (let col = 0; col < dimension; col++) {
            grid[row][col] = { valueBox: ' ', isPaintedNextPosition: false, };
        }
    }
    expect(createGrid(dimension)).toStrictEqual(grid);
});

test('Function that return the initial position', () => {
    expect(initialPosition(10)).toBe(4);
    expect(initialPosition(20)).toBe(9);
    expect(initialPosition(35)).toBe(17);
});

test('Function that return the next position and its direction', () => {
    let dimension = 10;
    let initialPos = 3;
    let grid = new Array(dimension);
    for (let row = 0; row < dimension; row++) {
        grid[row] = new Array(dimension);
        for (let col = 0; col < dimension; col++) {
            let direction = { valueBox: row == initialPos && col == initialPos ? '▲' : ' ', isPaintedNextPosition: false };
            grid[row][col] = direction;
        }
    }
    let response = { rowIndex: -1, colIndex: 0, newDirection: '►' };
    expect(nextPosition(grid, 3, 3)).toStrictEqual(response);

    let defaulValue = { valueBox: ' ', isPaintedNextPosition: false };
    grid = [
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, { valueBox: '■', isPaintedNextPosition: true }, { valueBox: '▼', isPaintedNextPosition: false }, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, { valueBox: '■', isPaintedNextPosition: true }, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue]
    ];
    response = { rowIndex: 1, colIndex: 0, newDirection: '◄' };
    expect(nextPosition(grid, 3, 5)).toStrictEqual(response);

    grid = [
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, { valueBox: '■', isPaintedNextPosition: true }, { valueBox: '■', isPaintedNextPosition: true }, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, { valueBox: '■', isPaintedNextPosition: true }, { valueBox: '◄', isPaintedNextPosition: false }, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue]
    ];
    response = { rowIndex: 0, colIndex: -1, newDirection: '▼' };
    expect(nextPosition(grid, 4, 5)).toStrictEqual(response);
});

test('Function that updated the next direction and verify if the next position is black or white color in the grid', () => {
    let dimension = 10;
    let initialPos = 3;
    let grid = new Array(dimension);
    for (let row = 0; row < dimension; row++) {
        grid[row] = new Array(dimension);
        for (let col = 0; col < dimension; col++) {
            let direction = { valueBox: row == initialPos && col == initialPos ? '▲' : ' ', isPaintedNextPosition: false };
            grid[row][col] = direction;
        }
    }
    let newPosition = { rowIndex: -1, colIndex: 0, newDirection: '►' };
    grid[initialPos][initialPos] = { valueBox: '■', isPaintedNextPosition: true, };
    grid[initialPos + newPosition.rowIndex][initialPos] = { valueBox: newPosition.newDirection, isPaintedNextPosition: false, };
    let response = { grid, rowPosition: 2, colPosition: 3 };
    expect(updateValues(grid, 3, 3, newPosition)).toStrictEqual(response);

    let defaulValue = { valueBox: ' ', isPaintedNextPosition: false };
    grid = [
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, { valueBox: '■', isPaintedNextPosition: true }, { valueBox: '■', isPaintedNextPosition: true }, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, { valueBox: '■', isPaintedNextPosition: true }, { valueBox: '◄', isPaintedNextPosition: false }, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue]
    ];
    newPosition = { rowIndex: -1, colIndex: 0, newDirection: '◄' };
    response = { grid, rowPosition: 3, colPosition: 5 };
    expect(updateValues(grid, 4, 5, newPosition)).toStrictEqual(response);
});

test('Function that verify if current position is black or white color in the grid', () => {
    expect(verifyPainted({ valueBox: '■', isPaintedNextPosition: false })).toStrictEqual({ valueBox: '■', isPaintedNextPosition: true });
    expect(verifyPainted({ valueBox: ' ', isPaintedNextPosition: false })).toStrictEqual({ valueBox: ' ', isPaintedNextPosition: false });
});

test('Function that change color of the current position', () => {
    expect(changeColor({ valueBox: '■', isPaintedNextPosition: true })).toStrictEqual({ valueBox: ' ', isPaintedNextPosition: true });
    expect(changeColor({ valueBox: ' ', isPaintedNextPosition: false })).toStrictEqual({ valueBox: '■', isPaintedNextPosition: false });
});

test('Function that show last state of grid', () => {
    let defaulValue = { valueBox: ' ', isPaintedNextPosition: false };
    let gridFinal = [
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, { valueBox: '■', isPaintedNextPosition: false }, { valueBox: '■', isPaintedNextPosition: false }, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, { valueBox: '■', isPaintedNextPosition: false }, { valueBox: '■', isPaintedNextPosition: false }, { valueBox: '■', isPaintedNextPosition: false }, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, { valueBox: '■', isPaintedNextPosition: false }, { valueBox: ' ', isPaintedNextPosition: true }, { valueBox: '▼', isPaintedNextPosition: false }, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue]
    ];
    expect(antPath(10, 10)).toStrictEqual(gridFinal);

    gridFinal = [
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, { valueBox: '■', isPaintedNextPosition: false }, { valueBox: '■', isPaintedNextPosition: false }, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, { valueBox: '■', isPaintedNextPosition: false }, { valueBox: '■', isPaintedNextPosition: false }, { valueBox: '■', isPaintedNextPosition: false }, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, { valueBox: '■', isPaintedNextPosition: false }, { valueBox: '►', isPaintedNextPosition: true }, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue],
        [defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue, defaulValue]
    ];
    expect(antPath(10, 9)).toStrictEqual(gridFinal);
});