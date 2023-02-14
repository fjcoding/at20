import { middlePositions } from './middlePositions.js';
import { positions } from '../possiblePositions.js';

describe ('Test middlePositions class', () =>{
    it('should check if a position is a coner', () =>{
        const middle1 = new middlePositions();
        const a3 = [positions.a3.row, positions.a3.col];
        const b3 = [positions.b3.row, positions.b3.col];
        const c3 = [positions.c3.row, positions.c3.col];
        const e3 = [positions.e3.row, positions.e3.col];
        const d5 = [positions.d5.row, positions.d5.col];
        const a0 = [positions.a0.row, positions.a0.col];
        expect(middle1.isMiddle(a3)).toStrictEqual([true, 1]);
        expect(middle1.isMiddle(b3)).toStrictEqual([true, 2]);
        expect(middle1.isMiddle(c3)).toStrictEqual([true, 3]);
        expect(middle1.isMiddle(e3)).toStrictEqual([true, 3]);
        expect(middle1.isMiddle(d5)).toStrictEqual([true, 2]);
        expect(middle1.isMiddle(a0)).toStrictEqual([false, 0]);
    });
    it('should check move available', () =>{
        const middle1 = new middlePositions();
        const a6 = [positions.a6.row, positions.a6.col];
        const a3 = [positions.a3.row, positions.a3.col];
        const d6 = [positions.d6.row, positions.d6.col];
        const b3 = [positions.b3.row, positions.b3.col];
        const e3 = [positions.e3.row, positions.e3.col];
        const b5 = [positions.b5.row, positions.b5.col];
        const d5 = [positions.d5.row, positions.d5.col];
        const c3 = [positions.c3.row, positions.c3.col];
        const b1 = [positions.b1.row, positions.b1.col];
        const c4 = [positions.c4.row, positions.c4.col];
        const e2 = [positions.e2.row, positions.e2.col];

        expect(middle1.checkMove(a3, a6)).toBe(true);
        expect(middle1.checkMove(b3, b1)).toBe(true);
        expect(middle1.checkMove(c3, c4)).toBe(true);
        expect(middle1.checkMove(e3, e2)).toBe(true);
        expect(middle1.checkMove(d5, d6)).toBe(true);

        expect(middle1.checkMove(b1, e3)).toBe(false);
        expect(middle1.checkMove(e2, d6)).toBe(false);
        expect(middle1.checkMove(b5, a3)).toBe(false);
        expect(middle1.checkMove(a6, b5)).toBe(false);
        expect(middle1.checkMove(b5, b1)).toBe(false);
        expect(middle1.checkMove(e2, a6)).toBe(false);
        expect(middle1.checkMove(b1, b5)).toBe(false);
    });
});