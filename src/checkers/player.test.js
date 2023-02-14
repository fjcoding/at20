import { action } from './action.js';
import { Player } from './player.js';

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