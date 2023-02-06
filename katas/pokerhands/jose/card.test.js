import { Card } from './card';

describe('Tests for Card class', () => {
    it('should have a suit and value and be able to return those values', () => {
        const card = new Card('C', 2);
        expect(card.suit).toBe('C');
        expect(card.value).toBe(2);
    });
});