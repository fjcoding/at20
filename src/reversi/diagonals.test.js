import {Diagonals} from './diagonals';
import {Player} from './player';


test('Check for coincidences where y>x positive direction', () => {
    const black = new Player('B');
    const newToken = black.setToken(1, 2);// [posx,posy,tokens left,palyerTag]
    const resultMap = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['B', ' ', ' ', 'W', 'W', 'W', ' ', ' '],
        [' ', ' ', ' ', 'B', ' ', 'B', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken, resultMap);
    expect(newFlip.checkDpos()).toStrictEqual([[[1, 2], [4, 5], 'B']]);//
});

test('Check for coincidences where y=x positive direction', () => {
    const black = new Player('W');
    const newToken = black.setToken(2, 2);// [posx,posy,tokens left,palyerTag]
    const resultMap = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'W', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', 'W', 'W', ' ', ' '],
        [' ', ' ', ' ', 'B', 'W', 'B', ' ', ' '], // good example for flipping a new grid
        [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken, resultMap);
    expect(newFlip.checkDpos()).toStrictEqual([[[2, 2], [3, 3], 'W'], [[2, 2], [4, 4], 'W']]);//test this, so it wont return the same direction
});

test('Check for coincidences where y<x positive direction', () => {
    const black = new Player('B');
    const newToken = black.setToken(4, 3);// [posx,posy,tokens left,palyerTag]
    const resultMap = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        ['B', 'B', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', 'W', 'W', ' ', ' '],
        [' ', ' ', ' ', 'B', ' ', 'B', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
        [' ', 'B', ' ', ' ', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken, resultMap);
    expect(newFlip.checkDpos()).toStrictEqual([[[4, 3], [2, 1], 'B'], [[4, 3], [5, 4], 'B']]);//
});


test('Check for coincidences where y+x<=6 negative direction', () => {
    const black = new Player('B');
    const newToken = black.setToken(1, 2);// [posx,posy,tokens left,palyerTag]
    const resultMap3 = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['B', ' ', ' ', 'W', 'W', 'W', ' ', ' '],
        [' ', ' ', ' ', 'B', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken, resultMap3);
    expect(newFlip.checkDneg()).toStrictEqual([[[1, 2], [3, 0], 'B']]);//,[[1,2],[3,0],'B']]);//
});

test('Check for coincidences whre y+x>6 negative direction', () => {
    const black = new Player('B');
    const newToken = black.setToken(4, 4);// [posx,posy,tokens left,palyerTag]
    const resultMap3 = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['B', ' ', ' ', 'W', 'W', 'W', ' ', ' '],
        [' ', ' ', ' ', 'B', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        [' ', 'B', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken, resultMap3);
    expect(newFlip.checkDneg()).toStrictEqual([[[4, 4], [6, 2], 'B'], [[4, 4], [7, 1], 'B']]);//
});

test('Check for coincidences whre y+x=7 negative direction', () => {
    const black = new Player('W');
    const newToken = black.setToken(1, 6);// [posx,posy,tokens left,palyerTag]
    const resultMap3 = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', 'W', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['B', ' ', ' ', 'W', 'W', 'W', ' ', ' '],
        [' ', ' ', ' ', 'B', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken, resultMap3);
    expect(newFlip.checkDneg()).toStrictEqual([[[1, 6], [3, 4], 'W']]);//
});

test('Flip the tokens between two pieces on the positive direction given a grid and a position', () => {
    const black = new Player('B');
    const newTokenb = black.setToken(1, 2);// [posx,posy,tokens left,palyerTag]
    const previousMap = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '], //new token 1,2 to 4,5
        ['B', 'W', ' ', 'W', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', 'W', 'W', ' ', ' '],
        [' ', ' ', ' ', 'B', ' ', 'B', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
        [' ', 'B', ' ', ' ', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlipb = new Diagonals(newTokenb, previousMap);

    const newMapb = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '], // white tokens fliped
        ['B', 'W', ' ', 'B', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', 'W', ' ', ' '],
        [' ', ' ', ' ', 'B', ' ', 'B', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
        [' ', 'B', ' ', ' ', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];


    const white = new Player('W');
    const newTokenw = white.setToken(4, 3);// [posx,posy,tokens left,palyerTag]
    const previousMap1 = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '], //new token 6,5 to 3,2
        ['B', 'W', ' ', 'W', ' ', 'W', ' ', ' '],
        [' ', ' ', 'W', 'W', 'B', 'W', ' ', ' '], //
        [' ', ' ', ' ', 'W', ' ', 'B', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
        [' ', 'B', ' ', ' ', 'B', 'B', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ']
    ];
    const newFlipw = new Diagonals(newTokenw, previousMap1);

    const newMapw = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '], //new token 6,5 to 3,2
        ['B', 'W', ' ', 'W', ' ', 'W', ' ', ' '],
        [' ', ' ', 'W', 'W', 'B', 'W', ' ', ' '], //
        [' ', ' ', ' ', 'W', ' ', 'B', ' ', ' '],
        [' ', ' ', ' ', 'W', 'W', ' ', ' ', ' '],
        [' ', 'B', ' ', ' ', 'B', 'W', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', 'W', ' ']
    ];


    expect(newFlipb.flipDiag(newFlipb.checkDpos())).toStrictEqual(newMapb);// method flip returns an updated grid with flipped values
    expect(newFlipw.flipDiag(newFlipw.checkDpos())).toStrictEqual(newMapw);// method flip returns an updated grid with flipped values
});


test('Flip the tokens between two  pieces on the negative direction given a grid and a position', () => {
    const black = new Player('B');
    const newTokenb = black.setToken(2, 5);// [posx,posy,tokens left,palyerTag]
    const previousMap = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        ['B', 'W', ' ', 'W', ' ', 'B', ' ', ' '],
        [' ', ' ', ' ', 'W', 'W', 'W', ' ', ' '],
        [' ', ' ', ' ', 'B', ' ', 'B', ' ', ' '],
        [' ', ' ', 'B', 'W', 'B', ' ', ' ', ' '],
        [' ', 'B', ' ', ' ', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlipb = new Diagonals(newTokenb, previousMap);

    const newMapb = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        ['B', 'W', ' ', 'W', ' ', 'B', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', 'W', ' ', ' '],
        [' ', ' ', ' ', 'B', ' ', 'B', ' ', ' '],
        [' ', ' ', 'B', 'W', 'B', ' ', ' ', ' '],
        [' ', 'B', ' ', ' ', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];


    const white = new Player('W');
    const newTokenw = white.setToken(6, 2);// [posx,posy,tokens left,palyerTag]
    const previousMap1 = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        ['B', ' ', ' ', 'W', ' ', 'W', ' ', ' '],
        [' ', ' ', 'W', 'W', 'B', 'W', ' ', ' '], //
        [' ', ' ', ' ', 'B', ' ', 'B', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
        [' ', 'B', 'W', ' ', 'B', 'W', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlipw = new Diagonals(newTokenw, previousMap1);

    const newMapw = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        ['B', ' ', ' ', 'W', ' ', 'W', ' ', ' '],
        [' ', ' ', 'W', 'W', 'B', 'W', ' ', ' '], //
        [' ', ' ', ' ', 'B', 'W', 'B', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
        [' ', 'B', 'W', ' ', 'B', 'W', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];


    expect(newFlipb.flipDiag(newFlipb.checkDneg())).toStrictEqual(newMapb);// method flipDiag returns an updated grid with flipped values
    expect(newFlipw.flipDiag(newFlipw.checkDneg())).toStrictEqual(newMapw);//
});


