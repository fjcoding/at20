import {RowInspector} from './RowInspector';
describe('Check for coincidences in rows with a new piece on the board', () => {
    it('black piece on 3,2', () => {
        const player = 'B';
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
        const newFlip = new RowInspector(position, initialMap, player);//
        expect(newFlip.checkRow()).toStrictEqual([[3, 3], [3, 4]]);//
    });

    it('white piece on 4,5', () => {
        const player = 'W';
        const position = [4, 5];
        const initialMap = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', 'B', 'W', ' ', ' ', ' ', ' '],
            [' ', ' ', 'B', 'W', ' ', ' ', ' ', ' '],
            [' ', ' ', 'B', 'W', 'W', 'B', 'W', ' '],
            [' ', 'W', 'B', 'B', 'B', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        const newFlip = new RowInspector(position, initialMap, player);//
        expect(newFlip.checkRow()).toStrictEqual([[4, 4], [4, 3], [4, 2]]);//
    });
});

