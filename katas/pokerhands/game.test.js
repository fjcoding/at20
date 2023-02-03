import Game from './game';

describe('Test for Game Class', () => {
    it('should return win,tie or lose when the player is compared with other player', () => {
        let game;
        game = new Game('Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH');
        expect(game.compare()).toBe('White wins. - with high card: Ace');

        game = new Game('Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C KH');
        expect(game.compare()).toBe('Black wins. - with High Card: Nine');

        game = new Game('Black: 2H 4S 4C 2D 4H  White: 2S 8S AS QS 3S');
        expect(game.compare()).toBe('Black wins. - with full house: 4 over 2');

        game = new Game('Black: 2H 3D 5S 9C KD  White: 2H 3D 5S 9C 9D');
        expect(game.compare()).toBe('Tie.');
    });
});