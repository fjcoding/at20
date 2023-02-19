import { Turn } from './controlTurn.js';

describe('Test for Turn class', () => {
    it('should be able assing the turn to the next player', () => {
        const actPlayer = 'B';
        const nextPlayer = 1; //White 'W'
        const arrPositions = [[2, 4], [3, 6]];
        let nexturn = new Turn();
        expect(nexturn.assignTurn(arrPositions, actPlayer)).toStrictEqual(nextPlayer);
    });
    it('should be able assing the turn to the next player', () => {
        const actPlayer = 'B';
        const nextPlayer = 0; //Black 'B'
        const arrPositions = [];
        let nexturn = new Turn();
        expect(nexturn.assignTurn(arrPositions, actPlayer)).toStrictEqual(nextPlayer);
    });
    it('should be able assing the turn to the next player', () => {
        const actPlayer = 'W';
        const nextPlayer = 0; //Black 'B'
        const arrPositions = [[2, 4], [3, 6]];
        let nexturn = new Turn();
        expect(nexturn.assignTurn(arrPositions, actPlayer)).toStrictEqual(nextPlayer);
    });

    it('should be able switch the if the player has no moves', () => {
        const actPlayer = 'W';
        const tokensLeft = 5;
        const nextPlayer = 0; //Black 'B'
        const arrPositions = [];
        let nexturn = new Turn();
        expect(nexturn.switchPlayerWithoutMovesOrTokens(arrPositions, actPlayer, tokensLeft)).toStrictEqual(nextPlayer);
    });
    it('should be able switch the if the player has no tokens', () => {
        const actPlayer = 'B';
        const tokensLeft = 0;
        const nextPlayer = 1; //White 'W'
        const arrPositions = [[2, 4], [3, 6]];
        let nexturn = new Turn();
        expect(nexturn.switchPlayerWithoutMovesOrTokens(arrPositions, actPlayer, tokensLeft)).toStrictEqual(nextPlayer);
    });
    it('should be able switch the if the player has no moves', () => {
        const actPlayer = 'B';
        const tokensLeft = 5;
        const nextPlayer = 1; //White 'W'
        const arrPositions = [];
        let nexturn = new Turn();
        expect(nexturn.switchPlayerWithoutMovesOrTokens(arrPositions, actPlayer, tokensLeft)).toStrictEqual(nextPlayer);
    });
    it('should be able switch the if the player has no tokens', () => {
        const actPlayer = 'W';
        const tokensLeft = 0;
        const nextPlayer = 0; //Black 'B'
        const arrPositions = [[2, 4], [3, 6]];
        let nexturn = new Turn();
        expect(nexturn.switchPlayerWithoutMovesOrTokens(arrPositions, actPlayer, tokensLeft)).toStrictEqual(nextPlayer);
    });
    it('should be able switch the if the player has no moves', () => {
        const actPlayer = 'B';
        const tokensLeft = 7;
        const nextPlayer = 0; //White 'W'
        const arrPositions = [[2, 4], [3, 6]];
        let nexturn = new Turn();
        expect(nexturn.switchPlayerWithoutMovesOrTokens(arrPositions, actPlayer, tokensLeft)).toStrictEqual(nextPlayer);
    });
});