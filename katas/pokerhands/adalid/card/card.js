
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

    value;

    suit;

    constructor (stringValue) {
        this.validateInput(stringValue);
        const mappedValue = this.mapStringToValue(stringValue);
        this.value = mappedValue.value;
        this.suit = mappedValue.suit;
    }

    mapStringToValue(stringValue) {
        const [value, suit] = stringValue;
        const validSuit = this.validateSuit(suit);
        const validValue = this.validateValue(value);

        if (validSuit && validValue) {
            return { value, suit };
        }
        return null;
    }

    getNumericValue() {
        return Card.valueChain[this.value];
    }

    validateSuit(suit) {
        const suitResult = Card.suitChain[suit];
        if (!suitResult) {
            throw new Error(`(${suit}) Invalid Suit Value`);
        }
        return true;
    }

    validateValue(value) {
        const valueResult = Card.valueChain[value];
        if (!valueResult) {
            throw new Error(`(${value}) Invalid value`);
        }
        return true;
    }

    validateInput(input) {
        if (input.length > 2) {
            throw new Error(`(${input}) is not valid input`);
        }
    }
}