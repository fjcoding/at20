const arg1 = process.argv[2];//N dimension grid
const arg2 = process.argv[3];//N steps

let gridArray = new Array(arg1);
let rowPositionStep;
let columnPositionStep;
let pointer;
let isPainted = false;
let startPosition;

const directionRight = '[r]';
const directionLeft = '[l]';
const directionUp = '[u]';
const directionDown = '[d]';

const startStepDirection = directionUp;

function createGrid() {
    startPosition = arg1 % 2 == 0 ? (arg1) / 2 - 1 : (arg1) / 2 - 0.5;
    for (let indexRow = 0; indexRow < arg1; indexRow++) {
        gridArray[indexRow] = new Array(arg1);
        for (let indexColumn = 0; indexColumn < arg1; indexColumn++) {
            gridArray[indexRow][indexColumn] = (indexRow == startPosition && indexColumn == startPosition) ? startStepDirection : '   ';
        }
    }
}

function directionNextStep(rowPosition, columnPosition) {
    switch (gridArray[rowPosition][columnPosition]) {
    case directionUp:
        pointer = rowPosition - 1;
        gridArray[rowPosition][columnPosition] = !isPainted ? '[o]' : '   ';
        isPainted = gridArray[pointer][columnPosition] == '   ' ? false : true;
        gridArray[pointer][columnPosition] = gridArray[pointer][columnPosition] == '   ' ? directionRight : directionLeft;
        rowPositionStep = pointer;
        break;
    case directionDown:
        pointer = rowPosition + 1;
        gridArray[rowPosition][columnPosition] = !isPainted ? '[o]' : '   ';
        isPainted = gridArray[pointer][columnPosition] == '   ' ? false : true;
        gridArray[pointer][columnPosition] = gridArray[pointer][columnPosition] == '   ' ? directionLeft : directionRight;
        rowPositionStep = pointer;
        break;
    case directionRight:
        pointer = columnPosition + 1;
        gridArray[rowPosition][columnPosition] = !isPainted ? '[o]' : '   ';
        isPainted = gridArray[rowPosition][pointer] == '   ' ? false : true;
        gridArray[rowPosition][pointer] = gridArray[rowPosition][pointer] == '   ' ? directionDown : directionUp;
        columnPositionStep = pointer;
        break;
    case directionLeft:
        pointer = columnPosition - 1;
        gridArray[rowPosition][columnPosition] = !isPainted ? '[o]' : '   ';
        isPainted = gridArray[rowPosition][pointer] == '   ' ? false : true;
        gridArray[rowPosition][pointer] = gridArray[rowPosition][pointer] == '   ' ? directionUp : directionDown;
        columnPositionStep = pointer;
        break;
    }
}

function showGrid() {
    for (let indexRow = 0; indexRow < arg1; indexRow++) {
        let rowContent = '';
        for (let indexColumn = 0; indexColumn < arg1; indexColumn++) {
            rowContent += gridArray[indexRow][indexColumn] + '';
        }
        console.log(rowContent);
    }
}

function main() {
    createGrid();
    const steps = arg2;
    rowPositionStep = startPosition;
    columnPositionStep = startPosition;
    for (let index = 0; index < steps; index++) {
        directionNextStep(rowPositionStep, columnPositionStep);
    }
    showGrid();
}

main();