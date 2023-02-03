import { Card, Player } from './pokerhands';


describe('Test for Card class', () => {
    it('Should be able to identify a specific card', () => {
        const value = '7';
        const suite = 'D';
        const card = new Card(value, suite);
        expect(card.cardREad()).toBe(value + suite);
    });

    it('should be able identify card`s value', () => {
        const value = '7';
        const suite = 'D';
        const card = new Card(value, suite);
        expect(card.cardREad()[0]).toBe(value);
    });

    it('should be able identify card`s suite', () => {
        const value = '7';
        const suite = 'D';
        const card = new Card(value, suite);
        expect(card.cardREad()[1]).toBe(suite);
    });
});

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
});