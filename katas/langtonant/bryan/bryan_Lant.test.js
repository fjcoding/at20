import {makeGrid} from './bryan_Lant';
import {cellState} from './bryan_Lant';
import {direction} from './bryan_Lant';
import {displayGrid} from './bryan_Lant';
import {swState} from './bryan_Lant';
import {move} from './bryan_Lant';
import {langtonAnt} from './bryan_Lant';

test('makeGrid function should display new clean height x width grid filled with -', () => {
    const gridTestA = makeGrid(3, 3);
    expect(gridTestA).toStrictEqual([['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']]);
    const gridTestB = makeGrid(5, 5);
    expect(gridTestB).toStrictEqual([['-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-'], ['-', '-', '-', '-', '-']]);
    const gridTestC = makeGrid(0, 0);
    expect(gridTestC).toStrictEqual([]);
});

test('displayGrid should turn an array matrix into a string matrix, the input argument should be an array', () => {
    const gridArrayA = [['-', '-', '-'], ['&', '&', '&'], ['#', '#', '#']];
    const expectetGridasStringA =
            '- - - \n' +
            '& & & \n' +
            '# # # \n';
    expect(displayGrid(gridArrayA)).toBe(expectetGridasStringA);
    const gridArrayB = [['7', '8', '9'], ['1', '2', '3'], ['4', '6', '5']];
    const expectetGridasStringB =
            '7 8 9 \n' +
            '1 2 3 \n' +
            '4 6 5 \n';
    expect(displayGrid(gridArrayB)).toBe(expectetGridasStringB);

    const gridArrayC = [['0', '(', 'g'], ['=', '+', '_'], ['45', '!', '@']];
    const expectetGridasStringC =
            '0 ( g \n' +
            '= + _ \n' +
            '45 ! @ \n';
    expect(displayGrid(gridArrayC)).toBe(expectetGridasStringC);
});


test('cellState returns the element in the coordinates given', () => {
    const gridTest = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
    expect(cellState(gridTest, 0, 2)).toBe('3');
    expect(cellState(gridTest, 2, 1)).toBe('8');
    expect(cellState(gridTest, 1, 0)).toBe('4');
});


test('direction function returns the direction of the ant as a number between 0 and 3 given a previous direction ', ()=> {
    //where 0=Up, 1=Right,2=Down,3=Left
    // where - is white state and * is black state
    var state = '-';
    var preDir = 1;
    expect(direction(state, preDir)).toBe(2);
    state = '*';
    preDir = '0';
    expect(direction(state, preDir)).toBe(3);
    state = '*';
    preDir = '1';
    expect(direction(state, preDir)).toBe(0);
});

test('swState function turns a white state cell to a black state cell', ()=> {
    var state = '-';
    expect(swState(state)).toBe('*');
    state = '*';
    expect(swState(state)).toBe('-');
});


test('move function returns new coordinates given a direction and previous coordinates', ()=> {
    var preDir = 0;
    var cdY = 5;
    var cdX = 5;
    var [cdYn, cdXn] = move(preDir, cdY, cdX);
    expect([cdYn, cdXn]).toStrictEqual([4, 5]);
    preDir = 1;
    cdY = 5;
    cdX = 5;
    [cdYn, cdXn] = move(preDir, cdY, cdX);
    expect([cdYn, cdXn]).toStrictEqual([5, 6]);
    preDir = 3;
    cdY = 5;
    cdX = 5;
    [cdYn, cdXn] = move(preDir, cdY, cdX);
    expect([cdYn, cdXn]).toStrictEqual([5, 4]);
});

test('langtonAnt function returns the pattern of an ant given a number of steps,the size of the canvas and an initial direction', ()=>{
    var maxSteps = 5;
    var hIght = 10;
    var wDth = 10;
    var nDir = 0;
    var antSteps = langtonAnt(maxSteps, hIght, wDth, nDir);
    const expectedPatternA =
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - * - * - - - \n' +
            '- - - - - * * - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n'
            ;
    expect(antSteps).toBe(expectedPatternA);

    maxSteps = 20;
    hIght = 10;
    wDth = 10;
    nDir = 2;
    antSteps = langtonAnt(maxSteps, hIght, wDth, nDir);
    const expectedPatternB =
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - * - - \n' +
            '- - - - * - * - - - \n' +
            '- - - - * - - * - - \n' +
            '- - - - - * * - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n'
            ;
    expect(antSteps).toBe(expectedPatternB);

    maxSteps = 10;
    hIght = 10;
    wDth = 10;
    nDir = 1;
    antSteps = langtonAnt(maxSteps, hIght, wDth, nDir);
    const expectedPatternC =
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - * - * - - - \n' +
            '- - - - * * * - - - \n' +
            '- - - - * * - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n'
            ;
    expect(antSteps).toBe(expectedPatternC);
    maxSteps = 0;
    hIght = 10;
    wDth = 10;
    nDir = 1;
    antSteps = langtonAnt(maxSteps, hIght, wDth, nDir);
    const expectedPatternD =
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - * - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n'
            ;
    expect(antSteps).toBe(expectedPatternD);
    maxSteps = -1;
    hIght = 10;
    wDth = 10;
    nDir = 1;
    antSteps = langtonAnt(maxSteps, hIght, wDth, nDir);
    const expectedPatternE =
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n' +
            '- - - - - - - - - - \n'
            ;
    expect(antSteps).toBe(expectedPatternE);
});


