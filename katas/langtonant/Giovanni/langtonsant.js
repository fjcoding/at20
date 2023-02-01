export const mapDim = 6;
export const ant = {};

const steps = 10;
const up = 0;
const right = 1;
const down = 2;
const left = 3;

const black = 1;
const white = 0;

const turnLeft = 3;
const turnRight = 1;
ant.symbol = 8;

export function turn(color) {
    switch (color) {
    case white:
        ant.dir = (ant.dir + turnRight) % 4;
        break;
    case black:
        ant.dir = (ant.dir + turnLeft) % 4;
        break;
    }
    return (ant.dir);
}

export function changeMap(color, map) {
    switch (color) {
    case white:
        map[ant.y][ant.x] = black;
        break;
    case black:
        map[ant.y][ant.x] = white;
        break;
    }
    return (map);
}


export function advance() {
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
    const array = [ant.x, ant.y];
    return (array);
}

export function fullyFunctionallity(steps, mapDim, dir) {
    let map = new Array(mapDim).fill().map(() => Array(mapDim).fill(0));
    ant.x = mapDim / 2;
    ant.y = mapDim / 2;
    ant.dir = dir;
    for (let iterations = 0; iterations < steps; iterations++) {
        let color = map[ant.y][ant.x];
        map[ant.y][ant.x] = ant.symbol;

        turn(color);
        changeMap(color, map);
        advance();
    }
    map[ant.y][ant.x] = ant.symbol;
    return (map);
}


fullyFunctionallity(steps, mapDim, left);
