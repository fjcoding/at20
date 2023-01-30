const mapdim = 6;
let map = new Array(mapdim).fill().map(() => Array(mapdim).fill(0));
let visualmap = map;
const ant = {};

const LEFT = 3;
const RIGHT = 1;

ant.symbol = 8;
ant.x = mapdim / 2;
ant.y = mapdim / 2;
ant.dir = 0;

function turn(nextdir) {
    ant.dir = (ant.dir + nextdir) % 4;
}

function advance() {
    switch (ant.dir) {
    case 0:
        ant.y--;
        break;
    case 2:
        ant.y++;
        break;
    case 1:
        ant.x++;
        break;
    case 3:
        ant.x--;
        break;
    }
}

function actualizemap() {
    visualmap = map;
    visualmap[ant.y][ant.x] = ant.symbol;
    console.log(visualmap);
}

//WHILE TRUE
function step() {
    let color = map[ant.y][ant.x];
    //console.log(color);
    switch (color) {
    case 0:  //BLANCO
        map[ant.y][ant.x] = 1;
        turn(RIGHT);
        break;
    case 1:  //NEGRO
        map[ant.y][ant.x] = 0;
        turn(LEFT);
        break;
    }
    advance();
}


actualizemap();
console.log(map);
step();
