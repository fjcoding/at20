import {Player} from './player';
import {checkStatus} from './Matches';

test('Check for coincidences in rows', () => {
    const whitePlace = new Player('B');
    const newToken = whitePlace.setToken(3, 2);// [posx,posy,tokens left,palyerTag]
    const resultMap1 = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['B', 'W', 'B', 'W', 'B', 'B', ' ', ' '],
        [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlip = new checkStatus(newToken, resultMap1);//
    expect(newFlip.checkRow()).toStrictEqual([[[3, 2], [3, 0], 'B'], [[3, 2], [3, 4], 'B']]);//
});


test('Check for coincidences in columns', () => {
    const black = new Player('B');
    const newToken = black.setToken(5, 4);// [posx,posy,tokens left,palyerTag]
    const resultMap2 = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'B', ' ', ' ', ' ']
    ];
    const newFlip = new checkStatus(newToken, resultMap2);
    expect(newFlip.checkColumn()).toStrictEqual([[[5, 4], [3, 4], 'B'], [[5, 4], [7, 4], 'B']]);//
});


test('Check for coincidences in diagonals', () => {
    const black = new Player('B');
    const newToken = black.setToken(2, 6);// [posx,posy,tokens left,palyerTag]
    const resultMap3 = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', 'B', ' '],
        [' ', ' ', ' ', 'W', 'W', 'W', ' ', ' '],
        [' ', ' ', ' ', 'B', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlip = new checkStatus(newToken, resultMap3);
    expect(newFlip.checkColumn()).toStrictEqual([[[2, 6], [4, 4], 'B']]);//
});

