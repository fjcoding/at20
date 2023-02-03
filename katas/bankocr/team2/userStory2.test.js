import {AccountNumber}from './accnum';

describe('Tests for verifNumber funtion', () => { 
      it('should be able to receive three lines and generate digits for account number', () => { 
        const topLine = '    _  _     _  _  _  _  _ ';
        const midLine = '  | _| _||_||_ |_   ||_||_|';
        const botLine = '  ||_  _|  | _||_|  ||_| _|';
        const accNum = new AccountNumber(topLine, midLine, botLine);
        const entryNum = 345882865;
        const accountNum = new AccountNumber (topLine, midLine, botLine)
        //expect (accNum.verifyNumber(entryNum)).toBe(0);
        expect (accNum.verifyNumber(entryNum)).toBe('345882865');
     });});