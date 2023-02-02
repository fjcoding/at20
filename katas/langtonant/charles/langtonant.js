const arg1 = 10;//process.argv[2];//N dimension grid
const arg2 = 10;//process.argv[3];//N steps

const UP = '▲';
const DOWN = '▼';
const RIGHT = '►';
const LEFT = '◄';
const WHITE = ' ';
const BLACK = '■';

export function createGrid(dimension) {
    let grid = new Array(dimension);
    for (let rowIndex = 0; rowIndex < dimension; rowIndex++) {
        grid[rowIndex] = new Array(dimension);
        for (let colIndex = 0; colIndex < dimension; colIndex++) {
            grid[rowIndex][colIndex] = { valueBox: WHITE, isPaintedNextPosition: false };
        }
    }
    return grid;
}

export function initialPosition(dimension) {
    let initialPos = dimension % 2 == 0 ? (dimension) / 2 - 1 : (dimension) / 2 - 0.5;
    return initialPos;
}

export function nextPosition(grid, rowPosition, colPosition) {
    let rowIndex = 0;
    let colIndex = 0;
    let newDirection;
    switch (grid[rowPosition][colPosition].valueBox) {
    case UP:
        rowIndex--;
        newDirection = !verifyPainted(grid[rowPosition + rowIndex][colPosition + colIndex]).isPaintedNextPosition ? RIGHT : LEFT;
        break;
    case DOWN:
        rowIndex++;
        newDirection = !verifyPainted(grid[rowPosition + rowIndex][colPosition + colIndex]).isPaintedNextPosition ? LEFT : RIGHT;
        break;
    case RIGHT:
        colIndex++;
        newDirection = !verifyPainted(grid[rowPosition + rowIndex][colPosition + colIndex]).isPaintedNextPosition ? DOWN : UP;
        break;
    case LEFT:
        colIndex--;
        newDirection = !verifyPainted(grid[rowPosition + rowIndex][colPosition + colIndex]).isPaintedNextPosition ? UP : DOWN;
        break;
    }
    return { rowIndex, colIndex, newDirection };
}

export function updateValues(grid, rowPosition, colPosition, newPosition) {
    rowPosition += newPosition.rowIndex;
    colPosition += newPosition.colIndex;
    grid[rowPosition][colPosition] = verifyPainted(grid[rowPosition][colPosition]);
    grid[rowPosition][colPosition].valueBox = newPosition.newDirection;
    return { grid, rowPosition, colPosition };
}

export function verifyPainted(nextPosition) {
    if (nextPosition.valueBox == BLACK) {
        nextPosition.isPaintedNextPosition = true;
    } else {
        nextPosition.isPaintedNextPosition = false;
    }
    return nextPosition;
}

export function changeColor(currentPosition) {
    if (!currentPosition.isPaintedNextPosition) {
        currentPosition.valueBox = BLACK;
    } else {
        currentPosition.valueBox = WHITE;
    }
    return currentPosition;
}

// function showGrid(grid) {
//     let displayContent = '';
//     for (let indexR = 0; indexR < grid.length; indexR++) {
//         for (let indexC = 0; indexC < grid[indexR].length; indexC++) {
//             displayContent += grid[indexR][indexC].valueBox + ' ';
//         }
//         displayContent += '\n';
//     }
//     console.log(displayContent);
// }

export function antPath(arg1, arg2) {
    let grid = createGrid(arg1);
    let rowPosition = initialPosition(arg1);
    let colPosition = initialPosition(arg1);
    let valueInitial = {valueBox: UP, isPaintedNextPosition: false };
    grid[rowPosition][colPosition] = valueInitial;
    for (let index = 0; index < arg2; index++) {
        let newPosition = nextPosition(grid, rowPosition, colPosition);
        grid[rowPosition][colPosition] = changeColor(grid[rowPosition][colPosition]);
        let gridUpdated = updateValues(grid, rowPosition, colPosition, newPosition);
        grid = gridUpdated.grid;
        rowPosition = gridUpdated.rowPosition;
        colPosition = gridUpdated.colPosition;
    }
    return grid;
}

antPath(arg1, arg2);
// showGrid(antPath(arg1, arg2));