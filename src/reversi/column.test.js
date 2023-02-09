import { Player } from './player';
import { Column } from './column';

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
    const whitePiecesCord = [[4, 4]];
    const newCheck = new Column(newPosition, testMap, black.playerTag);
    expect(newCheck.checkColumn(piecesPosition)).toStrictEqual(whitePiecesCord);//
});