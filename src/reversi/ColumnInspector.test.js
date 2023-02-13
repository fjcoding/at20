import { Player } from './player';
import { ColumnInspector } from './ColumnInspector';

test('Check for column white pieces between two black ', () => {
    const black = new Player('B');
    const newPosition = black.setToken(5, 4);// [posx,posy,tokens left,palyerTag]
    const testMap = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'B', ' ', ' ', ' ']
    ];
    const piecesPosition = [];
    const whitePiecesPositions = [[4, 4]];
    const newChecker = new ColumnInspector(newPosition, testMap, black.playerTag);
    expect(newChecker.findFlipPositions(piecesPosition)).toStrictEqual(whitePiecesPositions);//
});

test('Check for column white pieces between two white ', () => {
    const black = new Player('W');
    const newPosition = black.setToken(1, 4);// [posx,posy,tokens left,palyerTag]
    const testMap = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'B', ' ', ' ', ' ']
    ];
    const piecesPosition = [];
    const blackPiecesPositions = [[2, 4], [3, 4], [4, 4], [5, 4]];
    const newChecker = new ColumnInspector(newPosition, testMap, black.playerTag);
    expect(newChecker.findFlipPositions(piecesPosition)).toStrictEqual(blackPiecesPositions);
});

test('Get possible coordinates to place a token of player B', () => {
    const black = new Player('B');
    const newPosition = black.setToken(7, 4);// [posx,posy,tokens left,palyerTag]
    const testMap = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const piecesPosition = [];
    const blackPossiblePositions = [[7, 4]];
    const newChecker = new ColumnInspector(newPosition, testMap, black.playerTag);
    expect(newChecker.possibleMovements(piecesPosition)).toStrictEqual(blackPossiblePositions);
});

test('Get possible coordinates to place a token of player W', () => {
    const white = new Player('W');
    const newPosition = white.setToken(7, 4);// [posx,posy,tokens left,palyerTag]
    const testMap = [
        [' ', ' ', ' ', ' ', ' ', ' ', 'W', ' '],
        [' ', ' ', 'W', ' ', 'B', ' ', 'B', ' '],
        [' ', ' ', 'B', ' ', 'B', ' ', 'B', ' '],
        [' ', ' ', 'B', ' ', 'B', ' ', 'B', ' '],
        [' ', ' ', ' ', ' ', 'B', ' ', 'B', ' '],
        [' ', ' ', ' ', 'B', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', 'B', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ']
    ];
    const piecesPosition = [];
    const whitePossiblePositions = [[5, 6], [4, 2], [4, 3]];
    const newChecker = new ColumnInspector(newPosition, testMap, white.playerTag);
    expect(newChecker.possibleMovements(piecesPosition)).toStrictEqual(whitePossiblePositions);
});