import { Action } from './action';
import { Piece } from './piece';

describe('Tests for Game class', () => {
    it('should able to move the piece in forward rigt position', () => {
        const action = new Action('FR');
        const piece = new Piece('B', 3, 2);
        expect(action.moveForwardRight()).toEqual(piece.currentlyPosition(4, 3));
    });
});