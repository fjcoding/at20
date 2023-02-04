import Card from './card.js';

class Hand {
    static WIN = 1;

    static LOSE = -1;

    static TIE = 0;

    static RANK = {
        HIGH_CARD: 0,
        PAIR: 1,
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

    //When is a tie, the hand with the highest value card wins.
    #rankValues;

    //this is saved the result of the comparison if one win.
    #winnerCards;

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

    getRankString() {
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
            this.calculateRank();
        }
        return this.#rank;
    }

    getWinnerCards() {
        return this.#winnerCards;
    }

    calculateRank() {
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
            rank = Hand.RANK.PAIR;
        } else {
            const values = this.#getCardCount(this.getValues()).map(value => value[0]);
            this.#assignedRankValues(values, Hand.RANK.HIGH_CARD);
            rank = Hand.RANK.HIGH_CARD;
        }

        this.#rank = rank;
    }

    isStraightFlush() {
        return this.isStraight() && this.isFlush() && this.#assignedRankValues(this.#rankValues, Hand.RANK.STRAIGHT_FLUSH);
    }

    isFourOfAKind() {
        const cardValuesCount = this.#getCardCount(this.getValues());
        const values = cardValuesCount.map(value => value[0]);
        const counts = cardValuesCount.map(value => value[1]);
        return counts.length === 2 && counts.includes(4) && counts.includes(1) && this.#assignedRankValues(values, Hand.RANK.FOUR_OF_A_KIND);
    }

    isFullHouse() {
        const cardValuesCount = this.#getCardCount(this.getValues());
        const values = cardValuesCount.map(value => value[0]);
        const counts = cardValuesCount.map(value => value[1]);
        return counts.length === 2 && counts.includes(3) && counts.includes(2) && this.#assignedRankValues(values, Hand.RANK.FULL_HOUSE);
    }

    isFlush() {
        const cardSuitsCount = [...new Set(this.getSuits())];
        const values = this.getValuesNumber().sort((a, b) => (b - a));
        return cardSuitsCount.length === 1 && this.#assignedRankValues(values, Hand.RANK.FLUSH);
    }

    isStraight() {
        const cardValues = this.getValuesNumber();
        const cardValuesOrdered = cardValues.sort((a, b) => (b - a));

        for (let index = 0; index < cardValuesOrdered.length - 1; index++) {
            if (cardValuesOrdered[index] - cardValuesOrdered[index + 1] !== 1) {
                return false;
            }
        }

        this.#assignedRankValues(cardValuesOrdered, Hand.RANK.STRAIGHT);
        return true;
    }

    isThreeOfAKind() {
        const cardValuesCount = this.#getCardCount(this.getValues());
        const values = cardValuesCount.map(value => value[0]);
        const counts = cardValuesCount.map(value => value[1]);
        return counts.length === 3 && counts.includes(3) && counts.includes(1) && this.#assignedRankValues(values, Hand.RANK.THREE_OF_A_KIND);
    }

    isTwoPair() {
        const cardValuesCount = this.#getCardCount(this.getValues());
        const values = cardValuesCount.map(value => value[0]);
        const counts = cardValuesCount.map(value => value[1]);
        return counts.length === 3 && counts.includes(2) && counts.includes(1) && this.#assignedRankValues(values, Hand.RANK.TWO_PAIR);
    }

    isOnePair() {
        const cardValuesCount = this.#getCardCount(this.getValues());
        const values = cardValuesCount.map(value => value[0]);
        const counts = cardValuesCount.map(value => value[1]);
        return counts.length === 4 && counts.includes(2) && counts.includes(1) && this.#assignedRankValues(values, Hand.RANK.PAIR);
    }

    #getCardCount(array) {
        const cardCount = {};
        for (let index = 0; index < array.length; index++) {
            const value = array[index];
            if (value in cardCount) {
                cardCount[value]++;
            } else {
                cardCount[value] = 1;
            }
        }

        const cardCountOrdered = Object.entries(cardCount).sort((a, b) => (b[1] - a[1]));

        const cardCountOrderedCompleted = cardCountOrdered.sort((a, b) => {
            if (cardCount[a[0]] === 1 && cardCount[b[0]] === 1) {
                const card1 = new Card(a[0], this.#cards[0].getSuit());
                const card2 = new Card(b[0], this.#cards[0].getSuit());
                return (card2.getValueNumber() - card1.getValueNumber());
            }
            return 0;
        });
        return cardCountOrderedCompleted;
    }

    //This assigned the rank values to the rankValues property in descending order of importance
    #assignedRankValues(cardValues, rank) {
        this.#rankValues = cardValues;
        if (rank === Hand.RANK.STRAIGHT_FLUSH) {
            this.#winnerCards = this.#cards.sort((a, b) => (b.getValueNumber() - a.getValueNumber())).map(card => card.getValueName()).join(' ') + ' of ' + this.#cards[0].getSuitName();
        } else if (rank === Hand.RANK.FOUR_OF_A_KIND) {
            this.#winnerCards = new Card(cardValues[0], this.#cards[0].getSuit()).getValueName();
        } else if (rank === Hand.RANK.FULL_HOUSE || rank === Hand.RANK.TWO_PAIR) {
            this.#winnerCards = `${new Card(cardValues[0], this.#cards[0].getSuit()).getValueName()} over ${new Card(cardValues[1], this.#cards[0].getSuit()).getValueName()}`;
        } else if (rank === Hand.RANK.FLUSH) {
            this.#winnerCards = this.#cards[0].getSuitName();
        } else if (rank === Hand.RANK.STRAIGHT) {
            this.#rankValues = cardValues.join(' ');
        } else { //if (rank === Hand.RANK.THREE_OF_A_KIND || rank === Hand.RANK.TWO_PAIR || rank === Hand.RANK.PAIR) {
            this.#winnerCards = new Card(cardValues[0], this.#cards[0].getSuit()).getValueName();
        }
        return true;
    }

    compareWith(otherHand) {
        if (this.getRank() > otherHand.getRank()) {
            return Hand.WIN;
        } else if (this.getRank() < otherHand.getRank()) {
            return Hand.LOSE;
        }
        return this.#compareWithSameRank(otherHand);
    }

    #compareWithSameRank(otherHand) {
        const rankValues1 = this.#rankValues;
        const rankValues2 = otherHand.#rankValues;

        let cardThisHand;
        let cardOtherHand;

        for (let index = 0; index < rankValues1.length; index++) {
            cardThisHand = new Card(rankValues1[index], 'C');
            cardOtherHand = new Card(rankValues2[index], 'C');
            if (cardThisHand.compareWith(cardOtherHand) === Hand.WIN) {
                this.#winnerCards = cardThisHand.getValueName();
                return Hand.WIN;
            }
            if (cardThisHand.compareWith(cardOtherHand) === Hand.LOSE) {
                otherHand.#winnerCards = cardOtherHand.getValueName();
                return Hand.LOSE;
            }
        }

        return Hand.TIE;
    }

    toString() {
        let handString = '';
        this.#cards.forEach((card) => {
            handString += `${card.toString()} `;
        });

        return handString.substring(0, handString.length - 1);
    }
}

export default Hand;