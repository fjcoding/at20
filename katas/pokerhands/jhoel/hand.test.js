import Hand from './hand';

describe('Test for Hand Class', () => {
    //hand shoul be 5 cards
    // it('should to assigned the correct cards to hand', () => {
    //     // const hand = new Hand('2H 3D 5S 9C KD');
    //     // expect(hand.getCardString(0)).toBe('2H');
    //     // expect(hand.getCardString(1)).toBe('3D');
    //     // expect(hand.getCardString(2)).toBe('5S');
    //     // expect(hand.getCardString(3)).toBe('9C');
    //     // expect(hand.getCardString(4)).toBe('KD');
    // });

    // it('should return the correct hand\' rank', () => {
    //     //High Card -> 2H 3D 5S 9C KD
    //     //Pair -> 2H 2D 5S 9C KD
    //     //Two Pairs -> 2H 2D 5S 5C KD
    //     //Three of a Kind -> 2H 2D 2S 9C KD
    //     //Straight -> 2H 3D 4S 5C 6D
    //     //Flush -> 2H 3H 4H 5H 6H
    //     //Full House -> 2H 2D 2S 5C 5D
    //     //Four of a Kind -> 2H 2D 2S 2C KD
    //     //Straight Flush -> 2H 3H 4H 5H 6H
    //     let hand;

    //     hand = new Hand('2H 3D 5S 9C KD');
    //     expect(hand.getRankString()).toBe('High Card');

    //     hand = new Hand('2H 2D 5S 9C KD');
    //     expect(hand.getRankString()).toBe('Pair');

    //     hand = new Hand('2H 2D 5S 5C KD');
    //     expect(hand.getRankString()).toBe('Two Pairs');

    //     hand = new Hand('2H 2D 2S 9C KD');
    //     expect(hand.getRankString()).toBe('Three of a Kind');

    //     hand = new Hand('2H 3D 4S 5C 6D');
    //     expect(hand.getRankString()).toBe('Straight');

    //     hand = new Hand('2H 3H TH 1H 8H');
    //     expect(hand.getRankString()).toBe('Flush');

    //     hand = new Hand('2H 2D 2S 5C 5D');
    //     expect(hand.getRankString()).toBe('Full House');

    //     hand = new Hand('4H 4D 4S 4C KD');
    //     expect(hand.getRankString()).toBe('Four of a Kind');

    //     hand = new Hand('2H 3H 4H 5H 6H');
    //     expect(hand.getRankString()).toBe('Straight Flush');
    // });

    it('should return win(1),tie(0) or lose(-1) when the hand is compared with other hand', () => {
        let hand1;
        let hand2;

        hand1 = new Hand('2H 3D 5S 9C KD');
        hand2 = new Hand('2C 3H 4S 8C AH');
        expect(hand1.compareWith(hand2)).toBe(-1);

        hand1 = new Hand('3D 3H 3C TS KH');
        hand2 = new Hand('2H 3D 4S 5C 6D');
        expect(hand1.compareWith(hand2)).toBe(-1);

        hand1 = new Hand('4H 4D 4S 4C 9D');
        hand2 = new Hand('AH AD AS AC 6D');
        expect(hand1.compareWith(hand2)).toBe(-1);

        hand1 = new Hand('2H 4S 4C 2D 4H');
        hand2 = new Hand('2S 8S AS QS 3S');
        expect(hand1.compareWith(hand2)).toBe(1);

        hand1 = new Hand('2H 2S KC KD 4H');
        hand2 = new Hand('2S 2S 7C 7C 3S');
        expect(hand1.compareWith(hand2)).toBe(1);

        hand1 = new Hand('2H 3D 5S 9C 9D');
        hand2 = new Hand('2H 3D 5S 9C 9D');
        expect(hand2.compareWith(hand1)).toBe(0);
    });
});
