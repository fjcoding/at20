import Hand from './hand.js';

class Player {
    // Private fields
    #name;

    #hand;

    constructor(name = 'defaul', hand = null) {
        this.#name = name;
        this.#hand = hand == null ? null : new Hand(hand);
    }

    toString() {
        return `${this.getName()}: ${this.getHand().toString()}`;
    }

    getName() {
        return this.#name;
    }

    getHand() {
        return this.#hand;
    }

    setHand(hand) {
        this.#hand = new Hand(hand);
    }

    setName(name) {
        this.#name = name;
    }
}

export default Player;