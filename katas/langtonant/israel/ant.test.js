import { ant } from './ant';

// test newDirection black color cell
test('test for newDirection Method with black color cell and all possible direction', () => {
    let ant1 =  new ant([2, 2], 'up');

    expect(ant1.newDirection('up', 'black')).toBe('left');
    expect(ant1.newDirection('down', 'black')).toBe('right');
    expect(ant1.newDirection('left', 'black')).toBe('down');
    expect(ant1.newDirection('right', 'black')).toBe('up');
});

// test newDirection white color cell
test('test for newDirection Method with white color cell and all possible direction', () => {
    let ant1 =  new ant([2, 2], 'up');

    expect(ant1.newDirection('up', 'white')).toBe('right');
    expect(ant1.newDirection('down', 'white')).toBe('left');
    expect(ant1.newDirection('left', 'white')).toBe('up');
    expect(ant1.newDirection('right', 'white')).toBe('down');
});


// test newPosition
test('test for newPosition Method with initial position [2,2] and all direction', () => {
    let ant1 =  new ant([2, 2], 'up');

    expect(ant1.newPosition('up', [2, 2])).toStrictEqual([2, 1]);
    expect(ant1.newPosition('down', [2, 2])).toStrictEqual([2, 3]);
    expect(ant1.newPosition('left', [2, 2])).toStrictEqual([1, 2]);
    expect(ant1.newPosition('right', [2, 2])).toStrictEqual([3, 2]);
});

//test method move

test('test for move Method with [2,2] position and black color cell', () => {
    let ant1 =  new ant([2, 2], 'up');
    ant1.move('black');
    expect(ant1.positionAnt).toStrictEqual([1, 2]);
    ant1.move('black');
    expect(ant1.positionAnt).toStrictEqual([1, 3]);
    ant1.move('black');
    expect(ant1.positionAnt).toStrictEqual([2, 3]);
});