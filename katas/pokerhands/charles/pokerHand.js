import { Card } from './card';

export class PokerHand {
    static valueCards = {
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

    #cards;

    #pairs;

    #pokerHandRest;

    #sameKind;

    constructor(pokerHand) {
        this.#cards = [];
        pokerHand.forEach(card => {
            this.#cards.push(new Card(card));
        });
        this.#sameKind = 0;
        this.ordering();
    }

    getCards() {
        return this.#cards;
    }

    getPairs() {
        return this.#pairs;
    }

    getPokerHandRest() {
        return this.#pokerHandRest;
    }

    getSameKind() {
        return this.#sameKind;
    }

    countEqualValues(currentCard) {
        let count = 0;
        this.getCards().forEach(card => {
            if (currentCard.getValueCard() == card.getValueCard()) {
                count++;
            }
        });
        return count;
    }

    generateSecuence(initialValue) {
        let result = '';
        let value = PokerHand.valueCards[initialValue];
        for (let index = value; index > value - 5; index--) {
            let aux = '';
            switch (index) {
            case 14:
                aux = 'A';
                break;
            case 13:
                aux = 'K';
                break;
            case 12:
                aux = 'Q';
                break;
            case 11:
                aux = 'J';
                break;
            case 10:
                aux = 'T';
                break;
            default:
                aux = PokerHand.valueCards[index];
                break;
            }
            result += aux;
        }
        return result;
    }

    ordering() {
        const lenCards = this.getCards().length;
        for (let index = 1; index < lenCards; index++) {
            for (let indexLeft = 0; indexLeft < (lenCards - index); indexLeft++) {
                let indexRight = indexLeft + 1;
                if (PokerHand.valueCards[this.getCards()[indexLeft].getValueCard()] < PokerHand.valueCards[this.getCards()[indexRight].getValueCard()]) {
                    this.changeValues(indexLeft, indexRight);
                }
            }
        }
    }

    changeValues(value1, value2) {
        if (value1 != value2) {
            const temp = this.getCards()[value1];
            this.getCards()[value1] = this.getCards()[value2];
            this.getCards()[value2] = temp;
        }
    }

    isHighCard() {
        let resp = true;
        this.getCards().forEach(card => {
            if (this.countEqualValues(card) != 1) {
                resp = false;
            }
        });
        return resp;
    }

    existPair(pair) {
        let isExist = false;
        this.#pairs.forEach(value => {
            if (pair == value) {
                isExist = true;
            }
        });
        return isExist;
    }

    countPairs() {
        this.#pairs = [];
        this.#pokerHandRest = [];
        this.getCards().forEach(card => {
            if (this.countEqualValues(card) == 2) {
                if (!this.existPair(card.getValueCard())) {
                    this.#pairs.push(card.getValueCard());
                }
            } else {
                this.#pokerHandRest.push(card.getValueCard());
            }
        });
        return this.#pairs.length;
    }

    countSameKind(searchVal) {
        this.getCards().forEach(card => {
            if (this.countEqualValues(card) == searchVal) {
                this.#sameKind = card.getValueCard();
            }
        });
        return parseInt(this.#sameKind);
    }

    isStraight() {
        let cardsOrdered = '';
        const especialCase = 'A5432';
        this.getCards().forEach(card => {
            cardsOrdered += card.getValueCard();
        });
        const firstValue = cardsOrdered.charAt(0);
        const idealOrder = this.generateSecuence(firstValue);
        return cardsOrdered == idealOrder || cardsOrdered == especialCase ? true : false;
    }

    isFlush() {
        let sameSuit = 0;
        const firstValueSuit = this.getCards()[0].getSuitCard();
        const numCards = this.getCards().length;
        for (let index = 0; index < numCards; index++) {
            if (this.getCards()[index].getSuitCard() == firstValueSuit) {
                sameSuit++;
            }
        }
        return numCards == sameSuit ? true : false;
    }

    isFullHouse() {
        const isThreeKind = this.countSameKind(3);
        const isPair = this.countPairs();
        return isThreeKind != 0 && isPair == 1 ? true : false;
    }

    isStraightFlush() {
        return this.isStraight() && this.isFlush() ? true : false;
    }
}