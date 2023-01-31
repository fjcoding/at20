

var antUp = 0; //fixed direction value for up
var antR = 1;//fixed direction value for right
var antD = 2;//fixed direction value for down
var antL = 3;//fixed direction value for left

var antDir = antUp;//Default initial direction
var stateCell;//State that will be read when switching positions
var antNdir;

var bSt = '*';
var wSt = '-';

var steps;
//var maxSteps = 11000;

var height = 70;
var width = 70;
var antX = width / 2;//ant's x coordinate subject to change
var antY = height / 2;// //Given a 70x70 canvas, the coordinates start in the middle

var step = 1;
var canvas = [];

export function makeGrid(a, b) {
    var grid = [];
    for (var iMg = 0; iMg < a; iMg++) {
        for (var jMg = 0; jMg < b; jMg++) {
            grid[iMg] = [];
        }
    }
    for (var iMg2 = 0; iMg2 < a; iMg2++) {
        for (var jMg2 = 0; jMg2 < b; jMg2++) {
            grid[iMg2][jMg2] = '-';
        }
    }
    return grid;
}

function displayGrid(gridInt) {
    var display = '';

    var sizeY = gridInt.length;
    for (var rowCount = 0; rowCount < sizeY; rowCount++) {
        var sizeX = gridInt[rowCount].length;
    }
    for (var iDg = 0; iDg < sizeY; iDg++) {
        for (var jDg = 0; jDg < sizeX; jDg++) {
            display += gridInt[iDg][jDg] + ' ';
        }
        display += '\n';
    }
    return display;
}


export function cellState(gridState, cellY, cellX) {
    var state = gridState[cellY][cellX];
    return state;
}

export function direction(state) {
    if (state == wSt) {
        antDir += 1;
        if (antDir > 3) {
            antDir = antUp;
        }

        canvas[antY][antX] = '*';
    } else if (state == bSt) {
        antDir -= 1;
        if (antDir < 0) {
            antDir = antL;
        }

        canvas[antY][antX] = '-';
    }
    return antDir;
}


export function move(dir) {
    if (dir == antUp) {
        antY -= step;
    } else if (dir == antR) {
        antX += step;
    } else if (dir == antD) {
        antY += step;
    } else if (dir == antL) {
        antX -= step;
    }
}


function show(max) {
    canvas = makeGrid(height, width);//for the coordinates, switched coordinates to match the sample canvas

    for (steps = 0; steps <= max; steps++) {
        stateCell = cellState(canvas, antY, antX); //add a line where we can read the state of the cell in the new coordinates after the function move
        antNdir = direction(stateCell);
        move(antNdir);
    }
    console.log(displayGrid(canvas));
}

var maxSteps = process.argv[2];
show(maxSteps);