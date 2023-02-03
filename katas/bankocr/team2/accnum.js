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

    verifyNumber(newNumber) {
        var stringNumber = str(newNumber);
        return stringNumber;
    }
}