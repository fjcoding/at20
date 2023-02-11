import {freeDiagonals} from './freeDiagonals';
import {Player} from './player';


test('Check for possible positions to place a black token diagonally', () => {
    const blackPlayer = new Player('B');
    const playerTag = blackPlayer.playerTag;
    // const Map = [
    //     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    //     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    //     [' ', ' ', '*', ' ', ' ', ' ', '*', ' '],
    //     [' ', ' ', '*', 'W', 'W', 'W', ' ', ' '],
    //     [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
    //     [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
    //     [' ', ' ', '*', ' ', ' ', 'B', ' ', ' '],
    //     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    // ];
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

    const positions = new freeDiagonals(playerTag, Map);
    expect(positions.checkForfree()).toStrictEqual([[6, 6], [7, 1], [2, 6], [2, 2]]);// B's initial position is 4,4// result should be [[6,6],[7,1] ,[2,6] ,[2,2]]
});
