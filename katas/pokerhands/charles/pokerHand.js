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

    #threeKind;

    #straight;

    #flush;

    #fullHouse;

    #fourKind;

    #straightFlush;

    constructor(pokerHand) {
        this.#cards = [];
        pokerHand.forEach(card => {
            this.#cards.push(new Card(card));
        });
        this.#threeKind = 0;
    }

    getCards() {
        return this.#cards;
    }

    countEqualValues(currentCard, pokerHand) {
        let count = 0;
        pokerHand.forEach(card => {
            if (currentCard.getValueCard() == card.getValueCard()) {
                count++;
            }
        });
        return count;
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

    isHighCard() {
        let resp = true;
        this.getCards().forEach(card => {
            if (this.countEqualValues(card, this.getCards()) != 1) {
                resp = false;
            }
        });
        return resp;
    }

    countPairs() {
        this.#pairs = [];
        this.getCards().forEach(card => {
            if (this.countEqualValues(card, this.getCards()) == 2) {
                if (!this.existPair(card.getValueCard())) {
                    this.#pairs.push(card.getValueCard());
                }
            }
        });
        return this.#pairs.length;
    }

    isThreeKind() {
        this.getCards().forEach(card => {
            if (this.countEqualValues(card, this.getCards()) == 3) {
                this.#threeKind = card.getValueCard();
            }
        });
        return parseInt(this.#threeKind);
    }

    isStraight() {
        let cardsOrdered = '';
        const especialCase = 'A5432';
        this.ordering();
        this.getCards().forEach(card => {
            cardsOrdered += card.getValueCard();
        });
        const firstValue = cardsOrdered.charAt(0);
        const idealOrder = this.generateSecuence(firstValue);
        return cardsOrdered == idealOrder || cardsOrdered == especialCase ? true : false;
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
}