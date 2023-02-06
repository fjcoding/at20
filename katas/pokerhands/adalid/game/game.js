import { Card } from '../card/card.js';
import { Hand } from '../hand/hand.js';


export class Game {
    hands = [];

    constructor(stringHands) {
        const mappedHands = this.getMappedHands(stringHands);
        const sortedCardsHands = this.getSortedHands(mappedHands);
        this.hands = sortedCardsHands;
    }

    getMappedHands(stringHands) {
        const hands = stringHands.map((inputValue) => {
            const stringValues = inputValue.split(' ');
            const cards = stringValues.map(stringValue => {
                return new Card(stringValue);
            });
            return new Hand(cards);
        });
        return hands;
    }

    getSortedHands(hands) {
        const hand1 = hands[0];
        const hand2 = hands[1];
        const compareFunction = (cardA, cardB) => {
            return cardA.getNumericValue() - cardB.getNumericValue();
        };
        hand1.cards = hand1.cards.sort(compareFunction);
        hand2.cards = hand2.cards.sort(compareFunction);
        return [hand1, hand2];
    }

    compareHands() {
        const hand1 = this.hands[0];
        const hand2 = this.hands[1];
        if (hand1.getScore() > hand2.getScore()) {
            return hand1;
        }
        return hand2;
    }
}
