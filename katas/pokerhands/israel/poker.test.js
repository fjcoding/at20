// C, D, H, S
// 2, 3, 4, 5, 6, 7, 8, 9, T, J, Q, K, A
import { pokerGame } from './poker';

describe('Test for poker rules', () => {
    it('Test for recognition "Straight flush" case true and false output', () => {
        const hand1 = ['TC', 'QC', 'JC', 'KC', 'AC'];
        const hand2 = ['2C', '2D', '3C', '4C', 'AC'];
        const pokerGame1 = new pokerGame();
        expect(pokerGame1.isSF(hand1)).toStrictEqual([true, 14, 0]);
        expect(pokerGame1.isSF(hand2)).toStrictEqual([false, 0, 0]);
    });
    it('Test for recognition "Four of a kind" case true and false output', () => {
        const hand1 = ['JC', 'JD', 'JC', 'JD', '2C'];
        const hand2 = ['2C', '2H', '2D', '5C', '5H'];
        const pokerGame1 = new pokerGame();
        expect(pokerGame1.isSK(hand1)).toStrictEqual([true, 11, 2]);
        expect(pokerGame1.isSK(hand2)).toStrictEqual([false, 0, 0]);
    });
    it('Test for recognition "Straing" case true and false output', () => {
        const hand1 = ['5C', '4D', '3H', '7C', '6D'];
        const hand2 = ['3C', '4C', '5C', '6C', '7C'];
        const pokerGame1 = new pokerGame();
        expect(pokerGame1.isStraight(hand1)).toStrictEqual([true, 7, 0]);
        expect(pokerGame1.isStraight(hand2)).toStrictEqual([false, 0, 0]);
    });
    it('Test for recognition "Flush" case true and false output', () => {
        const hand1 = ['5D', '4D', '2D', '7D', '6D'];
        const hand2 = ['3C', '4D', '5C', '6C', '7C'];
        const pokerGame1 = new pokerGame();
        expect(pokerGame1.isFlush(hand1)).toStrictEqual([true, 7, 0]);
        expect(pokerGame1.isFlush(hand2)).toStrictEqual([false, 0, 0]);
    });
    it('Test for recognition "tri" case true and false output', () => {
        const hand1 = ['AC', 'AC', 'AC', '4C', '2S'];
        const hand2 = ['2C', '2D', '2C', '5C', '5C'];
        const hand3 = ['2C', '2D', '2C', '2C', '5C'];
        const pokerGame1 = new pokerGame();
        expect(pokerGame1.isTri(hand1)).toStrictEqual([true, 14, 4]);
        expect(pokerGame1.isTri(hand2)).toStrictEqual([false, 0, 0]);
        expect(pokerGame1.isTri(hand3)).toStrictEqual([false, 0, 0]);
    });
    it('Test for recognition "pair" case true and false output', () => {
        const hand1 = ['7C', '7C', '3C', '4D', '2C'];
        const hand2 = ['2C', '2S', '3D', '5C', '5C'];
        const hand3 = ['2C', '2D', '3C', '3C', '3C'];
        const pokerGame1 = new pokerGame();
        expect(pokerGame1.isPair(hand1)).toStrictEqual([true, 7, 4]);
        expect(pokerGame1.isPair(hand2)).toStrictEqual([false, 0, 0]);
        expect(pokerGame1.isPair(hand3)).toStrictEqual([false, 0, 0]);
    });
    it('Test for recognition "2pair" case true and false output', () => {
        const hand1 = ['AC', 'AC', '3D', '3S', '8C'];
        const hand2 = ['2C', '2D', '2C', '2C', '5C'];
        const hand3 = ['JC', 'JC', 'JS', 'TC', '5C'];
        const hand4 = ['2C', '2D', '5C', '3C', '8C'];
        const pokerGame1 = new pokerGame();
        expect(pokerGame1.is2Pair(hand1)).toStrictEqual([true, 14, 8]);
        expect(pokerGame1.is2Pair(hand2)).toStrictEqual([false, 0, 0]);
        expect(pokerGame1.is2Pair(hand3)).toStrictEqual([false, 0, 0]);
        expect(pokerGame1.is2Pair(hand4)).toStrictEqual([false, 0, 0]);
    });
    it('Test for recognition "full" case true and false output', () => {
        const hand1 = ['AC', 'AC', '6C', '6C', '6C'];
        const hand2 = ['2C', '2D', '2C', '2C', '5C'];
        const hand3 = ['2C', '2D', '3C', '1C', '3C'];
        const hand4 = ['2C', '2D', '2C', '2C', '2C'];
        const pokerGame1 = new pokerGame();
        expect(pokerGame1.isFull(hand1)).toStrictEqual([true, 6, 14]);
        expect(pokerGame1.isFull(hand2)).toStrictEqual([false, 0, 0]);
        expect(pokerGame1.isFull(hand3)).toStrictEqual([false, 0, 0]);
        expect(pokerGame1.isFull(hand4)).toStrictEqual([false, 0, 0]);
    });
    it('Test for recognition "hight card" case true and false output', () => {
        const hand1 = ['KC', '3C', '4C', '6D', '7C'];
        const hand2 = ['2C', '3D', '4C', '5C', '6C'];
        const hand3 = ['2C', '2D', '3C', '1C', '3C'];
        const hand4 = ['2C', '2D', '2C', '2C', '2C'];
        const pokerGame1 = new pokerGame();
        expect(pokerGame1.isHightCard(hand1)).toStrictEqual([true, 13, 0]);
        expect(pokerGame1.isHightCard(hand2)).toStrictEqual([false, 0, 0]);
        expect(pokerGame1.isHightCard(hand3)).toStrictEqual([false, 0, 0]);
        expect(pokerGame1.isHightCard(hand4)).toStrictEqual([false, 0, 0]);
    });
});

