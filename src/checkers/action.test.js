import { action } from './action';

describe('Tests for isValidPosition method ', () => {
    it('sets player.pieceSelected to the selected piece', () => {
        const player = {
            name: 'Pedrito',
            pieceColor: 'R',
            game: {
                redPieces: [{ x: 0, y: 0 }]
            }
        };
        const positions = { x: 0, y: 0 };
        action.selectPiece(player, positions);
        expect(player.pieceSelected).toEqual({ x: 0, y: 0 });
    });

    it('should throw an error if the position is invalid', () => {
        const player = {
            name: 'Pedrito',
            pieceColor: 'R',
            game: {
                redPieces: []
            }
        };
        const positions = { x: 8, y: 2 };
        expect(() => action.selectPiece(player, positions)).toThrow('Invalid position');
    });

    it('updates player.pieceSelected to the new position', () => {
        const player = {
            name: 'Pedrito',
            pieceSelected: { x: 0, y: 0, color: 'red' }
        };
        const targetPosition = { x: 1, y: 1 };
        action.movePiece(player, targetPosition);
        expect(player.pieceSelected).toEqual({ x: 1, y: 1, color: 'red' });
    });

    it('should throw an error if the target position is invalid', () => {
        const player = {
            name: 'Player 1',
            pieceColor: 'R',
            game: {
                redPieces: [],
                whitePieces: []
            },
            pieceSelected: { x: 3, y: 4, color: 'red' }
        };
        const targetPosition = { x: 8, y: 2 };
        expect(() => action.movePiece(player, targetPosition)).toThrow('Invalid target position is outside of the grid');
    });

    it('should able to return false when input a incorrect position', () => {
        expect(action.isValidPosition(-2, 9)).toEqual(false);
    });

    it('should able to return true when input a correct position', () => {
        expect(action.isValidPosition(2, 5)).toEqual(true);
    });
});
