import { Card } from './card';

describe('Tests for card class', () => {
    it('should be able to show the card value', () => {
        let currentCard = '2H';
        let card = new Card(currentCard);
        expect(card.getValueCard()).toBe('2');

        currentCard = '3D';
        card = new Card(currentCard);
        expect(card.getValueCard()).toBe('3');

        currentCard = '5S';
        card = new Card(currentCard);
        expect(card.getValueCard()).toBe('5');

        currentCard = '9C';
        card = new Card(currentCard);
        expect(card.getValueCard()).toBe('9');

        currentCard = 'KD';
        card = new Card(currentCard);
        expect(card.getValueCard()).toBe('K');

        currentCard = 'RD';
        card = new Card(currentCard);
        expect(card.getValueCard()).toBe('-1');
    });

    it('should be able to show the card suit', () => {
        let currentCard = '2H';
        let card = new Card(currentCard);
        expect(card.getSuitCard()).toBe('H');

        currentCard = '3D';
        card = new Card(currentCard);
        expect(card.getSuitCard()).toBe('D');

        currentCard = '5S';
        card = new Card(currentCard);
        expect(card.getSuitCard()).toBe('S');

        currentCard = '9C';
        card = new Card(currentCard);
        expect(card.getSuitCard()).toBe('C');

        currentCard = 'KD';
        card = new Card(currentCard);
        expect(card.getSuitCard()).toBe('D');
    });
});