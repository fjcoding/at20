import { Card, CardValue } from './card';
import { HandIdentifier } from './handidentifier';
import { PokerHand } from './pokerhand';

describe('Hand Identifier tests', () => {
    it('should be able of identify a straight flush pokerhand', () => {
        const identifier = new HandIdentifier();
        const straightFlushHand = new PokerHand();
        straightFlushHand.addCard(new Card('C', CardValue.Five));
        straightFlushHand.addCard(new Card('C', CardValue.Six));
        straightFlushHand.addCard(new Card('C', CardValue.Seven));
        straightFlushHand.addCard(new Card('C', CardValue.Eight));
        straightFlushHand.addCard(new Card('C', CardValue.Nine));
        expect(identifier.identify(straightFlushHand)).toBe('Straight Flush');

        let notStraightFlushHand = new PokerHand();
        notStraightFlushHand.addCard(new Card('C', CardValue.Five));
        notStraightFlushHand.addCard(new Card('H', CardValue.Six));
        notStraightFlushHand.addCard(new Card('C', CardValue.Seven));
        notStraightFlushHand.addCard(new Card('C', CardValue.Eight));
        notStraightFlushHand.addCard(new Card('C', CardValue.Nine));
        expect(identifier.identify(notStraightFlushHand)).not.toBe('Straight Flush');

        notStraightFlushHand = new PokerHand();
        notStraightFlushHand.addCard(new Card('C', CardValue.Five));
        notStraightFlushHand.addCard(new Card('C', CardValue.Six));
        notStraightFlushHand.addCard(new Card('C', CardValue.Jack));
        notStraightFlushHand.addCard(new Card('C', CardValue.Eight));
        notStraightFlushHand.addCard(new Card('C', CardValue.Nine));
        expect(identifier.identify(notStraightFlushHand)).not.toBe('Straight Flush');
    });
});