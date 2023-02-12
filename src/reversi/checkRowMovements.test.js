import {checkRowPossibleMovements} from './checkRowPossibleMovements';
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
        const newFlip = new checkRowPossibleMovements(initialMap, players);//
        expect(newFlip.checkRow()).toStrictEqual([[3, 7], [4, 5], [3, 0]]);//
    });
    it('for white', () => {
        const players = 'W';
        const initialMap = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', 'W', 'B', 'B', 'B', ' ', ' '],
            [' ', ' ', 'B', 'W', 'W', 'B', 'W', ' '],
            [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        const newFlip = new checkRowPossibleMovements(initialMap, players);//
        expect(newFlip.checkRow()).toStrictEqual([[2, 6], [3, 1], [4, 2]]);//
    });
});

describe('Check is the movement is possible', () => {
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
        const newFlip = new checkRowPossibleMovements(initialMap, players);//
        expect(newFlip.asPossibleMovement()).toStrictEqual([{'Moves': [[3, 6]], 'play': [3, 7]},
            {'Moves': [[4, 4]], 'play': [4, 5]}, {'Moves': [[3, 1], [3, 2], [3, 3], [3, 4]], 'play': [3, 0]}]);//
    });
    it('for white', () => {
        const players = 'W';
        const initialMap = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', 'B', 'B', 'W', ' ', ' ', ' '],
            [' ', ' ', 'W', 'W', 'W', 'B', 'W', ' '],
            [' ', ' ', ' ', 'B', 'W', ' ', ' ', ' '],
            [' ', ' ', 'W', 'B', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        const newFlip = new checkRowPossibleMovements(initialMap, players);//
        expect(newFlip.asPossibleMovement()).toStrictEqual([{'Moves': [[5, 3]], 'play': [5, 4]},
            {'Moves': [[2, 2], [2, 3]], 'play': [2, 1]}, {'Moves': [[4, 3]], 'play': [4, 2]}]);//
    });
    it('0 moves for white', () => {
        const players = 'W';
        const initialMap = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', 'B', 'B', ' ', ' ', ' ', ' '],
            [' ', ' ', 'W', 'W', 'W', 'B', 'W', ' '],
            [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        const newFlip = new checkRowPossibleMovements(initialMap, players);//
        const move = newFlip.asPossibleMovement();
        expect(move[0].Moves).toStrictEqual([]);//
    });
});