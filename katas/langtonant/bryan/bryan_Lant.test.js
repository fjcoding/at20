import {makeGrid} from './bryan_Lant';


test('makeGrid function should display new clean height x width grid filled with -', () => {
    const gridTest = makeGrid(3, 3);
    expect(gridTest).toStrictEqual([['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']]);
});


import {cellState} from './bryan_Lant';
test('cellState returns the element in the coordinates given', () => {
    const gridTest = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
    expect(cellState(gridTest, 0, 2)).toBe('3');
});

import {direction} from './bryan_Lant';
test('direction function return the direction of the ant as a number between 0 and 3 where 0=Up, 1=Right,2=Down,3=Left', ()=> {
    const state = '-';
    expect(direction(state)).toBe(1);
});

//import {} from './bryan_Lant'