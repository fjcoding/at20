import { turn } from './langtonsant';
import { changeMap } from './langtonsant';
import { advance } from './langtonsant';
import { ant } from './langtonsant';
import { fullyFunctionallity } from './langtonsant';

test('Function that turns the ant according to the color of its position', () => {
    const black = 1;
    const white = 0;
    //         up = 0;
    //left = 3;        right = 1;
    //         down = 2;
    ant.dir = 0;
    expect(turn(black)).toBe(3);
    ant.dir = 0;
    expect(turn(white)).toBe(1);
    ant.dir = 2;
    expect(turn(black)).toBe(1);
    ant.dir = 2;
    expect(turn(white)).toBe(3);
    ant.dir = 1;
    expect(turn(black)).toBe(0);
    ant.dir = 1;
    expect(turn(white)).toBe(2);
    ant.dir = 3;
    expect(turn(black)).toBe(2);
    ant.dir = 3;
    expect(turn(white)).toBe(0);
});

test('Function that changes the color of the map in ants position', () => {
    const black = 1;
    const white = 0;
    ant.x = 1;
    ant.y = 1;
    let testMap = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    let resultMap = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ];
    expect(changeMap(white, testMap)).toEqual(resultMap);

    ant.x = 1;
    ant.y = 0;
    ant.dir = 0;
    testMap = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
    ];
    resultMap = [
        [1, 0, 1],
        [1, 1, 1],
        [1, 1, 1],
    ];
    expect(changeMap(black, testMap)).toEqual(resultMap);
});

test('Function that advances de position according to the orientation', () => {
//      --------x
//      |
//      |    *
//      y
    ant.dir = 0;
    ant.x = 10;
    ant.y = 10;
    let result = [10, 9];
    expect(advance()).toEqual(result);

    ant.dir = 1;
    ant.x = 10;
    ant.y = 10;
    result = [11, 10];
    expect(advance()).toEqual(result);

    ant.dir = 2;
    ant.x = 10;
    ant.y = 10;
    result = [10, 11];
    expect(advance()).toEqual(result);

    ant.dir = 3;
    ant.x = 10;
    ant.y = 10;
    result = [9, 10];
    expect(advance()).toEqual(result);
});

test('Final functionality from a number of steps, map dimention and ant initial orientation', () => {
    let initDirection = 3;
    let mapDimention = 6;
    let steps = 10;
    let result = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 1, 1, 1, 0],
        [0, 0, 1, 0, 8, 0],
        [0, 0, 0, 0, 0, 0],
    ];
    expect(fullyFunctionallity(steps, mapDimention, initDirection)).toEqual(result);

    initDirection = 0;
    mapDimention = 6;
    steps = 5;
    result = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 8, 0, 1, 0],
        [0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0],
    ];
    expect(fullyFunctionallity(steps, mapDimention, initDirection)).toEqual(result);
});