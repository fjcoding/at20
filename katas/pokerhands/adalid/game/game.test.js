import { Game } from './game';

describe('Tests for Game class', () => {
    it('should return the winner when I got two hands', () => {
        const game = new Game(['2H 3D 4S 5C 6D', '2C 5H 2S 3C 3H']);
        const winner = game.compareHands();
        const [hand1] = game.hands;
        expect(winner.cards).toEqual(hand1.cards);
    });

    it('should return the winner with a flush rather than a straigth', () => {
        const game = new Game(['2H 3H 4H 5H 6H', '2C 3C 4C 5C 6H']);
        const winner = game.compareHands();
        const [hand1] = game.hands;
        expect(winner.cards).toEqual(hand1.cards);
    });
});
