import { middlePositionsOutside } from './middlePositionsOutside.js';
import { positions } from '../possiblePositions.js';

describe ('Test middlePositionsOutside class', () =>{
    it('should check if a position is a middle Positions Outside', () =>{
        const middle1 = new middlePositionsOutside();
        const a3 = [positions.a3.row, positions.a3.col];
        const d6 = [positions.d6.row, positions.d6.col];
        const g3 = [positions.g3.row, positions.g3.col];
        const d0 = [positions.d0.row, positions.d0.col];
        const e3 = [positions.e3.row, positions.e3.col];
        expect(middle1.isMiddleOutside(a3)).toBe(true);
        expect(middle1.isMiddleOutside(d6)).toBe(true);
        expect(middle1.isMiddleOutside(g3)).toBe(true);
        expect(middle1.isMiddleOutside(d0)).toBe(true);
        expect(middle1.isMiddleOutside(e3)).toBe(false);
    });
    it('should check move available', () =>{
        const middle1 = new middlePositionsOutside();
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
        expect(middle1.checkMove(a3, a6)).toBe(true);
        expect(middle1.checkMove(a3, a0)).toBe(true);
        expect(middle1.checkMove(a3, b3)).toBe(true);
        expect(middle1.checkMove(d6, a6)).toBe(true);

        expect(middle1.checkMove(d4, d0)).toBe(false);
        expect(middle1.checkMove(a3, g3)).toBe(false);
        expect(middle1.checkMove(a3, d0)).toBe(false);
        expect(middle1.checkMove(a3, d6)).toBe(false);
        expect(middle1.checkMove(a3, e3)).toBe(false);
        expect(middle1.checkMove(a3, g6)).toBe(false);
        expect(middle1.checkMove(a3, g3)).toBe(false);
        expect(middle1.checkMove(a3, d5)).toBe(false);
        expect(middle1.checkMove(a3, f1)).toBe(false);
        expect(middle1.checkMove(a3, g0)).toBe(false);
        expect(middle1.checkMove(a3, f3)).toBe(false);
    });
});