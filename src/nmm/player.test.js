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
        expect(player.updateNumberCoinsToPlay()).toBe(8);
        expect(player.numberCoinsToPlay).toBe(8);
        expect(player.propsPlayer).toBe('White: 8 coins to play');
    });

    it('should be able to show how many coins removed has the player', () => {
        let colorPlayer = 'White';
        let player = new Player(colorPlayer);
        expect(player.numberCoinsRemoved).toBe(0);
    });

    it('should be able to show the color of the player', () => {
        let colorPlayer = 'White';
        let player = new Player(colorPlayer);
        expect(player.colorPlayer).toBe('White');
    });
});