import { gridInit } from './InitParam';
import { posAndOriInit } from './InitParam';

// Test for Initial grid

test('gridInit have the correct dimension of length', () => {
    let len = 5;
    let wid = 4;
    expect(gridInit(len, wid).length).toBe(len);
});

test('gridInit have the correct dimension of width', () => {
    let len = 4;
    let wid = 7;
    expect(gridInit(len, wid)[(len - 1)].length).toBe(wid);
});

test('gridInit have the correct Initial color grid', () => {
    let len = 4;
    let wid = 4;
    var posX = 2;
    var posY = 3;
    let colorGridInit = 0;
    expect(gridInit(len, wid, colorGridInit)[posY][posX]).toBe(colorGridInit);
});

// Test for Initial position and orientation


test('posAndOriInit function give an array with 3 positions', () => {
    let len = 5;
    let wid = 4;
    expect(posAndOriInit(len, wid).length).toBe(3);
});

