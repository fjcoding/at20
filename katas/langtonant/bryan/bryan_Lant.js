

export function makeGrid(aMg, bMg) {
    var grid = [];
    for (var iMg = 0; iMg < aMg; iMg++) {
        for (var jMg = 0; jMg < bMg; jMg++) {
            grid[iMg] = [];
        }
    }
    for (var iMg2 = 0; iMg2 < aMg; iMg2++) {
        for (var jMg2 = 0; jMg2 < bMg; jMg2++) {
            grid[iMg2][jMg2] = '-';
        }
    }
    return grid;
}

export function displayGrid(gridInt) {
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

export function direction(state, antDir) { //check for initial position
    var antUpd = 0; //fixed direction value for up
    var antLd = 3;//fixed direction value for left
    var bStd = '*';//black state
    var wStd = '-';//white state

    if (state == wStd) {
        antDir += 1;
        if (antDir > 3) {
            antDir = antUpd;
        }
    } else if (state == bStd) {
        antDir -= 1;
        if (antDir < 0) {
            antDir = antLd;
        }
    }
    return antDir;
}

export function swState(state) {
    var bStsw = '*';//black state
    var wStsw = '-';//white state
    if (state == wStsw) {
        state = bStsw;
    } else if (state == bStsw) {
        state = wStsw;
    }

    return state;
}

export function move(dir, antYm, antXm) {
    var antUp = 0;
    var antR = 1;
    var antD = 2;
    var antL = 3;

    var step = 1;

    if (dir == antUp) {
        antYm -= step;
    } else if (dir == antR) {
        antXm += step;
    } else if (dir == antD) {
        antYm += step;
    } else if (dir == antL) {
        antXm -= step;
    }
    return [antYm, antXm];
}


export function langtonAnt(max, height, width, inDir) {
    var canvas = [];
    canvas = makeGrid(height, width);
    var nState;
    var stateCell;
    var antYlan = height / 2;
    var antXlan = width / 2;
    var antNdir = inDir;

    for (var steps = 0; steps <= max; steps++) {
        stateCell = cellState(canvas, antYlan, antXlan);
        antNdir = direction(stateCell, antNdir);
        nState = swState(stateCell);
        canvas[antYlan][antXlan] = nState;
        [antYlan, antXlan] = move(antNdir, antYlan, antXlan);
    }
    return displayGrid(canvas);
    //console.log(displayGrid(canvas));
}


// var maxSteps = process.argv[2];
// var hIght = process.argv[3];
// var wDth = process.argv[4];
//  var nDir = 1;
// langtonAnt(maxSteps,hIght,wDth,nDir);
