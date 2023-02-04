import Game from './game';

describe('Test for Game Class', () => {
    it('should return the winner player or is not there return tie', () => {
        let game;
        game = new Game();
        game.parse('Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH');
        expect(game.getTheWinner()).toBe('White wins. - with high card: Ace');

        game = new Game();
        game.parse('Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C KH');
        expect(game.getTheWinner()).toBe('Black wins. - with high card: 9');

        game = new Game();
        game.parse('Black: 2H 4S 4C 2D 4H  White: 2S 8S AS QS 3S');
        expect(game.getTheWinner()).toBe('Black wins. - with full house: 4 over 2');

        game = new Game();
        game.parse('Black: 7D 8D 9D TD JD  White: 2S 8S AS QS 3S');
        expect(game.getTheWinner()).toBe('Black wins. - with straight flush: Jack 10 9 8 7 of Diamonds');

        game = new Game();
        game.parse('Black: 2H 3D 5S 9C KD  White: 2H 3D 5S 9C KD');
        expect(game.getTheWinner()).toBe('Tie.');
    });
});