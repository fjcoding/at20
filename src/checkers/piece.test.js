import { Piece } from './piece';

describe('Tests for piece class', () => {
    it('should be able to parse a color and type to string input', () => {
        const input = 'BL';
        const piece = new Piece(input);
        expect(piece.color).toBe('B');
        expect(piece.type).toBe('L');
    });
    it('should throw an error when piece color has a diferent to B, W', () => {
        const input = 'AP';
        const handler = ()=>{
            new Piece(input);
        };
        expect(handler).toThrow(new Error('(A) Invalid color'));
    });
    it('should throw an error when piece type has a diferent to L, P', () => {
        const input = 'WA';
        const handler = ()=>{
            new Piece(input);
        };
        expect(handler).toThrow(new Error('(A) Invalid type'));
    });
    it('should throw an error when piece input has more than 2 characters', () => {
        const input = 'BBL';
        const handler = ()=>{
            new Piece(input);
        };
        expect(handler).toThrow(new Error('(BBL) is not valid input'));
    });
});