import {checkRowPossibleMovements} from './checkRowMovements';
describe('Check for plays on the rows', () => {
    it('for black', () => {
        const players = 'B';
        const initialMap = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', 'W', ' ', 'B', 'W', 'B', 'W', ' '],
            [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        const moves = new checkRowPossibleMovements(initialMap, players);//
        expect(moves.checkPossibleMoves()).toStrictEqual(0);//
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
        const moves = new checkRowPossibleMovements(initialMap, players);//
        expect(moves.checkPossibleMoves()).toStrictEqual([[3, 1], [2, 6]]);//
    });
});