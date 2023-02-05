import { handCard } from './cardsPokerHand';


describe('Tests for what cards i have in my pokerHand ', () => {
    it('first card', () => {
        const handCards = '2H 3D 5S 9C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const Hand = new handCard(handCards);
        expect(Hand.asHandCard[0]).toBe('2H');
    });
});
describe('Tests for what cards i have in my pokerHand ', () => {
    it('second card', () => {
        const handCards = '2H 3D 5S 9C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const Hand = new handCard(handCards);
        expect(Hand.asHandCard[1]).toBe('3D');
    });
});
describe('Tests for what cards i have in my pokerHand ', () => {
    it('third card', () => {
        const handCards = '2H 3D 5S 9C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const Hand = new handCard(handCards);
        expect(Hand.asHandCard[2]).toBe('5S');
    });
});
describe('Tests for what cards i have in my pokerHand ', () => {
    it('fourth card', () => {
        const handCards = '2H 3D 5S 9C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const Hand = new handCard(handCards);
        expect(Hand.asHandCard[3]).toBe('9C');
    });
});
describe('Tests for what cards i have in my pokerHand ', () => {
    it('five card', () => {
        const handCards = '2H 3D 5S 9C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const Hand = new handCard(handCards);
        expect(Hand.asHandCard[4]).toBe('KD');
    });
});


