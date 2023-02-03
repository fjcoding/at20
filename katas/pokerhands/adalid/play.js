import { Card } from './card';
export class Play {
    #play;

    constructor(play) {
        this.#play = play;
    }

    card1 = new Card(5, 'C');
}