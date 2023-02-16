import { Turn } from './controlTurn.js';

describe('Test for Turn class', () => {
    it('should be able assing the turn to the next player', () => {
        const actPlayer = 'B';
        const nextPlayer = 1; //White 'W'
        const arrPositions = [[2, 4], [3, 6]];
        let nexturn = new Turn();
        expect(nexturn.assignTurn(arrPositions, actPlayer)).toStrictEqual(nextPlayer);
    });
});