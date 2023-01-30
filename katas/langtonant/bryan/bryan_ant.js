

var antUp = 0; //fixed direction value for up
var antR = 1;//fixed direction value for right
var antD = 2;//fixed direction value for down
var antL = 3;//fixed direction value for left

var antDir = antUp;//Default initial direction
var stateCell;//State that will be read when switching positions

//var state;//current state in which the ant is in
var bSt = 0;
var wSt = 255;

//var nSteps;
var steps;
var maxSteps = 12000;

var height = 3000;
var width = 3000;
var antX = width / 2;//ant's x coordinate Given a 2000x2000 canvas, the coordinates start in the middle, subject to change
var antY = height / 2;// //Given a 2000x2000 canvas, the coordinates start in the middle

var document;//Just for now
var can = document.getElementById('myCanvas');
var canOb = can.getContext('2d');//Create a two dimensional object to represent the canvas

var pixelSize = 20; //
canOb.font = '20px Georgia';// Ant's size will be 10 pixels and the font georgia

var dark = 'black';
var light = 'white';

canOb.fillStyle = light; //Create a white grid the same size of the canvas
canOb.fillRect(0, 0, width, height);//Place the grid on the canvas


function direction(state) {
    // console.log("state cell: " )
    // console.log(state.data[0])
    if (state.data[0] == wSt && state.data[1] == wSt && state.data[2] == wSt) {
        antDir += 1;
        if (antDir > 3) {
            antDir = antUp;
        }

        canOb.fillStyle = dark;
        canOb.fillRect(antX, antY, pixelSize, pixelSize);//Turn the cell black

        //state = b_st; //Add a line which changes or takes the state value and turns the cell black
    } else if (state.data[0] == bSt && state.data[1] == bSt && state.data[2] == bSt) {
        antDir -= 1; //
        if (antDir < 0) {
            antDir = antL;
        }

        canOb.fillStyle = light;
        canOb.fillRect(antX, antY, pixelSize, pixelSize);//Turn the cell white
        // state = w_st; //Add a line which changes or takes the state value and turns the cell white
    }

    // console.log("Direction: " )
    // console.log(ant_dir)
}

function move(dir) {
    if (dir == antUp) {
        // antX = antX;//the values are subject to the corrdinate system
        antY -= pixelSize;
    } else if (dir == antR) {
        antX += pixelSize;
        // antY = antY;
    } else if (dir == antD) {
        //antX = antX;
        antY += pixelSize;
    } else if (dir == antL) {
        antX -= pixelSize;
        //antY = antY;
    }

    // console.log("Coordinates x y: ");
    // console.log(ant_x,ant_y);
}


// function begin(){


//  stateCell = canOb.getImageData(ant, antY, 1, 1);
//  //add a line where we can read the state of the cell in the new coordinates after the function move
//  direction(stateCell);
//  move(antDir);
// //  console.log("Step: ");
// //  console.log(steps);
// //  console.log("---------------");
// // }
// }
// setInterval(begin, 0.001);


for (steps = 0; steps <= maxSteps; steps++) {
    stateCell = canOb.getImageData(antX, antY, 1, 1);
    //add a line where we can read the state of the cell in the new coordinates after the function move
    direction(stateCell);
    move(antDir);
    //  console.log("Step: ");
    //  console.log(steps);
    //  console.log("---------------");
}

