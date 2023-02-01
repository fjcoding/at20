// Grid and directions values and color values
let grid = new Array();
let lenght = 5;
let width = 5;
const right = 0;
const left = 1;
const up = 2;
const down = 3;
const white = 0;
const black = 1;
let color;
var verifyMoveXY;
var newDirection;
var newMovements;
// ant start position

let x = 2;     // start position
let y = 2;   // start position
let Direction = up;      // Ant´s orientation
color = white;

for (let i = 0; i < lenght; i++) {
    grid[i] = new Array();
    for (let j = 0; j < width; j++) {
        grid[i][j] = 0;
    }
}

function color_(x, y) {      // obtaining color
    var color;
    if (grid[x][y] == white) {
        color = white;
    }
    if (grid[x][y] == black) {
        color = black;
    }
    return color;
}

export function movements(color, Direction) {      ///obtaining direction
    //white slate movements
    if (color == white) {
        if (Direction == right) {
            grid[x][y] = black;
            Direction = up;
        } else if (Direction == left) {
            grid[x][y] = black;
            Direction = down;
        } else if (Direction == up) {
            grid[x][y] = black;
            Direction = left;
        } else if (Direction == down) {
            grid[x][y] = black;
            Direction = right;
        }
    }
    //black slates movements
    if (color == black) {
        if (Direction == right) {
            grid[x][y] = white;
            Direction = down;
        } else if (Direction == left) {
            grid[x][y] = white;
            Direction = up;
        } else if (Direction == up) {
            grid[x][y] = white;
            Direction = right;
        } else if (Direction == down) {
            grid[x][y] = white;
            Direction = left;
        }
    }
    return Direction;
}


export function newMovement(x, y, Direction) {      ///obtaining movement
    var move;

    if (Direction == right) {
        x++;
    }
    if (Direction == left) {
        x--;
    }
    if (Direction == up) {
        y--;
    }
    if (Direction == down) {
        y++;
    }
    move = [x, y];

    return (move);
}


export function verifyMove(x, y) {    //if x,y doesnt have space
    var verifyMove;
    if (x < 0) { //what happens when x doesnt have more space
        x = width - 1;
    }
    if (x > width - 1) {
        x = 0;
    }
    if (y < 0) { //what happens when y doesnt have more space
        y = lenght - 1;
    }
    if (y > lenght - 1) {
        y = 0;
    }
    verifyMove = [x, y];
    return verifyMove;
}


function antMoving() {
    // Ant´s  movements
    newDirection = movements(color, Direction); // new direction
    Direction = newDirection;
    newMovements = newMovement(x, y, Direction);
    x = newMovements[0];
    y = newMovements[1];
    color = color_(x, y);              //color_ function
    verifyMoveXY = verifyMove(x, y);
    x = verifyMoveXY[0];
    y = verifyMoveXY[1];
}

var steps = 20;      // Number of steps that need tracking right 0 left 1 up 2 down 3
for (let i = 0; i < steps; i++) {
    antMoving();
}