import { middlePositionsMiddle } from './middlePositionsMiddle';
import { positions } from '../possiblePositions';

describe ('Test middlePositionsMiddle class', () =>{
    it('should check if a position is a middle Positions Middle', () =>{
        const middle1 = new middlePositionsMiddle();
        const b3 = [positions.b3.row, positions.b3.col];
        const d5 = [positions.d5.row, positions.d5.col];
        const f3 = [positions.f3.row, positions.f3.col];
        const d1 = [positions.d1.row, positions.d1.col];
        const d0 = [positions.d0.row, positions.d0.col];

        expect(middle1.isMiddleMiddle(b3)).toBe(true);
        expect(middle1.isMiddleMiddle(d5)).toBe(true);
        expect(middle1.isMiddleMiddle(f3)).toBe(true);
        expect(middle1.isMiddleMiddle(d1)).toBe(true);
        expect(middle1.isMiddleMiddle(d0)).toBe(false);
    });
    it('should check move available', () =>{
        const middle1 = new middlePositionsMiddle();
        //positions
        const a0 = [positions.a0.row, positions.a0.col];
        const a6 = [positions.a6.row, positions.a6.col];
        const g0 = [positions.g0.row, positions.g0.col];
        const g6 = [positions.g6.row, positions.g6.col];
        const a3 = [positions.a3.row, positions.a3.col];
        const d6 = [positions.d6.row, positions.d6.col];
        const g3 = [positions.g3.row, positions.g3.col];
        const d0 = [positions.d0.row, positions.d0.col];
        const f3 = [positions.f3.row, positions.f3.col];
        const b3 = [positions.b3.row, positions.b3.col];
        const e3 = [positions.e3.row, positions.e3.col];
        const d5 = [positions.d5.row, positions.d5.col];
        const f1 = [positions.f1.row, positions.f1.col];
        const d4 = [positions.d4.row, positions.d4.col];
        const c3 = [positions.c3.row, positions.c3.col];
        const b5 = [positions.b5.row, positions.b5.col];
        const b1 = [positions.b1.row, positions.b1.col];
        const c4 = [positions.c4.row, positions.c4.col];
        const f5 = [positions.f5.row, positions.f5.col];
        expect(middle1.checkMove(b3, c3)).toBe(true);
        expect(middle1.checkMove(b3, a3)).toBe(true);
        expect(middle1.checkMove(b3, b5)).toBe(true);
        expect(middle1.checkMove(b3, b1)).toBe(true);
        expect(middle1.checkMove(d5, d6)).toBe(true);
        expect(middle1.checkMove(d5, d4)).toBe(true);
        expect(middle1.checkMove(d5, b5)).toBe(true);
        expect(middle1.checkMove(d5, f5)).toBe(true);

        expect(middle1.checkMove(d4, d0)).toBe(false);
        expect(middle1.checkMove(b3, g3)).toBe(false);
        expect(middle1.checkMove(b3, d0)).toBe(false);
        expect(middle1.checkMove(b3, d6)).toBe(false);
        expect(middle1.checkMove(b3, e3)).toBe(false);
        expect(middle1.checkMove(b3, g6)).toBe(false);
        expect(middle1.checkMove(b3, g3)).toBe(false);
        expect(middle1.checkMove(b3, d5)).toBe(false);
        expect(middle1.checkMove(b3, f1)).toBe(false);
        expect(middle1.checkMove(b3, g0)).toBe(false);
        expect(middle1.checkMove(b3, f3)).toBe(false);
        expect(middle1.checkMove(b3, c4)).toBe(false);
        expect(middle1.checkMove(b3, a0)).toBe(false);
        expect(middle1.checkMove(b3, a6)).toBe(false);
    });
});