import { pokerHand } from './pokerHand';
import { handCard } from './cardsPokerHand';


describe('Tests for value in my pokerHand ', () => {
    it('first card', () => {
        const handCards = '2H 3D 5S 9C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const handCard1 = new handCard(handCards);
        const Hand = new pokerHand(handCard1.asHandCard);
        expect(Hand.asHandCard1[0]).toBe('2');
    });

    it('second card', () => {
        const handCards = '2H 3D 5S 9C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const handCard1 = new handCard(handCards);
        const Hand = new pokerHand(handCard1.asHandCard);
        expect(Hand.asHandCard1[1]).toBe('3');
    });
});

describe('Tests for suit in my pokerHand ', () => {
    it('first suit card', () => {
        const handCards = '2H 3D 5S 9C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const handCard1 = new handCard(handCards);
        const Hand = new pokerHand(handCard1.asHandCard);
        expect(Hand.asCardSuit[0]).toBe('H');
    });

    it('second suit card', () => {
        const handCards = '2H 3D 5S 9C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const handCard1 = new handCard(handCards);
        const Hand = new pokerHand(handCard1.asHandCard);
        expect(Hand.asCardSuit[1]).toBe('D');
    });
});


describe('Tests for type of Win ', () => {
    it('High card', () => {
        const handCards = '2H 8D TS AC KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const handCard1 = new handCard(handCards);
        const Hand = new pokerHand(handCard1.asHandCard);
        expect(Hand.asValueCard[0]).toBe('High Card Win');
    });
    it('one pair', () => {
        const handCards = '2H JD 2S 3C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const handCard1 = new handCard(handCards);
        const Hand = new pokerHand(handCard1.asHandCard);
        expect(Hand.asValueCard[0]).toBe('pair');
    });
    it('three of a kind', () => {
        const handCards = '2H 2D 2S AC KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const handCard1 = new handCard(handCards);
        const Hand = new pokerHand(handCard1.asHandCard);
        expect(Hand.asValueCard[0]).toBe('Three of a kind');
    });
    it('two pair', () => {
        const handCards = '2H 3D 2S 3C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const handCard1 = new handCard(handCards);
        const Hand = new pokerHand(handCard1.asHandCard);
        expect(Hand.asValueCard[0]).toBe('Two pair');
    });

    it('full house', () => {
        const handCards = 'AH 3D AS 3C AD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const handCard1 = new handCard(handCards);
        const Hand = new pokerHand(handCard1.asHandCard);
        expect(Hand.asValueCard).toStrictEqual(['Full House', 'A']);
    });
    it('for of a kind', () => {
        const handCards = '2H 2D 2S 3C 2D';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const handCard1 = new handCard(handCards);
        const Hand = new pokerHand(handCard1.asHandCard);
        expect(Hand.asValueCard).toBe('four of a kind');
    });
    it('flush', () => {
        const handCards = '2S 3S 5S 8S KS';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const handCard1 = new handCard(handCards);
        const Hand = new pokerHand(handCard1.asHandCard);
        expect(Hand.asValueCard).toBe('flush');
    });
});

