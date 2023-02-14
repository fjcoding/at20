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

    it('should be able of identify a four of a kind pokerhand', () => {
        const identifier = new HandIdentifier();
        const fourOfAKindHand = new PokerHand();
        fourOfAKindHand.addCard(new Card('C', CardValue.Five));
        fourOfAKindHand.addCard(new Card('H', CardValue.Five));
        fourOfAKindHand.addCard(new Card('S', CardValue.Five));
        fourOfAKindHand.addCard(new Card('D', CardValue.Five));
        fourOfAKindHand.addCard(new Card('C', CardValue.Nine));
        expect(identifier.identify(fourOfAKindHand)).toBe('Four of a Kind');

        let notFourOfAKind = new PokerHand();
        notFourOfAKind.addCard(new Card('C', CardValue.Five));
        notFourOfAKind.addCard(new Card('H', CardValue.Six));
        notFourOfAKind.addCard(new Card('C', CardValue.Seven));
        notFourOfAKind.addCard(new Card('C', CardValue.Eight));
        notFourOfAKind.addCard(new Card('C', CardValue.Nine));
        expect(identifier.identify(notFourOfAKind)).not.toBe('Four of a Kind');

        notFourOfAKind = new PokerHand();
        notFourOfAKind.addCard(new Card('C', CardValue.Five));
        notFourOfAKind.addCard(new Card('C', CardValue.Six));
        notFourOfAKind.addCard(new Card('C', CardValue.Jack));
        notFourOfAKind.addCard(new Card('C', CardValue.Eight));
        notFourOfAKind.addCard(new Card('C', CardValue.Nine));
        expect(identifier.identify(notFourOfAKind)).not.toBe('Four of a Kind');
    });
});