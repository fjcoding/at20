import { Card, CardValue } from './card';

describe('Tests for Card class', () => {
    it('should have a suit and value and be able to return those values', () => {
        const card = new Card('C', CardValue.Two);
        expect(card.suit).toBe('C');
        expect(card.value.numeric).toBe(2);
        expect(card.value.symbol).toBe('2');

        const aceSpades = new Card('S', CardValue.Ace);
        expect(aceSpades.suit).toBe('S');
        expect(aceSpades.value.numeric).toBe(14);
        expect(aceSpades.value.symbol).toBe('A');
    });
});