import { Player } from './player';

describe('Tests for player class', () => {
    it('should be able to show the player attributes', () => {
        let colorPlayer = 'White';
        let player = new Player(colorPlayer);
        expect(player.propsPlayer).toBe('White: 9 coins to play');

        colorPlayer = 'Black';
        player = new Player(colorPlayer);
        expect(player.propsPlayer).toBe('Black: 9 coins to play');
    });

    it('should be able to show how many coins has the player to play', () => {
        let colorPlayer = 'White';
        let player = new Player(colorPlayer);
        expect(player.updateNumberCoins()).toBe(8);
        expect(player.numberCoins).toBe(8);
        expect(player.propsPlayer).toBe('White: 8 coins to play');
    });

    it('should be able to update color of player', () => {
        let colorPlayer = '*';
        let player = new Player(colorPlayer);
        let newColorPlayer = 'White';
        player.colorPlayer = newColorPlayer;
        expect(player.colorPlayer).toBe('White');
    });
});