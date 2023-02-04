import { Card } from './cards';


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
