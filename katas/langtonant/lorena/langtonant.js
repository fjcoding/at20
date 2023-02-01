//lANGTON'S ANT//

import { gridInit } from './InitParam.js';
import { posAndOriInit } from './InitParam.js';
import { switchColorBox } from './ActionAnt.js';
import { newOri } from './ActionAnt.js';
import { mov } from './ActionAnt.js';


// Initial Conditions
let len = 6;                          // Grid´s lenght
let wid = 6;                          // Grid's Width
let steps = 5;                       // Times for tracking
let white = 0;
let black = 1;
var colorGridInit = white;           //white or black

//Start
var grid = gridInit (len, wid, colorGridInit);
var positAnt = posAndOriInit (len, wid);            // first box position
var x = positAnt[0];
var y = positAnt[1];
var ori = positAnt[2];

while (steps > 0 && (colorGridInit == white || colorGridInit == black)) {
    ori = newOri(ori, colorAct);
    var colorAct = grid[y][x];                  // Actual box color, white 0, black=1
    var color = switchColorBox(colorAct);
    grid[y][x] = color;
    positAnt = mov(x, y, ori);
    x = positAnt[0];
    y = positAnt[1];
    steps--;
}

console.log(grid);