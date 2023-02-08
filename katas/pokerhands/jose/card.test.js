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

    it('should be able to be compared with another card and say if its value is greater than', () => {
        const aceSpades = new Card('S', CardValue.Ace);
        const fiveHearts = new Card('H', CardValue.Five);

        expect(aceSpades.compareTo(fiveHearts)).toBeGreaterThan(0);
    });

    it('should be able to be compared with another card and say if its value is less than', () => {
        const aceSpades = new Card('S', CardValue.Ace);
        const fiveHearts = new Card('H', CardValue.Five);

        expect(fiveHearts.compareTo(aceSpades)).toBeLessThan(0);
    });

    it('should be able to be compared with another card and say if their values are equal', () => {
        const tenSpades = new Card('S', CardValue.Ten);
        const tenHearts = new Card('H', CardValue.Ten);

        expect(tenSpades.compareTo(tenHearts)).toBe(0);
    });
});