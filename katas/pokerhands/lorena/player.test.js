import { Player } from './player';

describe('Test for Player class', () => {
    it('should be able read a poker hand', () => {
        const name = 'White';
        var pokerhand = '5D 7D QC JH 3S';
        const player1 = new Player(name, pokerhand);
        expect(player1.readHand()).toBe(pokerhand);
    });

    it('should be able identify pokerhand`s cards', () => {
        const name = 'White';
        var pokerhand = '5D 7D QC JH 3S';
        const player1 = new Player(name, pokerhand);
        var pokerhandArra = pokerhand.split(' ');
        expect(player1.handToCards()).toStrictEqual(pokerhandArra);
    });

    it('should be able return array with values of pokerhand`s cards', () => {
        const name = 'White';
        var pokerhand = '5D 7D QC JH 3S';
        var pokerHandValue = ['5D', '7D', '12C', '11H', '3S'];
        const player1 = new Player(name, pokerhand);
        expect(player1.valuesInHand()).toStrictEqual(pokerHandValue);
    });
});