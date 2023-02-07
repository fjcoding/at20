//import { Player } from './player';
import { Poker } from './poker';


describe('Test for Poker class', () => {
    it('should be able read the pokerhand`s highest card', () => {
        const name = 'White';
        var pokerhand = '5D 7D QC JH 3S';
        const player1 = new Poker(name, pokerhand);
        expect(player1.highCard()).toStrictEqual(12);
    });

    it('should be able read a pair in pokerhand', () => {
        const name = 'White';
        var pokerhand = '5D 7D QC JH 3S';
        const player1 = new Poker(name, pokerhand);
        expect(player1.pair()).toStrictEqual([false, ' ']);
    });
    it('should be able read a pair in pokerhand', () => {
        const name = 'White';
        var pokerhand = '5D 7D 3C JH 3S';
        const player1 = new Poker(name, pokerhand);
        expect(player1.pair()).toStrictEqual([true, 3]);
    });
    it('should be able read a pair in pokerhand', () => {
        const name = 'White';
        var pokerhand = '5D 3D 3C 5H 3S';
        const player1 = new Poker(name, pokerhand);
        expect(player1.pair()).toStrictEqual([false, ' ']);
    });

    it('should be able read 2 pairs in pokerhand', () => {
        const name = 'White';
        var pokerhand = '5D 3D 3C JH 5S';
        const player1 = new Poker(name, pokerhand);
        expect(player1.twoPair()).toStrictEqual([true, 3, 5]);
    });
    it('should be able read 2 pairs in pokerhand', () => {
        const name = 'Black';
        var pokerhand = '5D 3D 3C 3H 5S';
        const player1 = new Poker(name, pokerhand);
        expect(player1.twoPair()).toStrictEqual([false, ' ', ' ']);
    });
});