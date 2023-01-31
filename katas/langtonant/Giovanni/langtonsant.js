const mapDim = 6;

let map = new Array(mapDim).fill().map(() => Array(mapDim).fill(0));

const ant = {};

const up = 0;
const right = 1;
const down = 2;
const left = 3;

const black = 1;
const white = 0;

const turnLeft = 3;
const turnRight = 1;

ant.symbol = 8;
ant.x = mapDim / 2;
ant.y = mapDim / 2;
ant.dir = 3;

for (let iterations = 0; iterations < 10; iterations++) {
    let color = map[ant.y][ant.x];
    map[ant.y][ant.x] = ant.symbol;
    console.log(map);

    switch (color) {
    case white:
        map[ant.y][ant.x] = 1;
        ant.dir = (ant.dir + turnRight) % 4;
        map[ant.y][ant.x] = black;
        break;
    case black:
        map[ant.y][ant.x] = 0;
        ant.dir = (ant.dir + turnLeft) % 4;
        map[ant.y][ant.x] = white;
        break;
    }

    switch (ant.dir) {
    case up:
        ant.y--;
        break;
    case down:
        ant.y++;
        break;
    case right:
        ant.x++;
        break;
    case left:
        ant.x--;
        break;
    }
}
map[ant.y][ant.x] = ant.symbol;
console.log(map);