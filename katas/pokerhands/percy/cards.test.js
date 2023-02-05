import { cardExistence } from './cardNumberExistence';

describe('Tests for club deck of cards', () => {
    it('can have 2C the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[0], decks[0]);
        expect(card.asCard()).toBe('2C');
    });

    it('can have 3C the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[1], decks[0]);
        expect(card.asCard()).toBe('3C');
    });

    it('can have 4C the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[2], decks[0]);
        expect(card.asCard()).toBe('4C');
    });

    it('can have 5C the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[3], decks[0]);
        expect(card.asCard()).toBe('5C');
    });

    it('can have 6C the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[4], decks[0]);
        expect(card.asCard()).toBe('6C');
    });

    it('can have 7C the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[5], decks[0]);
        expect(card.asCard()).toBe('7C');
    });

    it('can have 8C the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[6], decks[0]);
        expect(card.asCard()).toBe('8C');
    });

    it('can have 9C the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[7], decks[0]);
        expect(card.asCard()).toBe('9C');
    });

    it('can have TC the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[8], decks[0]);
        expect(card.asCard()).toBe('TC');
    });

    it('can have JC the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[9], decks[0]);
        expect(card.asCard()).toBe('JC');
    });

    it('can have QC the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[10], decks[0]);
        expect(card.asCard()).toBe('QC');
    });

    it('can have KC the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[11], decks[0]);
        expect(card.asCard()).toBe('KC');
    });

    it('can have AC the clubs cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[12], decks[0]);
        expect(card.asCard()).toBe('AC');
    });
});

describe('Tests for diamonds deck of cards', () => {
    it('can have 2D the diamonds cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[0], decks[1]);
        expect(card.asCard()).toBe('2D');
    });

    it('can have 3D the diamonds cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[1], decks[1]);
        expect(card.asCard()).toBe('3D');
    });

    it('can have 4D the diamonds cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[2], decks[1]);
        expect(card.asCard()).toBe('4D');
    });

    it('can have 5D the diamonds cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[3], decks[1]);
        expect(card.asCard()).toBe('5D');
    });

    it('can have 6D the diamonds cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[4], decks[1]);
        expect(card.asCard()).toBe('6D');
    });

    it('can have 7D the diamonds cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[5], decks[1]);
        expect(card.asCard()).toBe('7D');
    });

    it('can have 8D the diamonds cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[6], decks[1]);
        expect(card.asCard()).toBe('8D');
    });

    it('can have 9D the diamonds cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[7], decks[1]);
        expect(card.asCard()).toBe('9D');
    });

    it('can have TD the diamonds cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[8], decks[1]);
        expect(card.asCard()).toBe('TD');
    });

    it('can have JD the diamonds cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[9], decks[1]);
        expect(card.asCard()).toBe('JD');
    });

    it('can have QD the diamonds cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[10], decks[1]);
        expect(card.asCard()).toBe('QD');
    });

    it('can have KD the diamonds cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[11], decks[1]);
        expect(card.asCard()).toBe('KD');
    });

    it('can have AD the diamonds cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[12], decks[1]);
        expect(card.asCard()).toBe('AD');
    });
});

describe('Tests for hearts deck of cards', () => {
    it('can have 2H the hearts cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[0], decks[2]);
        expect(card.asCard()).toBe('2H');
    });

    it('can have 3H the hearts cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[1], decks[2]);
        expect(card.asCard()).toBe('3H');
    });

    it('can have 4H the hearts cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[2], decks[2]);
        expect(card.asCard()).toBe('4H');
    });

    it('can have 5H the hearts cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[3], decks[2]);
        expect(card.asCard()).toBe('5H');
    });

    it('can have 6H the hearts cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[4], decks[2]);
        expect(card.asCard()).toBe('6H');
    });

    it('can have 7H the hearts cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[5], decks[2]);
        expect(card.asCard()).toBe('7H');
    });

    it('can have 8H the hearts cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[6], decks[2]);
        expect(card.asCard()).toBe('8H');
    });

    it('can have 9H the hearts cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[7], decks[2]);
        expect(card.asCard()).toBe('9H');
    });

    it('can have TH the hearts cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[8], decks[2]);
        expect(card.asCard()).toBe('TH');
    });

    it('can have JH the hearts cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[9], decks[2]);
        expect(card.asCard()).toBe('JH');
    });

    it('can have QH the hearts cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[10], decks[2]);
        expect(card.asCard()).toBe('QH');
    });

    it('can have KH the hearts cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[11], decks[2]);
        expect(card.asCard()).toBe('KH');
    });

    it('can have AH the hearts cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[12], decks[2]);
        expect(card.asCard()).toBe('AH');
    });
});

describe('Tests for spades deck of cards', () => {
    it('can have 2S the spades cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[0], decks[3]);
        expect(card.asCard()).toBe('2S');
    });

    it('can have 3H the spades cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[1], decks[3]);
        expect(card.asCard()).toBe('3S');
    });

    it('can have 4H the spades cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[2], decks[3]);
        expect(card.asCard()).toBe('4S');
    });

    it('can have 5H the spades cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[3], decks[3]);
        expect(card.asCard()).toBe('5S');
    });

    it('can have 6H the spades cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[4], decks[3]);
        expect(card.asCard()).toBe('6S');
    });

    it('can have 7H the spades cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[5], decks[3]);
        expect(card.asCard()).toBe('7S');
    });

    it('can have 8H the spades cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[6], decks[3]);
        expect(card.asCard()).toBe('8S');
    });

    it('can have 9H the spades cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[7], decks[3]);
        expect(card.asCard()).toBe('9S');
    });

    it('can have TH the spades cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[8], decks[3]);
        expect(card.asCard()).toBe('TS');
    });

    it('can have JH the spades cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[9], decks[3]);
        expect(card.asCard()).toBe('JS');
    });

    it('can have QH the spades cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[10], decks[3]);
        expect(card.asCard()).toBe('QS');
    });

    it('can have KH the spades cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[11], decks[3]);
        expect(card.asCard()).toBe('KS');
    });

    it('can have AH the spades cards', () => {
        const valueCard = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
        const decks = ['C', 'D', 'H', 'S'];
        const card = new cardExistence(valueCard[12], decks[3]);
        expect(card.asCard()).toBe('AS');
    });
});