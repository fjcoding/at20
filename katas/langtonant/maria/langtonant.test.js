import { ant, antDirectionRight, antDirectionLeft, newPositionLeft, newPositionRight, creatGrid } from './langtonant';

test('this func should return new direction to right', () => {
    expect(antDirectionRight('up')).toBe('right');
    expect(antDirectionRight('right')).toBe('down');
    expect(antDirectionRight('down')).toBe('left');
    expect(antDirectionRight('left')).toBe('up');
});
test('this func should return new direction to left', () => {
    expect(antDirectionLeft('up')).toBe('left');
    expect(antDirectionLeft('right')).toBe('up');
    expect(antDirectionLeft('down')).toBe('right');
    expect(antDirectionLeft('left')).toBe('down');
});
test('this func should update coordinates to right', () => {
    //let newPosition = newPositionRight('up', 1, 2);
    //expect(newPosition).toEqual({x:1,y:3});
    expect(newPositionRight('up', 1, 2)).toMatchObject({x:1, y:3});
    expect(newPositionRight('right', 1, 2)).toMatchObject({x:2, y:2});
    expect(newPositionRight('down', 1, 2)).toMatchObject({x:1, y:1});
    expect(newPositionRight('left', 1, 2)).toMatchObject({x:0, y:2});
});
test('this func should update coordinates to left', () => {
    expect(newPositionLeft('up', 1, 2)).toMatchObject({x:1, y:1});
    expect(newPositionLeft('right', 1, 2)).toMatchObject({x:0, y:2});
    expect(newPositionLeft('down', 1, 2)).toMatchObject({x:1, y:3});
    expect(newPositionLeft('left', 1, 2)).toMatchObject({x:2, y:2});
});
test('this func should return the grid', () => {
    expect(creatGrid(100)).toHaveLength(100);
});
test('this func should return the last position of langtonant', () => {
    expect(ant(10, 14)).toMatchObject({positionX:6, positionY:4, color:1, direction:'down', steps:0});
    expect(ant(5, 100)).toMatchObject({positionX:4, positionY:-1, color:undefined, direction:'left', steps:0});
});