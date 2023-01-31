
// Grid and directions values and color values
var grid = new Array();
var lenght = 5;
var width = 5;
var right = 0;
var left = 1;
var up = 2;
var down = 3;
var white = 0;
var black = 1;
var color;
for (let i = 0; i < lenght; i++) {
    grid[i] = new Array();
    for (let j = 0; j < width; j++) {
        grid[i][j] = 0;
    }
    //  console.log(grid[i]);
}
// ant start position

let x = 2;     // start position
let y = 2;   // start position
let Direction = up;      // Ant´s orientation
color = white;
var movent = new Array(color, Direction);

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
    var move;
    //white slate movements
    if (color == white) {
        if (Direction == right) {
            grid[x][y]=black;
            Direction = up;
        } else if (Direction == left) {
            grid[x][y]=black;
            Direction = down;
        } else if (Direction == up) {
            grid[x][y]=black;
            Direction = left;
        } else if (Direction == down) {
            grid[x][y]=black;
            Direction = right;
        }
    }
    //black slates movements
    if (color == black) {
        if (Direction == right) {
            grid[x][y]=white;
            Direction = down;
        } else if (Direction == left) {
            grid[x][y]=white;
            Direction = up;
        } else if (Direction == up) {
            grid[x][y]=white;
            Direction = right;
        } else if (Direction == down) {
            grid[x][y]=white;
            Direction = left;
        }
    }


    return Direction;
}



function newMovement(x,y,Direction) {      ///obtaining movement
var move;
    if(Direction==right) {
        x++;
    }
    if(Direction==left) {
        x--;
    }
    if(Direction==up) {
        y--;
    }
    if(Direction==down) {
        y++;
    }
    move = new Array (x, y);
    return(move);
}


var newDirection;
var steps = 10;
var newMovements;                    // Number of steps that need tracking right 0 left 1 up 2 down 3
while (steps > 0) {
    // Ant´s  movements
    newDirection = movements(color, Direction); // new direction
    Direction = newDirection;
    newMovements=newMovement(x,y,Direction)
    x = newMovements[0];
    y = newMovements[1];
    color = color_(x, y);              //color_ function
    console.log (grid);
    console.log(newMovements);
    console.log(newDirection);
    steps--;
    //if x,y doesnt have space
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
}
