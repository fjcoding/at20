import { cardDeck } from './cardDeck';

describe('Tests for deck of cards', () => {
    it('can have all the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = 'C';
        const card = new cardDeck(valueCard[0], decks[0]);
        expect(card.asCard()).toBe('2C');
    });

    it('can have all the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = 'C';
        const card = new cardDeck(valueCard[1], decks[0]);
        expect(card.asCard()).toBe('3C');
    });

    it('can have all the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = 'C';
        const card = new cardDeck(valueCard[2], decks[0]);
        expect(card.asCard()).toBe('4C');
    });

    it('can have all the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = 'C';
        const card = new cardDeck(valueCard[3], decks[0]);
        expect(card.asCard()).toBe('5C');
    });

    it('can have all the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = 'C';
        const card = new cardDeck(valueCard[4], decks[0]);
        expect(card.asCard()).toBe('6C');
    });

    it('can have all the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = 'C';
        const card = new cardDeck(valueCard[5], decks[0]);
        expect(card.asCard()).toBe('7C');
    });

    it('can have all the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = 'C';
        const card = new cardDeck(valueCard[6], decks[0]);
        expect(card.asCard()).toBe('8C');
    });

    it('can have all the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = 'C';
        const card = new cardDeck(valueCard[7], decks[0]);
        expect(card.asCard()).toBe('9C');
    });

    it('can have all the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = 'C';
        const card = new cardDeck(valueCard[8], decks[0]);
        expect(card.asCard()).toBe('TC');
    });

    it('can have all the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = 'C';
        const card = new cardDeck(valueCard[9], decks[0]);
        expect(card.asCard()).toBe('JC');
    });

    it('can have all the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = 'C';
        const card = new cardDeck(valueCard[10], decks[0]);
        expect(card.asCard()).toBe('QC');
    });

    it('can have all the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = 'C';
        const card = new cardDeck(valueCard[11], decks[0]);
        expect(card.asCard()).toBe('KC');
    });

    it('can have all the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = 'C';
        const card = new cardDeck(valueCard[12], decks[0]);
        expect(card.asCard()).toBe('AC');
    });
});