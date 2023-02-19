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
        const newFlip = new RowInspector();//
        expect(newFlip.checkRow(position, initialMap, player)).toStrictEqual([[3, 3], [3, 4]]);//
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
        const newFlip = new RowInspector();//
        expect(newFlip.checkRow(position, initialMap, player)).toStrictEqual([[4, 4], [4, 3], [4, 2]]);//
    });
});

describe('Check for plays on the rows', () => {
    it('for black', () => {
        const players = 'B';
        const initialMap = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', 'W', 'B', 'B', 'W', 'B', 'W', ' '],
            [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        const moves = new RowInspector();//
        expect(moves.checkPossibleMoves(initialMap, players)).toStrictEqual([[3, 0], [3, 7], [4, 5]]);//
    });
    it('for white', () => {
        const players = 'W';
        const initialMap = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', 'W', 'B', 'B', 'B', ' ', ' '],
            [' ', ' ', 'B', 'W', 'W', 'B', 'W', ' '],
            [' ', ' ', ' ', 'B', 'B', 'B', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        const moves = new RowInspector();//
        expect(moves.checkPossibleMoves(initialMap, players)).toStrictEqual([[3, 1], [2, 6]]);//
    });
});