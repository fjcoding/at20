import {DiagonalsInspector} from './DiagonalsInspector';
import {Player} from '../../player.js';


test('Check for possible positions to place a black token diagonally', () => {
    const blackPlayer = new Player('B');
    const playerTag = blackPlayer.playerTag;
    const Map = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', 'W', 'W', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' ', 'W', ' ', ' '],
        [' ', ' ', 'W', ' ', ' ', 'W', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];

    const positions = new DiagonalsInspector();
    expect(positions.checkPossibleMoves(Map, playerTag)).toStrictEqual([[6, 6], [7, 1], [2, 6], [2, 2]]);// B's initial position is 4,4// result should be [[6,6],[7,1] ,[2,6] ,[2,2]]
});


test('Check for possible positions to place a white token diagonally', () => {
    const whitePlayer = new Player('W');
    const playerTag = whitePlayer.playerTag;
    const Map = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'B', 'W', 'B', ' ', ' '],
        [' ', ' ', ' ', 'W', 'W', ' ', ' ', ' '],
        [' ', ' ', ' ', 'B', ' ', 'B', ' ', ' '],
        [' ', ' ', 'B', ' ', ' ', 'W', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const positions = new DiagonalsInspector();
    expect(positions.checkPossibleMoves(Map, playerTag)).toStrictEqual([[6, 6], [7, 1], [2, 6], [2, 2]]);
});


test('Check for possible positions to place a white token diagonally which is placed in position 3 ,5 ', () => {
    const whitePlayer = new Player('W');
    const playerTag = whitePlayer.playerTag;
    const Map = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'B', ' ', 'B', ' '],
        [' ', ' ', ' ', 'B', 'W', 'W', ' ', ' '],
        [' ', ' ', ' ', 'W', 'B', ' ', 'B', ' '],
        [' ', ' ', ' ', 'B', ' ', 'B', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', 'W', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const positions = new DiagonalsInspector();
    expect(positions.checkPossibleMoves(Map, playerTag)).toStrictEqual([[5, 7], [6, 2], [1, 7], [1, 3]]);
});


test('Check for possible positions to place a black token diagonally which is placed in 5,5', () => {
    const blackPlayer = new Player('B');
    const playerTag = blackPlayer.playerTag;
    const Map = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', 'W', 'W', ' ', ' '],
        [' ', ' ', ' ', 'W', 'W', ' ', 'W', ' '],
        [' ', ' ', ' ', 'W', ' ', 'B', ' ', ' '],
        [' ', ' ', 'W', ' ', 'W', 'W', 'W', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];

    const positions = new DiagonalsInspector();
    expect(positions.checkPossibleMoves(Map, playerTag)).toStrictEqual([[7, 7], [7, 3], [3, 7], [2, 2]]);
});

test('Check for possible positions to place a white token diagonally with multiple tokens', () => {
    const whitePlayer = new Player('W');
    const playerTag = whitePlayer.playerTag;
    const Map = [
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 'B', ' ', 'B', ' '],
        [' ', ' ', ' ', 'B', 'W', 'W', ' ', ' '],
        [' ', ' ', 'W', 'W', 'B', ' ', 'B', ' '],
        [' ', ' ', ' ', 'B', ' ', 'B', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', 'W', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ];
    const positions = new DiagonalsInspector();
    expect(positions.checkPossibleMoves(Map, playerTag)).toStrictEqual([[5, 7], [6, 2], [1, 7], [1, 3], [6, 4], [1, 5]]);//for positions 3,5 and 4,2
});