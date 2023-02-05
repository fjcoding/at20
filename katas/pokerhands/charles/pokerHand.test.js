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

        cardList = 'Black: 2H 3D 3S 2C 3H';
        pokerHand = cardList.split(': ');
        hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isThreeKind()).toBe(3);
    });

    it('should be able to show if the poker hand is straight', () => {
        let cardList = 'Black: 8H 3D 9S 5C 2D';
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

    it('should be able to show if the poker hand is flush', () => {
        let cardList = 'White: 2S 8S AS QS 3S';
        let pokerHand = cardList.split(': ');
        let hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isFlush()).toBe(true);

        cardList = 'Black: 9H AD TS 2C KD';
        pokerHand = cardList.split(': ');
        hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isFlush()).toBe(false);

        cardList = 'Black: 2H 3D 5S 6C 4H';
        pokerHand = cardList.split(': ');
        hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isFlush()).toBe(false);

        cardList = 'Black: JH TH AS KH QH';
        pokerHand = cardList.split(': ');
        hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isFlush()).toBe(false);

        cardList = 'Black: 9D AD TD 2D KD';
        pokerHand = cardList.split(': ');
        hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isFlush()).toBe(true);
    });

    it('should be able to show if the poker hand is full house', () => {
        let cardList = 'Black: 2H 4S 4C 2D 4H';
        let pokerHand = cardList.split(': ');
        let hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isFullHouse()).toBe(true);

        cardList = 'Black: 9H AD TS 2C KD';
        pokerHand = cardList.split(': ');
        hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isFullHouse()).toBe(false);

        cardList = 'Black: 2H 4D 4S 6C 4H';
        pokerHand = cardList.split(': ');
        hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isFullHouse()).toBe(false);
    });

    it('should be able to show if the poker hand is four of a king', () => {
        let cardList = 'Black: 2H 4S 4C 4D 4H';
        let pokerHand = cardList.split(': ');
        let hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isFourKing()).toBe(4);

        cardList = 'Black: 9H AD TS 2C KD';
        pokerHand = cardList.split(': ');
        hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isFourKing()).toBe(0);

        cardList = 'Black: 2H 3D 3S 2C 3H';
        pokerHand = cardList.split(': ');
        hand = new PokerHand(pokerHand[1].split(' '));
        expect(hand.isFourKing()).toBe(0);
    });
});