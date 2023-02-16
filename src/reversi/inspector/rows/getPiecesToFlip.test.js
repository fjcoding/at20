import {getPiecesToFlip} from './getPiecesToFlip';
describe('Check for coincidences in rows with a new piece on the board', () => {
    it('black piece on 3,2', () => {
        const player = 'B';
        // const newToken = whitePlace.setToken(3, 2);// [posx,posy,tokens left,playerTag]
        const position = [3, 2];
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
        const newFlip = new getPiecesToFlip();//
        expect(newFlip.getPiecesToFlipRigth(position,initialMap,player)).toStrictEqual([[3, 3], [3, 4]]);//
    });
    it('white piece on 4,5', () => {
        const player = 'W';
        // const newToken = whitePlace.setToken(3, 2);// [posx,posy,tokens left,playerTag]
        const position = [4, 5];
        const initialMap = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', 'W', 'B', 'W', ' '],
            [' ', ' ', ' ', 'W', 'B', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        const newFlip = new getPiecesToFlip();//
        expect(newFlip.getPiecesToFlipLeft(position,initialMap,player)).toStrictEqual([[4, 4]]);//
    });
});