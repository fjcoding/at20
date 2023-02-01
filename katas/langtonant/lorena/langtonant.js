//lANGTON'S ANT//

// import { gridInit } from './InitParam';
// import { positInit } from './InitParam';
// import { colorBox } from './ActionAnt';
// import { newOri } from './ActionAnt';
// import { mov } from './ActionAnt';

//Funtion for Ant´s Eviornment.
function gridInit (len, wid) {
    var gridInit = new Array;
    for (let i = 0; i < len; i++) {
        gridInit[i] = new Array();
        for (let j = 0; j < wid; j++) {
            gridInit[i][j] = 0;
        }
    }
    return gridInit;
}

//Funtion for Ant´s Initial Position (Random)
function positInit(len, wid) {
    var positInit = new Array;
    var xInit = Math.floor(Math.random() * ((wid) - 0) + 0);     // x initial position random
    var yInit = Math.floor(Math.random() * ((len) - 0) + 0);     // y initial position random
    var oriInit = Math.floor(Math.random() * ((4) - 0) + 0);     // Ant´s initial orientation Up=0, Right=1, Down=2, Left=3
    positInit = new Array(xInit, yInit, oriInit);
    return positInit;
}

// Box color of grid
function colorBox (x, y, colorAct) {
    var color = 0;
    if (colorAct == 0) {
        color = 1;
    } else {
        color = 0;
    }
    return color;
}

// Ant´s Orientation
function newOri (x, y, ori, colorAct) {
    var newOri = 0;
    if (colorAct == 0) {
        newOri = (ori + 1) % 4;
    } else {
        newOri = (ori + 3) % 4;
    }
    return newOri;
}

//Funtion: Ant´s displacement
function mov (x, y, ori, wid, len) {
    var newPositAnt = new Array();
    if (ori == 0 && y != 0) {
        y = y - 1;
    } else if (ori == 1 && x != (wid - 1)) {
        x = x + 1;
    } else if (ori == 2 && y != (len - 1)) {
        y = y + 1;
    } else if (ori == 3 && x != 0) {
        x = x - 1;
    } else {
        ori = (ori + 2) % 4;           //If the ant is on the limit, turn 180° ???
    }
    newPositAnt = new Array (x, y, ori);
    return newPositAnt;
}

// Initial Conditions
let len = 6;        // Grid´s lenght
let wid = 6;        // Grid's Width
let steps = 3;      // Times for tracking

//Start
var grid = gridInit (len, wid);
var positAnt = positInit (len, wid);            // first box position
var x = positAnt[0];
var y = positAnt[1];
var ori = positAnt[2];

while (steps > 0) {
    ori = newOri(x, y, ori, colorAct);
    var colorAct = grid[y][x];                  // Actual box color, white 0, black=1
    var color = colorBox(x, y, colorAct);
    grid[y][x] = color;
    positAnt = mov(x, y, ori);
    x = positAnt[0];
    y = positAnt[1];
    steps--;
}

console.log(grid);