import { Card } from '../card/card.js';
import { Hand } from '../hand/hand.js';


export class Game {
    hands = [];

    constructor(stringHands) {
        const mappedHands = this.getMappedHands(stringHands);
        this.hands = mappedHands;
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
}


const game = new Game(['2H 3D 5S 9C KD', '2C 3H 4S 8C AH']);

console.log(game);

