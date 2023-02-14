import { middlePositionsInside } from './middlePositionsInside.js';
import { positions } from '../possiblePositions.js';

describe ('Test middlePositionsInside class', () =>{
    it('should check if a position is a middle Positions Inside', () =>{
        const middle1 = new middlePositionsInside();
        const d4 = [positions.d4.row, positions.d4.col];
        const c3 = [positions.c3.row, positions.c3.col];
        const d2 = [positions.d2.row, positions.d2.col];
        const e3 = [positions.e3.row, positions.e3.col];
        const a0 = [positions.a0.row, positions.a0.col];
        expect(middle1.isMiddleInside(d4)).toBe(true);
        expect(middle1.isMiddleInside(c3)).toBe(true);
        expect(middle1.isMiddleInside(d2)).toBe(true);
        expect(middle1.isMiddleInside(e3)).toBe(true);
        expect(middle1.isMiddleInside(a0)).toBe(false);
    });
    it('should check move available', () =>{
        const middle1 = new middlePositionsInside();
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
        const c4 = [positions.c4.row, positions.c4.col];
        const e4 = [positions.e4.row, positions.e4.col];
        const b5 = [positions.b5.row, positions.b5.col];
        expect(middle1.checkMove(d4, d5)).toBe(true);
        expect(middle1.checkMove(d4, c4)).toBe(true);
        expect(middle1.checkMove(d4, e4)).toBe(true);

        expect(middle1.checkMove(b3, d0)).toBe(false);
        expect(middle1.checkMove(d4, d0)).toBe(false);
        expect(middle1.checkMove(d4, g3)).toBe(false);
        expect(middle1.checkMove(d4, d0)).toBe(false);
        expect(middle1.checkMove(d4, d6)).toBe(false);
        expect(middle1.checkMove(d4, e3)).toBe(false);
        expect(middle1.checkMove(d4, g6)).toBe(false);
        expect(middle1.checkMove(d4, g3)).toBe(false);
        expect(middle1.checkMove(d4, b5)).toBe(false);
        expect(middle1.checkMove(d4, f1)).toBe(false);
        expect(middle1.checkMove(d4, g0)).toBe(false);
        expect(middle1.checkMove(d4, f3)).toBe(false);
        expect(middle1.checkMove(d4, a0)).toBe(false);
        expect(middle1.checkMove(d4, a3)).toBe(false);
        expect(middle1.checkMove(d4, a6)).toBe(false);
    });
});