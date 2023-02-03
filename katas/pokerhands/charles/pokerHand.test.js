import { PokerHand } from './pokerHand';

describe('Tests for hand class', () => {
    it('should be able to show if the poker hand is High Card', () => {
        let cardList = 'Black: 2H 3D 5S 9C KD';
        let pokerHand = cardList.split(': ');
        let hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isHighCard()).toBe(true);

        cardList = 'Black: 2H 4S 4C 2D 4H';
        pokerHand = cardList.split(': ');
        hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isHighCard()).toBe(false);
    });
});