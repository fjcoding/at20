

class Card {
    static VALUES = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

    static VALUE_NAMES = {
        'T': '10',
        'J': 'Jack',
        'Q': 'Queen',
        'K': 'King',
        'A': 'Ace',
    };

    static SUITS = {
        'C': 'Clubs',
        'D': 'Diamonds',
        'H': 'Hearts',
        'S': 'Spades'
    };

    // Private fields
    #value;

    #suit;

    constructor(value, suit) {
        this.#value = value;
        this.#suit = suit;
    }

    getSuit() {
        return this.#suit;
    }

    getSuitName() {
        return Card.SUITS[this.#suit];
    }

    getValue() {
        return this.#value;
    }

    getValueName() {
        if (this.#value in Card.VALUE_NAMES) {
            return Card.VALUE_NAMES[this.#value];
        }
        return this.#value;
    }

    getValueNumber() {
        return Card.VALUES.indexOf(this.#value);
    }

    compareWith(otherCard) {
        const comparation = Card.VALUES.indexOf(this.#value) - Card.VALUES.indexOf(otherCard.getValue());
        return comparation === 0 ? 0 : (comparation > 0 ? 1 : -1);
    }

    toString() {
        return `${this.getValue()}${this.getSuit()}`;
    }
}

export default Card;