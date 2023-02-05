import { Card } from './card';

describe('Tests for card class', () => {
    //TODO: return something
    it('should be able to parse a  numeric to string input', () => {
        const input = '2C';
        const card = new Card(input);
        expect(card.value).toBe('2');
        expect(card.suit).toBe('C');
        expect(card.completeSuit).toBe('CLUBS');
    });
    //TODO: return something
    it('should be able to parse a  numeric to string input', () => {
        const input = '2A';
        const handler = ()=>{
            new Card(input);
        };
        expect(handler).toThrow(new Error('(A) Invalid Suit Value'));
    });
    //TODO: return something }}}fit solo corre el test q se indica
    it('should throw an error when card input has more than 2 caracters', () => {
        const input = '16A';
        const handler = ()=>{
            new Card(input);
        };
        expect(handler).toThrow(new Error('(16A) is not valid input'));
    });
});


