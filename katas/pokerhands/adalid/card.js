export class Card {
    static suitChain = {
        'C': 'CLUBS',
        'D': 'DIAMONDS',
        'H': 'HEARTS',
        'S': 'SPADES',
    };

    static valueChain = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'T': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
    };

    #value;

    #suit;

    constructor (value, suit) {
        this.#value = value;
        this.#suit = suit;
    }

    get value () {
        return this.#value;
    }

    get suit () {
        return this.#suit;
    }

    valueResult() {
        return Card.valueChain[this.#value];
    }

    suitResult() {
        return Card.suitChain[this.#suit];
    }
}