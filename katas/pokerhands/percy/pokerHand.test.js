import { pokerHand } from './pokerHand';


describe('Tests for what is my pokerHand ', () => {
    it('first card', () => {
        const handCards = '2H 3D 5S 9C KD';//2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
        const Hand = new pokerHand(handCards);
        expect(Hand.asHandCard[0]).toBe('2');
    });
});

