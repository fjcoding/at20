import { Card, CardValue } from './card';
import { HandChecker } from './handchecker';
import { PokerHand } from './pokerhand';

describe('HandChecker tests', () => {
    it('should be able to say if it has consecutive values', () => {
        const checker = new HandChecker();
        const nonConsValues = new PokerHand();
        const twoClubs = new Card('C', CardValue.Two);
        const aceSpades = new Card('S', CardValue.Ace);
        const queenHearts = new Card('H', CardValue.Queen);
        const fiveDiamond = new Card('D', CardValue.Five);
        const fourClubs = new Card('C', CardValue.Four);
        nonConsValues.addCard(twoClubs);
        nonConsValues.addCard(aceSpades);
        nonConsValues.addCard(queenHearts);
        nonConsValues.addCard(fiveDiamond);
        nonConsValues.addCard(fourClubs);
        expect(checker.hasConsecutiveValues(nonConsValues)).toBe(false);

        const consValues = new PokerHand();
        const twoSpades = new Card('S', CardValue.Two);
        const threeSpades = new Card('S', CardValue.Three);
        const fourHearts = new Card('H', CardValue.Four);
        const fiveHearts = new Card('H', CardValue.Five);
        const sixClubs = new Card('C', CardValue.Six);
        consValues.addCard(twoSpades);
        consValues.addCard(threeSpades);
        consValues.addCard(fourHearts);
        consValues.addCard(fiveHearts);
        consValues.addCard(sixClubs);
        expect(checker.hasConsecutiveValues(consValues)).toBe(true);
    });
});