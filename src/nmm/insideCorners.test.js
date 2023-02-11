import { insideCorners } from './insideCorners';
import { positions } from './possiblePositions';

describe ('Test insideCorners class', () =>{
    it('should check if a position is a inside coner', () =>{
        const coner1 = new insideCorners();
        const c2 = [positions.c2.row, positions.c2.col];
        const e2 = [positions.e2.row, positions.e2.col];
        const c4 = [positions.c4.row, positions.c4.col];
        const e4 = [positions.e4.row, positions.e4.col];
        const e3 = [positions.e3.row, positions.e3.col];
        expect(coner1.isInside(c2)).toBe(true);
        expect(coner1.isInside(e2)).toBe(true);
        expect(coner1.isInside(c4)).toBe(true);
        expect(coner1.isInside(e4)).toBe(true);
        expect(coner1.isInside(e3)).toBe(false);
    });
    it('should check move available', () =>{
        const coner1 = new insideCorners();
        //coner position
        const c2 = [positions.c2.row, positions.c2.col];
        const e2 = [positions.e2.row, positions.e2.col];
        const c4 = [positions.c4.row, positions.c4.col];
        const e4 = [positions.e4.row, positions.e4.col];
        //No corner positions
        const e3 = [positions.e3.row, positions.e3.col];
        const d4 = [positions.d4.row, positions.d4.col];
        const d2 = [positions.d2.row, positions.d2.col];
        const c3 = [positions.c3.row, positions.c3.col];
        const f3 = [positions.f3.row, positions.f3.col];
        expect(coner1.checkMove(c2, d2)).toBe(true);
        expect(coner1.checkMove(e2, d2)).toBe(true);
        expect(coner1.checkMove(c4, d4)).toBe(true);
        expect(coner1.checkMove(e4, d4)).toBe(true);

        expect(coner1.checkMove(c2, c3)).toBe(true);
        expect(coner1.checkMove(e2, e3)).toBe(true);
        expect(coner1.checkMove(c4, c3)).toBe(true);
        expect(coner1.checkMove(e4, e3)).toBe(true);

        expect(coner1.checkMove(c2, e4)).toBe(false);
        expect(coner1.checkMove(e2, c2)).toBe(false);
        expect(coner1.checkMove(c4, c2)).toBe(false);
        expect(coner1.checkMove(e4, c4)).toBe(false);
        expect(coner1.checkMove(e4, f3)).toBe(false);
    });
});