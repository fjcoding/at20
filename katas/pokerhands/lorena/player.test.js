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

    it('should be able to switch letter values to number of pokerhand`s cards and return as array', () => {
        const name = 'Black';
        var pokerhand = '5D 7D QC JH 3S';
        var pokerHandSwitch = ['5D', '7D', '12C', '11H', '3S'];
        const player1 = new Player(name, pokerhand);
        expect(player1.switchValInHand()).toStrictEqual(pokerHandSwitch);
    });
    it('should be able return array with only number values of pokerhand`s cards', () => {
        const name = 'White';
        var pokerhand = '5D 7D QC JH 3S';
        var valuesHand = [5, 7, 12, 11, 3];
        const player1 = new Player(name, pokerhand);
        expect(player1.valuesHand()).toStrictEqual(valuesHand);
    });
    it('should be able return array with only suits of pokerhand`s cards', () => {
        const name = 'Black';
        var pokerhand = '5D 7D QC JH 3S';
        var suitsHand = ['D', 'D', 'C', 'H', 'S'];
        const player1 = new Player(name, pokerhand);
        expect(player1.suitsHand()).toStrictEqual(suitsHand);
    });
});