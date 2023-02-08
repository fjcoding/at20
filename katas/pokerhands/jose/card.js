export class Card {
    #suit;

    #value;

    constructor(suit, value) {
        this.#suit = suit;
        this.#value = value;
    }

    get suit() {
        return this.#suit;
    }

    get value() {
        return this.#value;
    }
}

export const CardValue = {
    Two: { numeric: 2, symbol: '2' },
    Three: { numeric: 3, symbol: '3' },
    Four: { numeric: 4, symbol: '4' },
    Five: { numeric: 5, symbol: '5' },
    Six: { numeric: 6, symbol: '6' },
    Seven: { numeric: 7, symbol: '7' },
    Eight: { numeric: 8, symbol: '8' },
    Nine: { numeric: 9, symbol: '9' },
    Ten: { numeric: 10, symbol: 'T' },
    Jack: { numeric: 11, symbol: 'J' },
    Queen: { numeric: 12, symbol: 'Q' },
    King: { numeric: 13, symbol: 'K' },
    Ace: { numeric: 14, symbol: 'A' }
};