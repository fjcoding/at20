import {Diagonals} from './diagonals';
import {Player} from './player';


test('Check for coincidences in the negative diagonal where there is 1 match with a cheat too', () => {
    const black = new Player('B');
    const newToken = black.setToken(1, 2);
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
    const newFlip = new Diagonals(newToken, resultMap, blackTag);
    expect(newFlip.check()).toStrictEqual([[2, 3], [3, 4], [4, 5], [5, 6]]);
});

test('Check for coincidences where there is more than 1 match in the positive direction', () => {
    const white = new Player('W');
    const newToken = white.setToken(2, 3);
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
    const newFlip = new Diagonals(newToken, resultMap, whiteTag);
    expect(newFlip.check()).toStrictEqual([[3, 4], [4, 5], [5, 6], [1, 2]]);
});

test('Check for coincidences where there are none', () => {
    const white = new Player('W');
    const newToken = white.setToken(2, 3);
    const whiteTag = white.playerTag;
    const resultMap = [
        [' ', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' ', ' ', ' ', ' '],
        ['B', ' ', ' ', 'W', ' ', 'W', ' ', ' '],
        [' ', ' ', ' ', 'B', ' ', 'B', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', ' ', 'B', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'W'],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken, resultMap, whiteTag);
    expect(newFlip.check()).toStrictEqual([]);
});


test('Check for coincidences when there are none', () => {
    const black = new Player('B');
    const newToken = black.setToken(2, 2);
    const blackTag = black.playerTag;
    const resultMap = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', 'W', 'B', 'W', ' ', ' ', 'W', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        ['B', 'W', 'B', 'W', 'W', 'W', 'B', ' '],
        [' ', ' ', ' ', 'B', ' ', ' ', ' ', ' '],
        ['B', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken,  resultMap, blackTag);
    expect(newFlip.check()).toStrictEqual([]);
});

test('Check for coincidences in the negative and positive diagonal where there is more than 1 match', () => {
    const black = new Player('B');
    const newToken = black.setToken(2, 2);
    const blackTag = black.playerTag;
    const resultMap = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', 'B', 'W', ' ', ' ', 'W', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        ['B', 'W', 'B', 'W', 'W', 'W', 'B', ' '],
        ['B', ' ', ' ', 'B', 'B', ' ', ' ', ' '],
        ['B', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken, resultMap, blackTag);
    expect(newFlip.check()).toStrictEqual([[3, 3], [3, 1]]);
});


test('Check for coincidences with a black token where x<y and x+y>7', () => {
    const black = new Player('B');
    const newToken = black.setToken(2, 6);
    const blackTag = black.playerTag;
    const resultMap = [
        [' ', ' ', ' ', ' ', 'B', ' ', ' ', ' '],
        [' ', ' ', 'B', 'W', ' ', 'W', 'W', ' '],
        [' ', ' ', 'B', ' ', 'B', ' ', 'B', ' '],
        ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
        ['B', ' ', 'B', 'B', 'W', ' ', ' ', ' '],
        ['B', 'B', ' ', 'W', 'B', 'W', ' ', ' '],
        ['W', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];

    const newFlip = new Diagonals(newToken,  resultMap, blackTag);
    expect(newFlip.check()).toStrictEqual([[3, 5], [4, 4], [5, 3], [1, 5]]);//
});
test('Check for coincidences with a white token where x>=y and x+y<=7 ', () => {
    const white = new Player('W');
    const newToken = white.setToken(4, 3);
    const whiteTag = white.playerTag;
    const resultMap = [
        [' ', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' ', ' ', ' ', ' '],
        ['B', 'W', ' ', 'W', 'B', 'W', ' ', ' '],
        [' ', ' ', 'B', 'W', ' ', 'B', ' ', ' '],
        [' ', ' ', 'B', 'W', 'B', ' ', 'W', ' '],
        [' ', 'B', 'B', ' ', 'B', 'W', ' ', 'W'],
        ['W', 'W', ' ', ' ', ' ', 'W', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken, resultMap, whiteTag);
    expect(newFlip.check()).toStrictEqual([[5, 4], [5, 2], [6, 1]]);
});

test('Check for coincidences with a white token where x<y and x+y>7 ', () => {
    const white = new Player('W');
    const newToken = white.setToken(5, 6);
    const whiteTag = white.playerTag;
    const resultMap = [
        [' ', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' ', ' ', ' ', ' '],
        ['B', 'W', ' ', 'W', 'B', 'W', ' ', ' '],
        [' ', ' ', 'B', 'B', ' ', 'B', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', ' ', 'W', ' '],
        [' ', ' ', 'B', ' ', 'B', 'B', ' ', 'W'],
        [' ', 'W', ' ', ' ', 'W', 'W', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken, resultMap, whiteTag);
    expect(newFlip.check()).toStrictEqual([[6, 5], [4, 5], [3, 4]]);
});

test('Check for coincidences with a white token where x<y and x+y>7 ', () => {
    const white = new Player('W');
    const newToken = white.setToken(5, 3);
    const whiteTag = white.playerTag;
    const resultMap = [
        [' ', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' ', ' ', ' ', ' '],
        ['B', 'W', ' ', 'W', 'B', 'W', ' ', ' '],
        [' ', ' ', 'B', 'B', ' ', 'B', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', ' ', 'W', ' '],
        [' ', ' ', 'B', ' ', 'B', ' ', ' ', 'W'],
        [' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken, resultMap, whiteTag);
    expect(newFlip.check()).toStrictEqual([[6, 4], [6, 2], [4, 2]]);
});


test('Check for coincidences with a black token where x>=y and x+y>7s', () => {
    const black = new Player('B');
    const newToken = black.setToken(5, 5);
    const blackTag = black.playerTag;
    const resultMap = [
        [' ', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' ', ' ', ' ', ' '],
        ['B', 'W', ' ', 'W', 'B', 'W', ' ', ' '],
        [' ', ' ', 'B', 'B', ' ', 'B', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', 'B', 'W', ' '],
        [' ', ' ', 'B', ' ', 'B', ' ', 'W', 'W'],
        [' ', 'W', ' ', 'W', ' ', 'W', ' ', 'B']
    ];
    const newFlip = new Diagonals(newToken,  resultMap, blackTag);
    expect(newFlip.check()).toStrictEqual([[6, 6]]);
});


test('Check for coincidences with a black token where x>=y and x+y>7s towards the up right side', () => {
    const black = new Player('B');
    const newToken = black.setToken(5, 5);
    const blackTag = black.playerTag;
    const resultMap = [
        [' ', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' ', ' ', ' ', ' '],
        ['B', 'W', ' ', 'W', 'B', 'W', ' ', 'B'],
        [' ', ' ', 'B', 'B', ' ', 'B', 'W', ' '],
        [' ', ' ', ' ', 'W', 'B', 'B', 'W', ' '],
        [' ', ' ', 'B', ' ', 'B', ' ', 'W', 'W'],
        [' ', 'W', ' ', 'W', ' ', 'W', ' ', 'B']
    ];
    const newFlip = new Diagonals(newToken,  resultMap, blackTag);
    expect(newFlip.check()).toStrictEqual([[6, 6], [4, 6]]);
});

test('Check for coincidences with a white token where x>=y and x+y>7 towards the up right side', () => {
    const white = new Player('W');
    const newToken = white.setToken(7, 3);
    const whiteTag = white.playerTag;
    const resultMap = [
        [' ', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' ', ' ', ' ', ' '],
        ['B', 'W', ' ', 'W', 'B', 'W', ' ', ' '],
        [' ', ' ', 'B', 'B', ' ', 'B', ' ', ' '],
        [' ', 'W', ' ', 'W', 'B', 'W', 'W', ' '],
        [' ', ' ', 'B', ' ', 'B', ' ', ' ', 'W'],
        [' ', 'W', ' ', 'W', ' ', 'W', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken, resultMap, whiteTag);
    expect(newFlip.check()).toStrictEqual([[6, 4], [6, 2]]);
});

test('Check for coincidences with a black token any direction', () => {
    const black = new Player('B');
    const newToken = black.setToken(3, 3);
    const blackTag = black.playerTag;
    const resultMap = [
        [' ', ' ', ' ', ' ', ' ', ' ', 'B', ' '],
        [' ', 'B', 'B', 'W', ' ', 'W', 'W', ' '],
        [' ', ' ', 'W', ' ', 'W', ' ', ' ', ' '],
        ['B', 'W', 'B', 'B', 'W', 'W', 'B', ' '],
        ['B', ' ', 'W', 'B', 'W', ' ', ' ', ' '],
        ['B', 'W', ' ', 'W', 'B', 'B', ' ', ' '],
        ['B', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken,  resultMap, blackTag);
    expect(newFlip.check()).toStrictEqual([[4, 4], [4, 2], [5, 1], [2, 4], [1, 5], [2, 2]]);//
});


test('Check for coincidences with a black token any direction', () => {
    const black = new Player('B');
    const newToken = black.setToken(2, 4);
    const blackTag = black.playerTag;
    const resultMap = [
        [' ', ' ', ' ', ' ', ' ', ' ', 'B', ' '],
        [' ', 'B', 'B', 'W', ' ', 'W', 'W', ' '],
        [' ', ' ', 'W', ' ', 'B', ' ', ' ', ' '],
        ['B', 'W', 'B', 'B', 'W', 'W', 'B', ' '],
        ['B', ' ', 'W', 'B', 'W', ' ', 'B', ' '],
        ['B', 'W', ' ', 'W', 'B', 'B', ' ', ' '],
        ['B', ' ', 'B', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken,  resultMap, blackTag);
    expect(newFlip.check()).toStrictEqual([[3, 5], [1, 5]]);//
});


test('Check for coincidences for position x=4, y=5 with a black token in any direction', () => {
    const black = new Player('B');
    const newToken = black.setToken(4, 5);
    const blackTag = black.playerTag;
    const resultMap = [
        [' ', ' ', ' ', ' ', ' ', ' ', 'B', ' '],
        [' ', 'B', 'B', 'W', ' ', 'W', 'W', ' '],
        [' ', ' ', 'W', 'B', 'B', ' ', ' ', 'B'],
        ['B', 'W', 'B', 'B', 'W', 'W', 'W', ' '],
        ['B', ' ', 'W', 'B', 'W', 'B', 'B', ' '],
        ['B', 'W', ' ', 'W', 'W', 'B', ' ', ' '],
        ['B', ' ', 'B', 'B', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const newFlip = new Diagonals(newToken,  resultMap, blackTag);
    expect(newFlip.check()).toStrictEqual([[5, 4], [3, 6], [3, 4]]);//
});


