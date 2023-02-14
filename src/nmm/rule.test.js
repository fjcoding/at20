import { positions } from './possiblePositions';
import { rule } from './rule';

describe('Tests for rule class', () => {
    it('should indentify a possible positions', () => {
        let rule1 = new rule();
        const a0 = [positions.a0.row, positions.a0.col];
        const noPossiblePosition = [0, 1];
        const noPossiblePosition2 = [0, 2];
        expect(rule1.isPossiblePosition(a0)).toBe(true);
        expect(rule1.isPossiblePosition(noPossiblePosition)).toBe(false);
        expect(rule1.isPossiblePosition(noPossiblePosition2)).toBe(false);
    });
    it('should check a possible move', () => {
        let rule1 = new rule();
        const a0 = [positions.a0.row, positions.a0.col];
        const a3 = [positions.a3.row, positions.a3.col];
        const noPossiblePosition = [0, 1];
        const noPossiblePosition2 = [0, 2];
        expect(rule1.checkMove(a0, a3)).toBe(true);
        expect(rule1.checkMove(noPossiblePosition, a0)).toBe(false);
        expect(rule1.checkMove(noPossiblePosition2, a3)).toBe(false);
    });
});