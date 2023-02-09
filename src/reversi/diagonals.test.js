import {Diagonals} from './diagonals';
import {Player} from './player';


test('Check for coincidences where y>x positive direction', () => {
    const black = new Player('B');
    const newToken = black.setToken(1, 2);// [posx,posy]
    const blackTag = black.playerTag;
    const resultMap = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' ', ' ', ' ', ' '],
        ['B', ' ', ' ', 'W', 'W', 'W', ' ', ' '],
        [' ', ' ', ' ', 'B', ' ', 'W', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', ' ', 'W', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'B'],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken, blackTag, resultMap);
    expect(newFlip.checkDpos()).toStrictEqual([[2, 3], [3, 4], [4, 5], [5, 6]]);
});


test('Check for coincidences where there is more than 1 match in the positive direction', () => {
    const white = new Player('W');
    const newToken = white.setToken(2, 3);// [posx,posy,tokens left,palyerTag]
    const whiteTag = white.playerTag;
    const resultMap = [
        [' ', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' ', ' ', ' ', ' '],
        ['B', ' ', ' ', 'W', 'B', 'W', ' ', ' '],
        [' ', ' ', ' ', 'B', ' ', 'B', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', ' ', 'B', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W'],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken, whiteTag, resultMap);
    expect(newFlip.checkDpos()).toStrictEqual([[3, 4], [4, 5], [5, 6], [1, 2]]);//token to flip
});

test('Check for coincidences where there is more than 1 match in the positive direction', () => {
    const white = new Player('W');
    const newToken = white.setToken(2, 3);// [posx,posy,tokens left,palyerTag]
    const whiteTag = white.playerTag;
    const resultMap = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' ', ' ', ' ', ' '],
        ['B', ' ', ' ', 'W', 'B', 'W', ' ', ' '],
        [' ', ' ', ' ', 'B', ' ', 'B', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', ' ', 'B', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W'],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken, whiteTag, resultMap);
    expect(newFlip.checkDpos()).toStrictEqual([[3, 4], [4, 5], [5, 6]]);//token to flip
    // expect(newFlip.checkDpos()).toStrictEqual([[1, 2]]);//token to flip
});


test('Check for coincidences in the negative diagonal where there is 1 match', () => {
    const white = new Player('W');
    const newToken = white.setToken(5, 3);// [posx,posy,tokens left,palyerTag]
    const whiteTag = white.playerTag;
    const resultMap = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'W', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['W', ' ', ' ', 'W', 'W', 'W', 'B', 'W'],
        [' ', ' ', ' ', 'B', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken, whiteTag, resultMap);
    expect(newFlip.checkDneg()).toStrictEqual([[4, 4]]);
});

test('Check for coincidences in the negative diagonal where there is more than 1 match', () => {
    const black = new Player('B');
    const newToken = black.setToken(2, 2);
    const blackTag = black.playerTag;
    const resultMap = [
        [' ', ' ', ' ', ' ', 'B', ' ', ' ', ' '],
        [' ', ' ', 'B', 'W', ' ', ' ', 'W', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        ['B', 'W', 'B', 'W', 'W', 'W', 'B', ' '],
        ['B', ' ', ' ', 'B', 'B', ' ', ' ', ' '],
        ['B', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken, blackTag, resultMap);
    expect(newFlip.checkDneg()).toStrictEqual([[3, 1], [1, 3]]);//
});

test('Check for coincidences in the negative diagonal where 1 match with a cheat', () => {
    const black = new Player('W');
    const newToken = black.setToken(3, 3);
    const blackTag = black.playerTag;
    const resultMap = [
        [' ', ' ', ' ', ' ', 'B', ' ', ' ', ' '],
        [' ', ' ', 'B', 'W', ' ', ' ', 'W', ' '],
        [' ', ' ', 'B', ' ', 'B', ' ', ' ', ' '],
        ['B', 'W', 'B', 'W', 'B', 'B', 'B', ' '],// here 
        ['B', ' ', 'B', 'B', 'B', ' ', ' ', ' '],
        ['B', 'B', ' ', 'W', 'B', 'W', ' ', ' '],
        ['W', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken, blackTag, resultMap);
    expect(newFlip.checkDneg()).toStrictEqual([[4, 2], [5, 1]]);//
});


test('Check for coincidences in the negative diagonal where 1 match with a cheat too', () => {
    const black = new Player('W');
    const newToken = black.setToken(3, 3);
    const blackTag = black.playerTag;
    const resultMap = [
        [' ', ' ', ' ', ' ', 'B', ' ', ' ', ' '],
        [' ', ' ', 'B', 'W', ' ', 'W', 'W', ' '],
        [' ', ' ', 'B', ' ', 'B', ' ', ' ', ' '],
        ['B', 'W', 'B', 'W', 'B', 'B', 'B', ' '],// here 
        ['B', ' ', 'B', 'B', 'B', ' ', ' ', ' '],
        ['B', 'B', ' ', 'W', 'B', 'W', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken, blackTag, resultMap);
    expect(newFlip.checkDneg()).toStrictEqual([[2, 4]]);//
});