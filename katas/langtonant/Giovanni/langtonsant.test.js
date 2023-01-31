import { turn } from './langtonsant';
//import { advance } from './langtonsant';
import { ant } from './langtonsant';

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

//test('Function that advances de position according to the orientation', () => {
//      --------x
//      |
//      |    *
//      y
//ant.dir = 0;
//ant.x = 10;
//ant.y = 10;
//expect(advance()).arrayContaining([10, 9]);
//});