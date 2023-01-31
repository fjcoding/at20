const mapdim = 6;
let map = new Array(mapdim).fill().map(() => Array(mapdim).fill(0));
let visualmap = map;
const ant = {};

const NORTH = 0;
const EAST = 1;
const SOUTH = 2;
const WEST = 3;

const BLACKcase = 1;
const WHITEcase = 0;

const LEFT = 3;
const RIGHT = 1;

ant.symbol = 8;
ant.x = mapdim / 2;
ant.y = mapdim / 2;
ant.dir = 0;

//WHILE TRUE

visualmap = map;
visualmap[ant.y][ant.x] = ant.symbol;
console.log(visualmap);

let color = map[ant.y][ant.x];
switch (color) {
case WHITEcase:  //BLANCO
    map[ant.y][ant.x] = 1;
    ant.dir = (ant.dir + RIGHT) % 4;
    break;
case BLACKcase:  //NEGRO
    map[ant.y][ant.x] = 0;
    ant.dir = (ant.dir + LEFT) % 4;
    break;
}
switch (ant.dir) {
case NORTH:
    ant.y--;
    break;
case SOUTH:
    ant.y++;
    break;
case EAST:
    ant.x++;
    break;
case WEST:
    ant.x--;
    break;
}

visualmap = map;
visualmap[ant.y][ant.x] = ant.symbol;
console.log(visualmap);