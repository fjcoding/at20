import {getRowLimit} from './getRowLimit';
describe('Check for plays on the rows to the rigth', () => {
    it('for black', () => {
        const player = 'B';
        const initialMap = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', 'W', 'W', 'B', 'W', 'B', 'W', ' '],
            [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        const moves = new getRowLimit(initialMap, player);
        expect(moves.rowLimitToRight()).toStrictEqual([[3, 7], [4, 5]]);
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
        const moves = new getRowLimit(initialMap, players);
        expect(moves.rowLimitToRight()).toStrictEqual([[2, 6]]);
    });
});

describe('Check for plays on the rows to the left', () => {
    it('for black', () => {
        const player = 'B';
        const initialMap = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', 'W', 'W', 'B', 'W', 'B', 'W', ' '],
            [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        const moves = new getRowLimit(initialMap, player);
        expect(moves.rowLimitToLeft()).toStrictEqual([[3, 0]]);
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
        const moves = new getRowLimit(initialMap, players);
        expect(moves.rowLimitToLeft()).toStrictEqual([[3, 1]]);
    });
});
