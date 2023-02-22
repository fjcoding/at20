import { Player } from '../player.js';

describe('Player', () => {
    let player;

    beforeEach(() => {
        const pieces = [
            { x: 1, y: 1, color: 'red' },
            { x: 2, y: 2, color: 'red' }
        ];
        player = new Player('Player 1', 'R', pieces, {
            redPieces: pieces,
            whitePieces: []
        });
    });

    it('should select a piece', () => {
        player.selectPiece({ x: 1, y: 1 });
        expect(player.pieceSelected).toEqual({ x: 1, y: 1, color: 'red' });
    });

    test('should throw an error if the position is invalid', () => {
        expect(() => player.selectPiece({ x: 10, y: 10 })).toThrow('Invalid position');
    });

    test('should throw an error if the player does not have a piece at the given position', () => {
        expect(() => player.selectPiece({ x: 3, y: 3 })).toThrow('Invalid piece for player, Player 1');
    });

    it('should throw an error when trying to select an invalid piece', () => {
        expect(() => player.selectPiece({ x: 10, y: 10 })).toThrow('Invalid position');
    });

    it('should move a piece', () => {
        player.selectPiece({ x: 1, y: 1 });
        player.movePiece({ x: 2, y: 2 });
        expect(player.pieceSelected).toEqual({ x: 2, y: 2, color: 'red' });
    });

    it('should throw an error when trying to move a piece to an invalid position', () => {
        player.selectPiece({ x: 1, y: 1 });
        expect(() => player.movePiece({ x: 2, y: 3 })).toThrow('Invalid target position');
    });
});