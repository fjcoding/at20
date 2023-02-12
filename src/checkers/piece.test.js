import { Piece } from './piece';

describe('Piece attributes and methods', () => {
    let piece;

    beforeEach(() => {
        piece = new Piece('red', 3, 4);
    });

    it('should have the correct color', () => {
        expect(piece.getColor()).toBe('red');
    });

    it('should have the correct initial x position', () => {
        expect(piece.getX()).toBe(3);
    });

    it('should have the correct initial y position', () => {
        expect(piece.getY()).toBe(4);
    });

    it('should not be a lady initially', () => {
        expect(piece.getTypeChain()).toBe('pawn');
    });

    it('should be able to move to a new position', () => {
        piece.currentlyPosition(5, 6);
        expect(piece.getX()).toBe(5);
        expect(piece.getY()).toBe(6);
    });

    it('should be able to become a lady', () => {
        piece.makeLady();
        expect(piece.getTypeChain()).toBe('lady');
    });
});