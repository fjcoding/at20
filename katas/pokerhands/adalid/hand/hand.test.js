import { Hand } from './hand';
import { Card } from '../card/card';

describe('Tests for hand class', () => {
    it('should be able to receive a string with 5 cards', () => {
        const card1 = new Card('2H');
        const card2 = new Card('3D');
        const card3 = new Card('4S');
        const card4 = new Card('5C');
        const card5 = new Card('6S');
        const cards = [card1, card2, card3, card4, card5];
        const hand = new Hand(cards);
        expect(hand.cards.length).toBe(5);
    });
    it('should throw an error when receive less than 5 cards', () => {
        const card1 = new Card('2H');
        const card2 = new Card('3D');
        const card3 = new Card('4S');
        const card4 = new Card('5C');
        const handler = ()=>{
            const cards = [card1, card2, card3, card4];
            new Hand(cards);
        };
        expect(handler).toThrow(new Error('A hand should start with 5 cards'));
    });
    it('should throw an error when receive more than 5 cards', () => {
        const card1 = new Card('2H');
        const card2 = new Card('3D');
        const card3 = new Card('4S');
        const card4 = new Card('5C');
        const card5 = new Card('6S');
        const card6 = new Card('7H');
        const handler = ()=>{
            const cards = [card1, card2, card3, card4, card5, card6];
            new Hand(cards);
        };
        expect(handler).toThrow(new Error('A hand should start with 5 cards'));
    });
});