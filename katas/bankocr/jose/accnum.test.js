import { AccountNumber } from './accnum';

describe('Tests for account number class', () => {
    it('should be able to receive three lines and generate digits for account number', () => {
        const topLine = '    _  _     _  _  _  _  _ ';
        const midLine = '  | _| _||_||_ |_   ||_||_|';
        const botLine = '  ||_  _|  | _||_|  ||_| _|';
        const accNum = new AccountNumber(topLine, midLine, botLine);

        expect(accNum.digits.length).toBe(9);
        expect(accNum.digits[0].asNumber()).toBe(1);
        expect(accNum.digits[1].asNumber()).toBe(2);
        expect(accNum.digits[2].asNumber()).toBe(3);
        expect(accNum.digits[3].asNumber()).toBe(4);
        expect(accNum.digits[4].asNumber()).toBe(5);
        expect(accNum.digits[5].asNumber()).toBe(6);
        expect(accNum.digits[6].asNumber()).toBe(7);
        expect(accNum.digits[7].asNumber()).toBe(8);
        expect(accNum.digits[8].asNumber()).toBe(9);
    });

    it('should be able to generate numeric value of an account number', () => {
        const topLine = ' _  _        _  _  _  _  _ ';
        const midLine = '  | _|  ||_||_ |_ | ||_|| |';
        const botLine = '  ||_   |  | _||_||_||_||_|';
        const accNum = new AccountNumber(topLine, midLine, botLine);

        expect(accNum.asNumber()).toBe(721456080);
    });
});


describe('Tests for an account to a true account', () => {
    it('should be able to parse a digit to numeric 0 given three string lines for OCR 0', () => {
        const topLine = ' _  _        _  _  _  _  _ ';
        const midLine = '  | _|  ||_||_ |_ | ||_|| |';
        const botLine = '  ||_   |  | _||_||_||_||_|';
        const accNum = new AccountNumber(topLine, midLine, botLine);
        expect(accNum.isValid()).toBe(true);
    });
});
