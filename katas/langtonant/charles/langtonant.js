const arg1 = process.argv[2];//N dimension grid
const arg2 = process.argv[3];//N steps

const UP = '▲';
const DOWN = '▼';
const RIGHT = '►';
const LEFT = '◄';
const WHITE = ' ';
const BLACK = '■';
let INITIALPOSITION;

function createGrid(dimension) {
    let grid = new Array(dimension);
    for (let rowIndex = 0; rowIndex < dimension; rowIndex++) {
        grid[rowIndex] = new Array(dimension);
        for (let colIndex = 0; colIndex < dimension; colIndex++) {
            grid[rowIndex][colIndex] = {
                valueBox: WHITE,
                isPaintedNextPosition: false
            };
        }
    }
    return grid;
}

function initialPositionDirection(grid, directionStep) {
    const dimension = grid.length;
    INITIALPOSITION = dimension % 2 == 0 ? (dimension) / 2 - 1 : (dimension) / 2 - 0.5;
    grid[INITIALPOSITION][INITIALPOSITION].valueBox = directionStep;
    return grid;
}

function nextPosition(grid, rowPosition, colPosition) {
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
    return {
        rowIndex,
        colIndex,
        newDirection
    };
}

function updateValues(grid, rowPosition, colPosition, newPosition) {
    rowPosition += newPosition.rowIndex;
    colPosition += newPosition.colIndex;
    grid[rowPosition][colPosition] = verifyPainted(grid[rowPosition][colPosition]);
    grid[rowPosition][colPosition].valueBox = newPosition.newDirection;
    return { grid, rowPosition, colPosition };
}

function verifyPainted(nextPosition) {
    if (nextPosition.valueBox == BLACK) {
        nextPosition.isPaintedNextPosition = true;
    } else {
        nextPosition.isPaintedNextPosition = false;
    }
    return nextPosition;
}

function changeColor(currentPosition) {
    if (!currentPosition.isPaintedNextPosition) {
        currentPosition.valueBox = BLACK;
    } else {
        currentPosition.valueBox = WHITE;
    }
    return currentPosition;
}

function showGrid(grid) {
    let displayContent = '';
    for (let indexR = 0; indexR < grid.length; indexR++) {
        for (let indexC = 0; indexC < grid[indexR].length; indexC++) {
            displayContent += grid[indexR][indexC].valueBox + ' ';
        }
        displayContent += '\n';
    }
    return displayContent;
}

let grid = createGrid(arg1);
grid = initialPositionDirection(grid, UP);
let rowPosition = INITIALPOSITION;
let colPosition = INITIALPOSITION;

for (let index = 0; index < arg2; index++) {
    let newPosition = nextPosition(grid, rowPosition, colPosition);
    grid[rowPosition][colPosition] = changeColor(grid[rowPosition][colPosition]);
    let gridUpdated = updateValues(grid, rowPosition, colPosition, newPosition);
    grid = gridUpdated.grid;
    rowPosition = gridUpdated.rowPosition;
    colPosition = gridUpdated.colPosition;
}

console.log(showGrid(grid));