import { Card } from './card';

export class PokerHand {
    static valueCards = {
        2: 1,
        3: 2,
        4: 3,
        5: 4,
        6: 5,
        7: 6,
        8: 7,
        9: 8,
        T: 9,
        J: 10,
        Q: 11,
        K: 12,
        A: 13
    };

    #cards;

    constructor(pokerHand) {
        this.#cards = [];
        pokerHand.forEach(card => {
            this.#cards.push(new Card(card));
        });
    }

    getCards() {
        return this.#cards;
    }

    getCardsLength() {
        return this.#cards.length;
    }

    isRepeted(currentCard, pokerHand) {
        let count = 0;
        pokerHand.forEach(card => {
            if (currentCard.getValueCard() == card.getValueCard()) {
                count++;
            }
        });
        return count;
    }

    isHighCard() {
        let resp;
        this.getCards().forEach(card => {
            resp = this.isRepeted(card, this.getCards()) > 1 ? false : true;
        });
        return resp;
    }
}