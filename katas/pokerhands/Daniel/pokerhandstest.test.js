import { pokerHandgame } from './pokerhands';
describe('All game tests for poker hands', () => {
    describe('Should be able to recognize the game hand', () => {
        it('Should be able to verify the Straight flush', () => {
            let hand = new pokerHandgame(['TH', 'JH', 'QH', 'KH', 'AH']);
            expect(hand.HandRanking()).toBe(8);
        });

        it('Should be able to verify the Four of a kind', () => {
            let hand = new pokerHandgame(['2H', '2D', '2S', '2C', '6H']);
            expect(hand.HandRanking()).toBe(7);
        });

        it('Should be able to verify the Full House', () => {
            let hand = new pokerHandgame(['2H', '2D', '2S', '3C', '3H']);
            expect(hand.HandRanking()).toBe(6);
        });

        it('Should be able to verify the Flush', () => {
            let hand = new pokerHandgame(['2H', '3H', '7H', '9H', 'TH']);
            expect(hand.HandRanking()).toBe(5);
        });

        it('Should be able to verify the Straight', () => {
            let hand = new pokerHandgame(['2H', '3D', '4S', '5C', '6H']);
            expect(hand.HandRanking()).toBe(4);
        });

        it('Should be able to verify the three of a kind', () => {
            let hand = new pokerHandgame(['2H', '2D', '2S', '7C', '9H']);
            expect(hand.HandRanking()).toBe(3);
        });

        it('Should be able to verify the two pair', () => {
            let hand = new pokerHandgame(['2H', '2D', '3S', '3C', '9H']);
            expect(hand.HandRanking()).toBe(2);
        });

        it('Should be able to verify a pair', () => {
            let hand = new pokerHandgame(['2H', '2D', '5S', '7C', '9H']);
            expect(hand.HandRanking()).toBe(1);
        });

        it('Should be able to verify the high card', () => {
            let hand = new pokerHandgame(['2H', '5D', '7S', '9C', 'TH']);
            expect(hand.HandRanking()).toBe(0);
        });
    });
});
