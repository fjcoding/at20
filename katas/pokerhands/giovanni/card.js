export class Card {
    #cardString;

    constructor(cardString) {
        this.#cardString = cardString;
    }

    value() {
        const literalValue = this.#cardString[0];
        if (literalValue == 'A') {
            return 14;
        }
        if (literalValue == 'K') {
            return 13;
        }
        if (literalValue == 'Q') {
            return 12;
        }
        if (literalValue == 'J') {
            return 11;
        }
        if (literalValue == '1') {
            if (this.#cardString[1] == '0') {
                return 10;
            }
        }
        return parseInt(literalValue);
    }

    suit() {
        const cardSuit = this.#cardString;
        return cardSuit[cardSuit.length - 1];
    }
}