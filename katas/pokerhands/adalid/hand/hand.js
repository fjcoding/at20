
export class Hand {
    cards = [];

    constructor(cards) {
        if (cards.length !== 5) {
            throw new Error('A hand should start with 5 cards');
        }
        this.cards = cards;
    }

    isFlush() {
        let result  = true;
        let lastSuit = this.cards[0].suit;
        this.cards.forEach(card => {
            if (lastSuit && card.suit == lastSuit) {
                return;
            }
            result = false;
            lastSuit = card.suit;
        });
        return result;
    }

    isStraight() {
        let result  = true;
        this.cards.forEach((card, index) => {
            const nextCardInArray = this.cards[index + 1];
            if (!nextCardInArray) {
                return;
            }
            if (card.getNumericValue() + 1 === nextCardInArray.getNumericValue()) {
                return;
            }
            result = false;
        });
        return result;
    }

    getScore() {
        let score = 0;
        if (this.isStraight()) {
            score = 5;
        }
        if (this.isFlush()) {
            score = 6;
        }
        return score;
    }
}