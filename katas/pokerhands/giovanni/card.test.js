import { Card } from './card';

describe('Test for Card class', () => {
    it('should be able to obtain the digit 14 given a individual string card with As', () => {
        const testCard = 'AC';
        const card = new Card(testCard);
        expect(card.value()).toBe(14);
    });
    it('should be able to obtain the digit 13 given a individual string card with K', () => {
        const testCard = 'KH';
        const card = new Card(testCard);
        expect(card.value()).toBe(13);
    });
    it('should be able to obtain the digit 12 given a individual string card with Q', () => {
        const testCard = 'QD';
        const card = new Card(testCard);
        expect(card.value()).toBe(12);
    });
    it('should be able to obtain the digit 11 given a individual string card with J', () => {
        const testCard = 'JS';
        const card = new Card(testCard);
        expect(card.value()).toBe(11);
    });
    it('should be able to obtain the digit 10 given a individual string card with 10', () => {
        const testCard = '10S';
        const card = new Card(testCard);
        expect(card.value()).toBe(10);
    });
    it('should be able to obtain the digit given in the individual string card', () => {
        const testCard = '5S';
        const card = new Card(testCard);
        expect(card.value()).toBe(5);
    });
    it('should be able to obtain the suit leter given the individual string card', () => {
        const testCard = '10H';
        const card = new Card(testCard);
        expect(card.suit()).toBe('H');
    });
});

