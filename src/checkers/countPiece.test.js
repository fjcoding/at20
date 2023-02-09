import { CountPiece } from './countPiece';

describe('Tests for CountPiece class', () => {
    it('should be able to return the correct amount pieces', () => {
        let totalPieces = 12;
        let lostPieces = 3;
        const countPiece = new CountPiece(totalPieces, lostPieces);
        expect(countPiece.getTotalPieces()).toBe(9);
    });

    it('should be able to return the correct amount pieces', () => {
        let totalPieces = 12;
        let lostPieces = 3;
        const countPiece = new CountPiece(totalPieces, lostPieces);
        expect(countPiece.getTotalPieces()).toBe(9);
    });
});