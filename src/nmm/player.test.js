import { Player } from './player';

describe('Tests for player class', () => {
    it('should be able to show the player attributes', () => {
        let colorPlayer = 'White';
        let amountCoins = 9;
        let player = new Player(colorPlayer, amountCoins);
        expect(player.propsPlayer).toBe('White: 9 coins to play and 0 coins played');

        colorPlayer = 'Black';
        amountCoins = 9;
        player = new Player(colorPlayer, amountCoins);
        expect(player.propsPlayer).toBe('Black: 9 coins to play and 0 coins played');
    });

    it('should be able to show how many coins has the player to play', () => {
        let colorPlayer = 'White';
        let amountCoins = 9;
        let player = new Player(colorPlayer, amountCoins);
        let usedCoins = 1;
        expect(player.updateAmountCoins(usedCoins)).toBe(8);
        expect(player.propsPlayer).toBe('White: 8 coins to play and 1 coins played');
    });
});