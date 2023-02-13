import {checkBestMove} from './computerBestMove';
describe('Check for plays on the rows', () => {
    it('for black', () => {
        const players = 'B';
        const initialMap = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', 'W', 'W', 'W', 'W', 'B', 'W', ' '],
            [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        const bestMove = new checkBestMove(initialMap, players);
        expect(bestMove.bestMove()).toStrictEqual([3,0]);
    });

    it('for white', () => {
        const players = 'W';
        const initialMap = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', 'W', 'B', 'B', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', 'W', 'B', 'W', ' '],
            [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
            [' ', 'B', 'B', 'B', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        const bestMove = new checkBestMove(initialMap, players);
        expect(bestMove.bestMove()).toStrictEqual([5, 0]);
    });

});
