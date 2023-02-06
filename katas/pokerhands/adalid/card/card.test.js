import { Card } from './card';

describe('Tests for card class', () => {
    it('should be able to parse a  numeric to string input', () => {
        const input = '2C';
        const card = new Card(input);
        expect(card.value).toBe('2');
        expect(card.suit).toBe('C');
    });
    it('should throw an error when card suit has a diferent suit to D, H, S, C', () => {
        const input = '2A';
        const handler = ()=>{
            new Card(input);
        };
        expect(handler).toThrow(new Error('(A) Invalid Suit Value'));
    });
    it('should throw an error when card input has more than 2 characters', () => {
        const input = '16A';
        const handler = ()=>{
            new Card(input);
        };
        expect(handler).toThrow(new Error('(16A) is not valid input'));
    });
});


