export class pokerHandgame {
    constructor(cards) {
        this.cards = cards;
        this.valueMap = {
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
            'A': 14
        };
    }

    HandRanking() {
        if (this.StraightFlush()) {
            return 8;
        }
        if (this.FourOfAKind()) {
            return 7;
        }
        if (this.FullHouse()) {
            return 6;
        }
        if (this.Flush()) {
            return 5;
        }
        if (this.Straight()) {
            return 4;
        }
        if (this.ThreeOfAKind()) {
            return 3;
        }
        if (this.TwoPair()) {
            return 2;
        }
        if (this.Pair()) {
            return 1;
        }
        return 0;
    }

    StraightFlush() {
        return this.Flush() && this.Straight();
    }

    FourOfAKind() {
        let values = this.getValueCounts();
        for (let value of Object.values(values)) {
            if (value === 4) {
                return true;
            }
        }
        return false;
    }

    FullHouse() {
        let values = this.getValueCounts();
        let threeOfAKind = false;
        let pair = false;
        for (let value of Object.values(values)) {
            if (value === 3) {
                threeOfAKind = true;
            }
            if (value === 2) {
                pair = true;
            }
        }
        return threeOfAKind && pair;
    }

    Flush() {
        let suit = this.cards[0][1];
        for (let i = 1; i < this.cards.length; i++) {
            if (this.cards[i][1] !== suit) {
                return false;
            }
        }
        return true;
    }

    Straight() {
        let values = this.getSortedValues();
        for (let i = 1; i < values.length; i++) {
            if (values[i] !== values[i - 1] + 1) {
                return false;
            }
        }
        return true;
    }

    ThreeOfAKind() {
        let values = this.getValueCounts();
        for (let value of Object.values(values)) {
            if (value === 3) {
                return true;
            }
        }
        return false;
    }

    TwoPair() {
        let values = this.getValueCounts();
        let pairs = 0;
        for (let value of Object.values(values)) {
            if (value === 2) {
                pairs++;
            }
        }
        return pairs === 2;
    }

    Pair() {
        let values = this.getValueCounts();
        for (let value of Object.values(values)) {
            if (value === 2) {
                return true;
            }
        }
        return false;
    }

    getValueCounts() {
        const valueCounts = {};
        for (let i = 0; i < this.cards.length; i++) {
            const value = this.cards[i][0];
            if (!valueCounts[value]) {
                valueCounts[value] = 1;
            } else {
                valueCounts[value]++;
            }
        }
        return valueCounts;
    }

    getSortedValues() {
        let values = this.cards.map(card => this.valueMap[card[0]]);
        return values.sort((a, b) => a - b);
    }
}