describe('Test for poker hands', () => {
    it('Test for "value card" with hand "hight card", "pair" and "2pair"', () => {
        const hand1 = ['KC', '3C', '4S', '6C', '7C'];
        const hand2 = ['2C', '2D', '3C', 'AC', '5C'];
        const hand3 = ['2C', '2D', '4C', '4S', '3C'];
        const pokerGame1 = new pokerGame();
        expect(pokerGame1.getScoreHand(hand1)).toStrictEqual(11300);
        expect(pokerGame1.getScoreHand(hand2)).toStrictEqual(20214);
        expect(pokerGame1.getScoreHand(hand3)).toStrictEqual(30403);
    });
    it('Test for "value card" with hand "tri", "Straight" and "Flush"', () => {
        const hand1 = ['JC', 'JC', 'JS', 'TC', '5C'];
        const hand2 = ['5D', '6S', '7D', '8D', '9D'];
        const hand3 = ['2D', 'KD', '3D', '3D', '3D'];
        const pokerGame1 = new pokerGame();
        expect(pokerGame1.getScoreHand(hand1)).toStrictEqual(41110);
        expect(pokerGame1.getScoreHand(hand2)).toStrictEqual(50900);
        expect(pokerGame1.getScoreHand(hand3)).toStrictEqual(61300);
    });
    it('Test for "value card" with hand "Full", "Four of a kind" and "Straight flush"', () => {
        const hand1 = ['JC', 'JC', 'JS', 'TC', 'TC'];
        const hand2 = ['8D', '8S', '8D', '8D', '9D'];
        const hand3 = ['4D', '5D', '6D', '7D', '8D'];
        const pokerGame1 = new pokerGame();
        expect(pokerGame1.getScoreHand(hand1)).toStrictEqual(71110);
        expect(pokerGame1.getScoreHand(hand2)).toStrictEqual(80809);
        expect(pokerGame1.getScoreHand(hand3)).toStrictEqual(90800);
    });
});