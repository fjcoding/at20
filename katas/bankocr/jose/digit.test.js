import { Digit } from './digit';

describe('Tests for digit class', () => {
    it('should be able to parse a digit to numeric 0 given three string lines for OCR 0', () => {
        const topLine = ' _ ';
        const midLine = '| |';
        const botLine = '|_|';

        const digit = new Digit(topLine, midLine, botLine);
        expect(digit.asNumber()).toBe(0);
    });

    it('should be able to parse a digit to numeric 1 given three string lines for OCR 1', () => {
        const topLine = '   ';
        const midLine = '  |';
        const botLine = '  |';

        const digit = new Digit(topLine, midLine, botLine);
        expect(digit.asNumber()).toBe(1);
    });

    it('should be able to parse a digit to numeric 2 given three string lines for OCR 2', () => {
        const topLine = ' _ ';
        const midLine = ' _|';
        const botLine = '|_ ';

        const digit = new Digit(topLine, midLine, botLine);
        expect(digit.asNumber()).toBe(2);
    });

    it('should be able to parse a digit to numeric 3 given three string lines for OCR 3', () => {
        const topLine = ' _ ';
        const midLine = ' _|';
        const botLine = ' _|';

        const digit = new Digit(topLine, midLine, botLine);
        expect(digit.asNumber()).toBe(3);
    });

    it('should be able to parse a digit to numeric 4 given three string lines for OCR 4', () => {
        const topLine = '   ';
        const midLine = '|_|';
        const botLine = '  |';

        const digit = new Digit(topLine, midLine, botLine);
        expect(digit.asNumber()).toBe(4);
    });

    it('should be able to parse a digit to numeric 5 given three string lines for OCR 5', () => {
        const topLine = ' _ ';
        const midLine = '|_ ';
        const botLine = ' _|';

        const digit = new Digit(topLine, midLine, botLine);
        expect(digit.asNumber()).toBe(5);
    });

    it('should be able to parse a digit to numeric 6 given three string lines for OCR 6', () => {
        const topLine = ' _ ';
        const midLine = '|_ ';
        const botLine = '|_|';

        const digit = new Digit(topLine, midLine, botLine);
        expect(digit.asNumber()).toBe(6);
    });

    it('should be able to parse a digit to numeric 7 given three string lines for OCR 7', () => {
        const topLine = ' _ ';
        const midLine = '  |';
        const botLine = '  |';

        const digit = new Digit(topLine, midLine, botLine);
        expect(digit.asNumber()).toBe(7);
    });

    it('should be able to parse a digit to numeric 8 given three string lines for OCR 8', () => {
        const topLine = ' _ ';
        const midLine = '|_|';
        const botLine = '|_|';

        const digit = new Digit(topLine, midLine, botLine);
        expect(digit.asNumber()).toBe(8);
    });

    it('should be able to parse a digit to numeric 9 given three string lines for OCR 9', () => {
        const topLine = ' _ ';
        const midLine = '|_|';
        const botLine = ' _|';

        const digit = new Digit(topLine, midLine, botLine);
        expect(digit.asNumber()).toBe(9);
    });
});