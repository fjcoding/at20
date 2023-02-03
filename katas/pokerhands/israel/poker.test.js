// C, D, H, S
// 2, 3, 4, 5, 6, 7, 8, 9, T, J, Q, K, A
import { pokerGame } from './poker';

describe('Test for poker class', () => {
    it('Test for recognition "Straight flush" case true and false output', () => {
        const hand1 = ['TC', 'QC', 'JC', 'KC', 'AC'];
        const hand2 = ['2C', '2D', '3C', '4C', 'AC'];
        const pokerGame1 = new pokerGame(hand1, hand2);
        expect(pokerGame1.isSF(hand1)).toStrictEqual([true, 14, 0]);
        expect(pokerGame1.isSF(hand2)).toStrictEqual([false, 0, 0]);
    });
    it('Test for recognition "Four of a kind" case true and false output', () => {
        const hand1 = ['JC', 'JC', 'JC', 'JC', '2C'];
        const hand2 = ['2C', '1D', '2C', '5C', '5C'];
        const pokerGame1 = new pokerGame(hand1, hand2);
        expect(pokerGame1.isSK(hand1)).toStrictEqual([true, 11, 2]);
        expect(pokerGame1.isSK(hand2)).toStrictEqual([false, 0, 0]);
    });
});