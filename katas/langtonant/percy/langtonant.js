// Grid and directions values and color values
var grid = new Array();
var lenght = 6;
var width = 6;
var right = 0;
var left = 1;
var up = 2;
var down = 3;
var white = 0;
var black = 1;
for (let i = 0; i < lenght; i++) {
    grid[i] = new Array();
    for (let j = 0; j < width; j++) {
        grid[i][j] = 0;
    }
    //  console.log(grid[i]);
}
// ant start position

var x = 2;     // start position
var y = 2;   // start position
var Direction = right;      // Ant´s orientation

var movent = new Array(x, y, Direction);


function movements(x, y, Direction) {
    var move;
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
    //white slate movements
    if (grid[x][y] == white) {
        if (Direction == right) {
            grid[x][y] = black;
            x++;
            Direction = up;
        } else if (Direction == left) {
            grid[x][y] = black;
            x--;
            Direction = down;
        } else if (Direction == up) {
            grid[x][y] = black;
            y--;
            Direction = left;
        } else if (Direction == down) {
            grid[x][y] = black;
            y++;
            Direction = right;
        }
    }
    //black slates movements
    if (grid[x][y] == black) {
        if (Direction == right) {
            grid[x][y] = white;
            x++;
            Direction = down;
        } else if (Direction == left) {
            grid[x][y] = white;
            x--;
            Direction = up;
        } else if (Direction == up) {
            grid[x][y] = white;
            y--;
            Direction = right;
        } else if (Direction == down) {
            grid[x][y] = white;
            y++;
            Direction = left;
        }
    }

    move = new Array (x, y, Direction);
    // console.log(move)
    return move;
}


var steps = 16;                        // Number of steps that need tracking

while (steps > 0) {
    // Ant´s  movements

    movent = movements(x, y, Direction);
    x = movent[0];
    y = movent[1];
    Direction = movent[2];
    console.log (grid);
    console.log(movent);
    steps--;
}
