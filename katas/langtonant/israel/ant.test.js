import { ant } from './ant';

// test newDirection
test('Method test newDirection for ant class', () => {
    const p = [2,2];
    let ant1 =  new ant(p,'up');
    const colors = ['black','white'];
    const directions = ['up','down','left','right'];
    // for black color
    for (const d of directions){

        if (d == 'up') {
            expect(ant1.newDirection(d,colors[0])).toBe('left');
        } else if (d == 'down') {
            expect(ant1.newDirection(d,colors[0])).toBe('right');
        } else if (d == 'left') {
            expect(ant1.newDirection(d,colors[0])).toBe('down');
        } else if (d == 'right') {
            expect(ant1.newDirection(d,colors[0])).toBe('up');
        }
    }
    // for white color
    for (const d of directions){

        if (d == 'up') {
            expect(ant1.newDirection(d,colors[1])).toBe('right');
        } else if (d == 'down') {
            expect(ant1.newDirection(d,colors[1])).toBe('left');
        } else if (d == 'left') {
            expect(ant1.newDirection(d,colors[1])).toBe('up');
        } else if (d == 'right') {
            expect(ant1.newDirection(d,colors[1])).toBe('down');
        }
    }
});


// test newPosition
test('Method test newPosition for ant class with [2,2] position', () => {
    const p = [2,2];
    let ant1 =  new ant(p,'up');
    const directions = ['up','down','left','right'];
    for(const d of directions){
        if (d == 'up') {
            expect(ant1.newPosition(d,p)).toStrictEqual([2,1]);
        } else if (d == 'down') {
            expect(ant1.newPosition(d,p)).toStrictEqual([2,3]);
        } else if (d == 'left') {
            expect(ant1.newPosition(d,p)).toStrictEqual([1,2]);
        } else if (d == 'right') {
            expect(ant1.newPosition(d,p)).toStrictEqual([3,2]);
        }
    }
});

//test method move

test('Method test move for ant class',() => {
    const p = [2,2];
    let ant1 =  new ant(p,'up');

    ant1.move('black');
    expect(ant1.positionAnt).toStrictEqual([1,2]);
    ant1.move('black');
    expect(ant1.positionAnt).toStrictEqual([1,3]);
    ant1.move('black');
    expect(ant1.positionAnt).toStrictEqual([2,3]);

});