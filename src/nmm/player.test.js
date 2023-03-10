import { Player } from './player.js';

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

    it('should be able to add Mill to player', () => {
        let colorPlayer = 'White';
        let player = new Player(colorPlayer);
        let newMill = ['a0', 'a3', 'a6'];
        expect(player.getLengthBagMills()).toBe(0);
        expect(player.addMill(newMill)).toBe(1);

        newMill = ['c2', 'c3', 'c4'];
        expect(player.addMill(newMill)).toBe(2);

        newMill = ['c2', 'c3', 'c4'];
        expect(player.addMill(newMill)).toBe(2);
    });

    it('should be able to show if added a new Mill to bag of Mills of the player', () => {
        let colorPlayer = 'White';
        let player = new Player(colorPlayer);
        let newMill = ['a0', 'a3', 'a6'];
        expect(player.getLengthBagMills()).toBe(0);
        expect(player.addMill(newMill)).toBe(1);
        expect(player.checkNewMillAdded()).toBe(true);
        expect(player.addMill(newMill)).toBe(1);
        expect(player.checkNewMillAdded()).toBe(false);
    });

    it('should be able to show if a coin is part of a mill', () => {
        let colorPlayer = 'White';
        let player = new Player(colorPlayer);
        let newMill = ['0,0', '0,3', '0,6'];
        expect(player.addMill(newMill)).toBe(1);
        expect(player.isPositionInBagMills(0, 0)).toBe(true);

        expect(player.isPositionInBagMills(10, -1)).toBe(false);
        expect(player.isPositionInBagMills(6, 6)).toBe(false);
    });

    it('should be able to choose opponent coin position to remove it', () => {
        let colorPlayer1 = 'White';
        let player1 = new Player(colorPlayer1);

        let colorPlayer2 = 'Black';
        let player2 = new Player(colorPlayer2);

        let coinPositionSelected = 'd1';
        expect(player1.choosePositionToRemove(player2, coinPositionSelected)).toBe('d1');
        expect(player1.numberCoinsRemoved).toBe(0);
        expect(player2.numberCoinsRemoved).toBe(1);
    });

    it('should be able to remove a Mill of the BagMills when passed it a coin position', () => {
        let colorPlayer = 'White';
        let player = new Player(colorPlayer);

        let coinPosition = 'a3';
        expect(player.removeMillWhenCoinPositionIs(coinPosition)).toBe(0);

        let newMill = ['a0', 'a3', 'a6'];
        expect(player.addMill(newMill)).toBe(1);
        expect(player.removeMillWhenCoinPositionIs(coinPosition)).toBe(0);

        expect(player.addMill(newMill)).toBe(1);
        newMill = ['c2', 'c3', 'c4'];
        expect(player.addMill(newMill)).toBe(2);
        expect(player.removeMillWhenCoinPositionIs(coinPosition)).toBe(1);
    });

    it('should recognize your own coin', () => {
        const colorPlayer = 'White';
        const noColorPlayer = 'black';
        const player = new Player(colorPlayer);

        expect(player.checkOwnCoin(colorPlayer)).toBe(true);
        expect(player.checkOwnCoin(noColorPlayer)).toBe(false);
    });
});