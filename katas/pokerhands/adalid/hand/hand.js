//import { Card } from './card.js';

export class Hand {
    cards = [];

    constructor(cards) {
        if (cards.length !== 5) {
            throw new Error('A hand should start with 5 cards');
        }
        this.cards = cards;
    }
}