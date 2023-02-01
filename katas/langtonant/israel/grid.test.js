import { grid } from './grid';

//constructor test

test('test for grid constructor to check grid size ', () => {
    const grid1 = new grid('0', 8, [2, 2]);
    //test grid
    expect(grid1.grid.length).toBe(8);
    for (const row of grid1.grid) {
        expect(row.length).toBe(8);
    }
});

test('test for grid constructor to check the object position', () => {
    const grid1 = new grid('0', 8, [2, 2]);
    //test object
    expect(grid1.obj).toStrictEqual([2, 2]);
    expect(grid1.grid[grid1.obj[0]][grid1.obj[1]]).toBe('x');
});

//constructor track

test('test for track method to check the saving of the color and position of the object', () => {
    const grid1 = new grid('0', 8, [2, 2]);
    //for white
    grid1.track([2, 1]);
    expect(grid1.obj).toStrictEqual([2, 1]);
    expect(grid1.color).toStrictEqual('0');
    grid1.track([2, 2]);
    expect(grid1.obj).toStrictEqual([2, 2]);
    expect(grid1.color).toStrictEqual('1');
    //for black
    grid1.color = '1';
    grid1.track([1, 2]);
    expect(grid1.obj).toStrictEqual([1, 2]);
    expect(grid1.color).toStrictEqual('0');
    grid1.track([2, 2]);
    expect(grid1.obj).toStrictEqual([2, 2]);
    expect(grid1.color).toStrictEqual('0');
});

//constructor getColor

test('test for getColor method to check if we get the right color ', () => {
    const grid1 = new grid('0', 8, [2, 2]);
    expect(grid1.getColor()).toBe('white');
    grid1.color = 1;
    expect(grid1.getColor()).toBe('black');
});