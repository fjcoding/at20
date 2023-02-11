import { Card, CardValue } from './card';
import { PokerHand } from './pokerhand';
import { ValueCounter } from './valuecounter';

describe('Value Counter class tests', () => {
    it('should be able to count 4 and 1 repeated values in a pokerhand', () => {
        const hand = new PokerHand();
        hand.addCard(new Card('C', CardValue.King));
        hand.addCard(new Card('D', CardValue.King));
        hand.addCard(new Card('S', CardValue.King));
        hand.addCard(new Card('H', CardValue.King));
        hand.addCard(new Card('H', CardValue.Queen));

        const counter = new ValueCounter();
        const expectedCount = {
            'K': 4,
            'Q': 1
        };
        expect(counter.countRepeatedValues(hand)).toMatchObject(expectedCount);
    });

    it('should be able to count 3 and 2 repeated values in a pokerhand', () => {
        const hand = new PokerHand();
        hand.addCard(new Card('C', CardValue.Jack));
        hand.addCard(new Card('D', CardValue.Jack));
        hand.addCard(new Card('S', CardValue.Jack));
        hand.addCard(new Card('D', CardValue.Two));
        hand.addCard(new Card('H', CardValue.Two));

        const counter = new ValueCounter();
        const expectedCount = {
            'J': 3,
            '2': 2
        };
        expect(counter.countRepeatedValues(hand)).toMatchObject(expectedCount);
    });

    it('should be able to count 2, 2 and 1 repeated values in a pokerhand', () => {
        const hand = new PokerHand();
        hand.addCard(new Card('C', CardValue.Two));
        hand.addCard(new Card('D', CardValue.Two));
        hand.addCard(new Card('S', CardValue.Four));
        hand.addCard(new Card('D', CardValue.Four));
        hand.addCard(new Card('H', CardValue.Ace));

        const counter = new ValueCounter();
        const expectedCount = {
            '2': 2,
            '4': 2,
            'A': 1
        };
        expect(counter.countRepeatedValues(hand)).toMatchObject(expectedCount);
    });

    it('should be able to count 2, 1, 1 and 1 repeated values in a pokerhand', () => {
        const hand = new PokerHand();
        hand.addCard(new Card('C', CardValue.Queen));
        hand.addCard(new Card('D', CardValue.Queen));
        hand.addCard(new Card('S', CardValue.King));
        hand.addCard(new Card('D', CardValue.Ace));
        hand.addCard(new Card('H', CardValue.Three));

        const counter = new ValueCounter();
        const expectedCount = {
            'Q': 2,
            'K': 1,
            'A': 1,
            '3': 1,
        };
        expect(counter.countRepeatedValues(hand)).toMatchObject(expectedCount);
    });

    it('should be able to count 1 for all values when values in a pokerhand are not repeated', () => {
        const hand = new PokerHand();
        hand.addCard(new Card('C', CardValue.Ace));
        hand.addCard(new Card('D', CardValue.Jack));
        hand.addCard(new Card('S', CardValue.Five));
        hand.addCard(new Card('D', CardValue.Seven));
        hand.addCard(new Card('H', CardValue.Eight));

        const counter = new ValueCounter();
        const expectedCount = {
            'A': 1,
            'J': 1,
            '5': 1,
            '7': 1,
            '8': 1
        };
        expect(counter.countRepeatedValues(hand)).toMatchObject(expectedCount);
    });
});