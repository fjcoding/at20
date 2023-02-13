import { corners } from './corners';
import { positions } from '../possiblePositions';

describe ('Test corners class', () =>{
    it('should check if a position is a coner', () =>{
        const coner1 = new corners();
        const a6 = [positions.a6.row, positions.a6.col];
        const b5 = [positions.b5.row, positions.b5.col];
        const e2 = [positions.e2.row, positions.e2.col];
        const b1 = [positions.b1.row, positions.b1.col];
        const a3 = [positions.a3.row, positions.a3.col];
        expect(coner1.isCorner(a6)).toStrictEqual([true, 1]);
        expect(coner1.isCorner(b5)).toStrictEqual([true, 2]);
        expect(coner1.isCorner(e2)).toStrictEqual([true, 3]);
        expect(coner1.isCorner(b1)).toStrictEqual([true, 2]);
        expect(coner1.isCorner(a3)).toStrictEqual([false, 0]);
    });
    it('should check move available', () =>{
        const coner1 = new corners();
        //coner position
        const a6 = [positions.a6.row, positions.a6.col];
        const b5 = [positions.b5.row, positions.b5.col];
        const e2 = [positions.e2.row, positions.e2.col];
        const b1 = [positions.b1.row, positions.b1.col];
        //No corner positions
        const a3 = [positions.a3.row, positions.a3.col];
        const d6 = [positions.d6.row, positions.d6.col];
        const b3 = [positions.b3.row, positions.b3.col];
        const e3 = [positions.e3.row, positions.e3.col];

        expect(coner1.checkMove(a6, a3)).toBe(true);
        expect(coner1.checkMove(a6, d6)).toBe(true);
        expect(coner1.checkMove(b5, b3)).toBe(true);
        expect(coner1.checkMove(e2, e3)).toBe(true);
        expect(coner1.checkMove(b1, b3)).toBe(true);

        expect(coner1.checkMove(b1, e3)).toBe(false);
        expect(coner1.checkMove(e2, d6)).toBe(false);
        expect(coner1.checkMove(b5, a3)).toBe(false);
        expect(coner1.checkMove(a6, b5)).toBe(false);
        expect(coner1.checkMove(b5, b1)).toBe(false);
        expect(coner1.checkMove(e2, a6)).toBe(false);
        expect(coner1.checkMove(b1, b5)).toBe(false);
    });
});