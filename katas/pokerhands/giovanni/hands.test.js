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
        // card values        [nan, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A]
        //distribution vector [0,   0, 0, 0, 0, 0, 0, 1, 0,  0, 0, 0, 0, 0]
        const resultDist = [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
        expect(Hand.distribution()).toEqual(resultDist);
    });
    it('should be able to obtain the place in distribution when we found a number of cards', () => {
        const testhand = '2C 2H 2C 8C AC';
        const Hand = new Hands(testhand);
        //testHand distribution result[0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]
        const resultPos = 1; //Position when we found 3 cards
        expect(Hand.countPosition(3)).toEqual(resultPos);
        expect(Hand.countPosition(2)).toEqual(false);
        expect(Hand.countPosition(4)).toEqual(false);
    });
    it('should be able to obtain the place, in the distribution, of the highest card in a straight of four cards', () => {
        const testhand = '2H 7H 6S 4D, 5S';
        const Hand = new Hands(testhand);
        const result = 6;
        expect(Hand.highStraightCard()).toEqual(result);
    });
    //At this point the hands are ranked in scale of 0 to 8
    it('should be able to return a value  8 that represents the rank of the hand', () => {
        const testhand = 'AS 10S QS KS JS';
        const Hand = new Hands(testhand);
        const rank = 8;
        expect(Hand.handRank()).toEqual(rank);
    });
    it('should be able to return a value  7 that represents the rank of the hand', () => {
        const testhand = '7H 7C 7D 3D 7S';
        const Hand = new Hands(testhand);
        const rank = 7;
        expect(Hand.handRank()).toEqual(rank);
    });
    it('should be able to return a value  6 that represents the rank of the hand', () => {
        const testhand = '5C 8D 5H 8S 8H';
        const Hand = new Hands(testhand);
        const rank = 6;
        expect(Hand.handRank()).toEqual(rank);
    });
    it('should be able to return a value  5 that represents the rank of the hand', () => {
        const testhand = 'AC 5C 3C 10C 7C';
        const Hand = new Hands(testhand);
        const rank = 5;
        expect(Hand.handRank()).toEqual(rank);
    });
    it('should be able to return a value  4 that represents the rank of the hand', () => {
        const testhand = '3H 7H 6S 4D 5S';
        const Hand = new Hands(testhand);
        const rank = 4;
        expect(Hand.handRank()).toEqual(rank);
    });
    it('should be able to return a value  3 that represents the rank of the hand', () => {
        const testhand = '5S 4C AD 4S 4H';
        const Hand = new Hands(testhand);
        const rank = 3;
        expect(Hand.handRank()).toEqual(rank);
    });
    it('should be able to return a value  1 that represents the rank of the hand', () => {
        const testhand = '2C 3D 4S 5H 2D';
        const Hand = new Hands(testhand);
        const rank = 1;
        expect(Hand.handRank()).toEqual(rank);
    });
    it('should be able to return a value  0 that represents the rank of the hand', () => {
        const testhand = 'AC 5C 10C 7C 3S';
        const Hand = new Hands(testhand);
        const rank = 0;
        expect(Hand.handRank()).toEqual(rank);
    });
    it('should be able to return a value  2 that represents the rank of the hand', () => {
        const testhand = '2C 3D 4S 3H 2D';
        const Hand = new Hands(testhand);
        const rank = 2;
        expect(Hand.handRank()).toEqual(rank);
    });
});