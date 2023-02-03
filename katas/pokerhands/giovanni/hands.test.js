import { Hands } from './hands';

describe('Test for Hands class', () => {
    it('should be able to obtain an array of separate string cards from a hand', () => {
        const testhand = '2C 3H 4S 8C AH';
        const resultHand = ['2C', '3H', '4S', '8C', 'AH'];
        const Hand = new Hands(testhand);
        expect(Hand.separateCards()).toEqual(resultHand);
    });
});