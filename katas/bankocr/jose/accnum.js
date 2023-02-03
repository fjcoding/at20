import { Digit } from './digit';

export class AccountNumber {
    #topLine;

    #midLine;

    #botLine;

    #digits;

    constructor(topLine, midLine, botLine) {
        this.#topLine = topLine;
        this.#midLine = midLine;
        this.#botLine = botLine;
        this.#parseDigits();
    }

    get digits() {
        return this.#digits;
    }

    asNumber() {
        let number = 0;
        this.#digits.forEach(digit => {
            number *= 10;
            number += digit.asNumber();
        });
        return number;
    }

    #parseDigits() {
        this.#digits = [];
        for (var index = 0; index < 27; index += 3) {
            const topLineDigit = this.#topLine.substring(index, index + 3);
            const midLineDigit = this.#midLine.substring(index, index + 3);
            const botLineDigit = this.#botLine.substring(index, index + 3);
            this.#digits.push(new Digit(topLineDigit, midLineDigit, botLineDigit));
        }
    }
    #isValid(){
        let number = this.asNumber();
        let instring = number.toString();
        let result = 0;
        for (let i = instring.lenght - 1; i >= 0; i--) {
            const element = array[i];
            element*
        };
        if ((d1 + 2*d2 + 3*d3 + 4*d4 + 5*d5 + 6*d6 + 7*d7 + 8*d8 + 9*d9) % 11 == 0)
        {

        }
    }
}