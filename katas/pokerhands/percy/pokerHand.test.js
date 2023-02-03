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


describe('Tests for type of Win ', () => {
    it('High card', () => {
        const handCards = '2H 8D TS AC KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const handCard1 = new handCard(handCards);
        const Hand = new pokerHand(handCard1.asHandCard);
        expect(Hand.asValueCard).toBe('AC High Card Win');
    });
    it('one pair', () => {
        const handCards = '2H JD 2S 3C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const handCard1 = new handCard(handCards);
        const Hand = new pokerHand(handCard1.asHandCard);
        expect(Hand.asValueCard).toBe('2H 2S pair winning move');
    });
    it('three of a kind', () => {
        const handCards = '2H 2D 2S AC KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const handCard1 = new handCard(handCards);
        const Hand = new pokerHand(handCard1.asHandCard);
        expect(Hand.asValueCard).toBe('2H 2D 2S Three of a kind winning move');
    });
    it('two pair', () => {
        const handCards = '2H 3D 2S 3C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const handCard1 = new handCard(handCards);
        const Hand = new pokerHand(handCard1.asHandCard);
        expect(Hand.asValueCard).toBe('3D 3C pair winning move with 2H 2S pair winning move two pair winning move');
    });

});

