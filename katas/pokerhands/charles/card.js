export class Card {
    static allowedValues = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

    static allowedSuits = ['C', 'D', 'H', 'S'];

    #value;

    #suit;

    constructor(card) {
        this.#value = Card.allowedValues.indexOf(card.charAt(0)) >= 0 ? card.charAt(0) : '-1';
        this.#suit = Card.allowedSuits.indexOf(card.charAt(1)) >= 0 ? card.charAt(1) : '-1';
    }

    getValueCard() {
        return this.#value;
    }

    getSuitCard() {
        return this.#suit;
    }
}