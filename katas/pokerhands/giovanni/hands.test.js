import { Hands } from './hands';

describe('Test for Hands class', () => {
    it('should be able to obtain an array of separate string cards from a hand', () => {
        const testhand = '2C 3H 4S 8C AH';
        const resultHand = ['2C', '3H', '4S', '8C', 'AH'];
        const Hand = new Hands(testhand);
        expect(Hand.separateCards()).toEqual(resultHand);
    });
    it('should be able to obtain true or false if a hand is a Flush', () => {
        const testhand = '2C 3C 4C 8C AC';
        const Hand = new Hands(testhand);
        expect(Hand.isFlush()).toEqual(true);
    });
    it('should be able to obtain a distribution vector of the cards from a hand', () => {
        const testhand = '2C 3C 4C 8C AC';
        const Hand = new Hands(testhand);
        // card values        [2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A]
        //distribution vector [0, 0, 0, 0, 0, 0, 1, 0,  0, 0, 0, 0, 0]
        const resultDist = [1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
        expect(Hand.distribution()).toEqual(resultDist);
    });
    it('should be able to obtain the place in distrigution when we found a number of cards', () => {
        const testhand = '2C 2H 2C 8C AC';
        const Hand = new Hands(testhand);
        //testHand distribution result[3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]
        const resultPos = 0; //Position when we found 3 cards
        expect(Hand.countPosition(3)).toEqual(resultPos);
        expect(Hand.countPosition(2)).toEqual(false);
        expect(Hand.countPosition(4)).toEqual(false);
    });
});