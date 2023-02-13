import { outsideCorners } from './outsideCorners';
import { positions } from './possiblePositions';

describe ('Test outsideCorners class', () =>{
    it('should check if a position is a outside coner', () =>{
        const coner1 = new outsideCorners();
        const a0 = [positions.a0.row, positions.a0.col];
        const a6 = [positions.a6.row, positions.a6.col];
        const g0 = [positions.g0.row, positions.g0.col];
        const g6 = [positions.g6.row, positions.g6.col];
        const e3 = [positions.e3.row, positions.e3.col];
        expect(coner1.isOutside(a6)).toBe(true);
        expect(coner1.isOutside(a0)).toBe(true);
        expect(coner1.isOutside(g0)).toBe(true);
        expect(coner1.isOutside(g6)).toBe(true);
        expect(coner1.isOutside(e3)).toBe(false);
    });
    it('should check move available', () =>{
        const coner1 = new outsideCorners();
        //coner position
        const a0 = [positions.a0.row, positions.a0.col];
        const a6 = [positions.a6.row, positions.a6.col];
        const g0 = [positions.g0.row, positions.g0.col];
        const g6 = [positions.g6.row, positions.g6.col];
        //No corner positions
        const a3 = [positions.a3.row, positions.a3.col];
        const d6 = [positions.d6.row, positions.d6.col];
        const g3 = [positions.g3.row, positions.g3.col];
        const d0 = [positions.d0.row, positions.d0.col];
        const f3 = [positions.f3.row, positions.f3.col];
        expect(coner1.checkMove(a0, a3)).toBe(true);
        expect(coner1.checkMove(a6, a3)).toBe(true);
        expect(coner1.checkMove(g0, d0)).toBe(true);
        expect(coner1.checkMove(g6, g3)).toBe(true);

        expect(coner1.checkMove(g6, d0)).toBe(false);
        expect(coner1.checkMove(g0, d6)).toBe(false);
        expect(coner1.checkMove(a0, a6)).toBe(false);
        expect(coner1.checkMove(a6, g6)).toBe(false);
        expect(coner1.checkMove(a6, g3)).toBe(false);
        expect(coner1.checkMove(g0, a0)).toBe(false);
        expect(coner1.checkMove(g6, a6)).toBe(false);
        expect(coner1.checkMove(g6, f3)).toBe(false);
        expect(coner1.checkMove(a0, d6)).toBe(false);
    });
});