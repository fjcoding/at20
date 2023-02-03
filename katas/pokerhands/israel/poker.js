export class pokerGame {
    constructor(hand1, hand2) {
        this.hand1 = hand1;
        this.hand2 = hand2;
    }

    //9
    isSF(hand) {
        const numbers = this.#onliNumbers(hand);
        const suits = this.#onliSuit(hand);
        const same = (element) => element === suits[0];
        if (!suits.every(same)) {
            return [false, 0, 0];
        }
        if (!numbers.sort() === this.#range(5, numbers.sort()[0])) {
            return [false, 0, 0];
        }
        return [true, Math.max(...numbers), 0];
    }

    //8
    isSK(hand) {
        const numbers = this.#onliNumbers(hand);
        let count = {};
        let uniqueNumber;
        let repitedNumber;
        for (let element of numbers) {
            count[element] = (count[element] || 0) + 1;
        }
        if (Object.keys(count).length === 2) {
            for (let index of Object.keys(count)) {
                if (count[index] == 4) {
                    repitedNumber = parseInt(index);
                }
                if (count[index] == 1) {
                    uniqueNumber = parseInt(index);
                }
            }
            return [true, repitedNumber, uniqueNumber];
        }
        return [false, 0, 0];
    }

    #onliNumbers (hand) {
        const numbers = [];
        const str = {'T':10, 'J':11, 'Q':12, 'K':13, 'A':14};
        for (const card of hand) {
            if (card[0] in str) {
                numbers.push(str[card[0]]);
                continue;
            }
            numbers.push(parseInt(card[0]));
        }
        return numbers;
    }

    #onliSuit (hand) {
        const suits = [];
        for (const card of hand) {
            suits.push(card[1]);
        }
        return suits;
    }

    #range(n, start) {
        let range = [];

        for (let i = 0; i < n; i++) {
            range.push(start + i);
        }
        return range;
    }
}