import {Player} from './player';
import {checkAndFlipRow} from './RowPiecesThatCanFlip';
describe('Check for coincidences in rows with a new piece on the board', () => {
    it('black piece on 3,2', () => {
        const player = 'B';
        // const newToken = whitePlace.setToken(3, 2);// [posx,posy,tokens left,playerTag]
        const x = 3;
        const y = 2;
        const initialMap = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', 'W', 'B', 'W', ' '],
            [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        const newFlip = new checkAndFlipRow(x, y, initialMap, player);//
        expect(newFlip.checkRow()).toStrictEqual([[3, 3], [3, 4]]);//
    });
});


describe('Check for coincidences in rows and flip them', () => {
    it('black piece on 3,2', () => {
        const player = new Player('B');
        const newPosition = player.setToken(3, 2);// [posx,posy,tokens left,playerTag]

        const initialMap = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', 'W', 'B', 'W', ' '],
            [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];

        const resultMap = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', 'B', 'B', 'B', 'B', 'W', ' '],
            [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];

        const newFlip = new checkAndFlipRow(newPosition[0], newPosition[1], initialMap, player.playerTag);//
        expect(newFlip.asFlip()).toStrictEqual(resultMap);//
    });

    it('Check rows and flip', () => {
        const black = new Player('W');
        const newPosition = black.setToken(4, 5);// [posx,posy,tokens left,playerTag]

        const initialMap = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', 'W', 'B', ' ', ' '],
            [' ', ' ', 'B', 'B', 'B', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];

        const resultMap = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', 'W', 'B', ' ', ' '],
            [' ', ' ', 'B', 'B', 'B', 'W', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];

        const newFlip = new checkAndFlipRow(newPosition[0], newPosition[1], initialMap, black.playerTag);//
        expect(newFlip.asFlip()).toStrictEqual(resultMap);
    });
});
