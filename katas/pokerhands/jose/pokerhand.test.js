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
});