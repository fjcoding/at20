import Card from './card';

class Hand {
    static RANK = {
        HIGH_CARD: 0,
        ONE_PAIR: 1,
        TWO_PAIR: 2,
        THREE_OF_A_KIND: 3,
        STRAIGHT: 4,
        FLUSH: 5,
        FULL_HOUSE: 6,
        FOUR_OF_A_KIND: 7,
        STRAIGHT_FLUSH: 8,
    };

    static RANK_NAMES = {
        0: 'High Card',
        1: 'Pair',
        2: 'Two Pairs',
        3: 'Three of a Kind',
        4: 'Straight',
        5: 'Flush',
        6: 'Full House',
        7: 'Four of a Kind',
        8: 'Straight Flush',
    };
    // Private fields

    #cards;

    #rank;

    constructor(handString) {
        //hand shoul be 5 cards and each card should be 2 characters
        //exapmle -> '2H 3D 5S 9C KD'
        this.#cards = [];
        for (let index = 0; index < 5; index++) {
            const cardString = handString.substring(index * 3, index * 3 + 2);
            const value = cardString.substring(0, 1);
            const suit = cardString.substring(1, 2);
            const card = new Card(value, suit);
            this.#cards.push(card);
        }
    }

    getCardString(index) {
        return this.#cards[index].toString();
    }

    getRankString() {
        if (this.#rank === undefined) {
            this.CalculateRank();
        }
        return Hand.RANK_NAMES[this.getRank()];
    }

    getValues() {
        return this.#cards.map((card) => card.getValue());
    }

    getSuits() {
        return this.#cards.map((card) => card.getSuit());
    }

    getValuesNumber() {
        return this.#cards.map((card) => card.getValueNumber());
    }

    getRank() {
        if (this.#rank === undefined) {
            this.CalculateRank();
        }
        return this.#rank;
    }

    CalculateRank() {
        let rank;
        if (this.isStraightFlush()) {
            rank = Hand.RANK.STRAIGHT_FLUSH;
        } else if (this.isFourOfAKind()) {
            rank = Hand.RANK.FOUR_OF_A_KIND;
        } else if (this.isFullHouse()) {
            rank = Hand.RANK.FULL_HOUSE;
        } else if (this.isFlush()) {
            rank = Hand.RANK.FLUSH;
        } else if (this.isStraight()) {
            rank = Hand.RANK.STRAIGHT;
        } else if (this.isThreeOfAKind()) {
            rank = Hand.RANK.THREE_OF_A_KIND;
        } else if (this.isTwoPair()) {
            rank = Hand.RANK.TWO_PAIR;
        } else if (this.isOnePair()) {
            rank = Hand.RANK.ONE_PAIR;
        } else {
            rank = Hand.RANK.HIGH_CARD;
        }

        this.#rank = rank;
    }

    isStraightFlush() {
        return this.isStraight() && this.isFlush();
    }

    isFourOfAKind() {
        const cardValuesCount = this.#getArrayCount(this.getValues());
        return cardValuesCount.length === 2 && cardValuesCount.includes(4) && cardValuesCount.includes(1);
    }

    isFullHouse() {
        const cardValuesCount = this.#getArrayCount(this.getValues());
        return cardValuesCount.length === 2 && cardValuesCount.includes(3) && cardValuesCount.includes(2);
    }

    isFlush() {
        const cardSuitsCount = [...new Set(this.getSuits())];
        return cardSuitsCount.length === 1;
    }

    isStraight() {
        const cardValues = this.getValuesNumber();
        const cardValuesOrdered = cardValues.sort((a, b) => (a - b));

        for (let index = 0; index < cardValuesOrdered.length - 1; index++) {
            if (cardValuesOrdered[index + 1] - cardValuesOrdered[index] !== 1) {
                return false;
            }
        }
        return true;
    }

    isThreeOfAKind() {
        const cardValuesCount = this.#getArrayCount(this.getValues());
        return cardValuesCount.length === 3 && cardValuesCount.includes(3) && cardValuesCount.includes(1);
    }

    isTwoPair() {
        const cardValuesCount = this.#getArrayCount(this.getValues());
        return cardValuesCount.length === 3 && cardValuesCount.includes(2) && cardValuesCount.includes(1);
    }

    isOnePair() {
        const cardValuesCount = this.#getArrayCount(this.getValues());
        return cardValuesCount.length === 4 && cardValuesCount.includes(2) && cardValuesCount.includes(1);
    }

    #getArrayCount(array) {
        const arrayCount = {};
        for (let index = 0; index < array.length; index++) {
            const value = array[index];
            if (value in arrayCount) {
                arrayCount[value]++;
            } else {
                arrayCount[value] = 1;
            }
        }
        return Object.values(arrayCount);
    }

    compareWith(otherHand) {
        if (this.getRank() > otherHand.getRank()) {
            return 1;
        }
        if (this.getRank() < otherHand.getRank()) {
            return -1;
        }
        return this.#compareWithSameRank(otherHand);
    }

    #compareWithSameRank(otherHand) {
        const cardValues = this.getValuesNumber();
        const otherCardValues = otherHand.getValuesNumber();

        for (let index = 0; index < cardValues.length; index++) {
            if (cardValues[index] > otherCardValues[index]) {
                return 1;
            }
            if (cardValues[index] < otherCardValues[index]) {
                return -1;
            }
        }
        return 0;
    }
}

export default Hand;