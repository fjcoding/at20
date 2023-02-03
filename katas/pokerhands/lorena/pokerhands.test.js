import { Card } from './pokerhands';

describe('Test for Card class', () => {
    it('Should be able to identify a specific card', () => {
        const value = '7';
        const suite = 'D';
        const card = new Card(value, suite);
        expect(card.cardREad()).toBe(value + suite);
    });
});