import { Card, CardValue } from './card';
import { PokerHand } from './pokerhand';

describe('Tests for PokerHand class', () => {
    it('should be able to have five cards', () => {
        const pokerHand = new PokerHand();
        pokerHand.addCard(new Card('C', CardValue.Two));
        pokerHand.addCard(new Card('S', CardValue.Ace));
        pokerHand.addCard(new Card('H', CardValue.Queen));
        pokerHand.addCard(new Card('D', CardValue.Five));
        pokerHand.addCard(new Card('C', CardValue.Four));

        expect(pokerHand.cards.length).toBe(5);
    });

    it('should be able to sort cards based on card values (lowest to highest)', () => {
        const pokerHand = new PokerHand();
        const twoClubs = new Card('C', CardValue.Two);
        const aceSpades = new Card('S', CardValue.Ace);
        const queenHearts = new Card('H', CardValue.Queen);
        const fiveDiamond = new Card('D', CardValue.Five);
        const fourClubs = new Card('C', CardValue.Four);
        pokerHand.addCard(twoClubs);
        pokerHand.addCard(aceSpades);
        pokerHand.addCard(queenHearts);
        pokerHand.addCard(fiveDiamond);
        pokerHand.addCard(fourClubs);
        pokerHand.sortCards();

        expect(Object.is(pokerHand.cards[0], twoClubs)).toBe(true);
        expect(Object.is(pokerHand.cards[1], fourClubs)).toBe(true);
        expect(Object.is(pokerHand.cards[2], fiveDiamond)).toBe(true);
        expect(Object.is(pokerHand.cards[3], queenHearts)).toBe(true);
        expect(Object.is(pokerHand.cards[4], aceSpades)).toBe(true);
    });
});