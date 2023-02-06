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

        cardList = 'Black: 2H 3D 2S 2C 3H';
        pokerHand = cardList.split(': ');
        hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isHighCard()).toBe(false);
    });

    it('should be able to show how pairs there are in the poker hand', () => {
        let cardList = 'Black: 2H 3D 5S 9C KD';
        let pokerHand = cardList.split(': ');
        let hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.countPairs()).toBe(0);

        cardList = 'Black: 2H 3D 5S 2C KD';
        pokerHand = cardList.split(': ');
        hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.countPairs()).toBe(1);

        cardList = 'Black: 2H 3D 5S 2C 3H';
        pokerHand = cardList.split(': ');
        hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.countPairs()).toBe(2);

        cardList = 'Black: 2H 3D 2S 2C 3H';
        pokerHand = cardList.split(': ');
        hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.countPairs()).toBe(1);
    });

    it('should be able to show if there is three of a kind in the poker hand', () => {
        let cardList = 'Black: 2H 3D 5S 9C KD';
        let pokerHand = cardList.split(': ');
        let hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isThreeKind()).toBe(0);

        cardList = 'Black: 2H 3D 5S 2C KD';
        pokerHand = cardList.split(': ');
        hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isThreeKind()).toBe(0);

        cardList = 'Black: 2H 3D 5S 2C 3H';
        pokerHand = cardList.split(': ');
        hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isThreeKind()).toBe(0);

        cardList = 'Black: 2H 3D 2S 2C 3H';
        pokerHand = cardList.split(': ');
        hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isThreeKind()).toBe(2);
    });

    it('should be able to show if the poker hand is straight', () => {
        let cardList = 'Black: 8H 3D 9S 5C 2D';
        // let cardList = 'Black: 8H 6D 9S 5C 7D';
        let pokerHand = cardList.split(': ');
        let hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isStraight()).toBe(false);

        cardList = 'Black: 9H AD TS 2C KD';
        pokerHand = cardList.split(': ');
        hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isStraight()).toBe(false);

        cardList = 'Black: 2H 3D 5S 6C 4H';
        pokerHand = cardList.split(': ');
        hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isStraight()).toBe(true);

        cardList = 'Black: JH TD AS KC QH';
        pokerHand = cardList.split(': ');
        hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isStraight()).toBe(true);

        cardList = 'Black: 4H 2D AS 5C 3H';
        pokerHand = cardList.split(': ');
        hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isStraight()).toBe(true);
    });
});