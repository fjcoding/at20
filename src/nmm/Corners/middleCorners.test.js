import { middleCorners } from './middleCorners';
import { positions } from '../possiblePositions';

describe ('Test middleCorners class', () =>{
    it('should check if a position is a middle coner', () =>{
        const coner1 = new middleCorners();
        const b5 = [positions.b5.row, positions.b5.col];
        const b1 = [positions.b1.row, positions.b1.col];
        const f5 = [positions.f5.row, positions.f5.col];
        const f1 = [positions.f1.row, positions.f1.col];
        const e3 = [positions.e3.row, positions.e3.col];
        expect(coner1.isMiddle(b5)).toBe(true);
        expect(coner1.isMiddle(b1)).toBe(true);
        expect(coner1.isMiddle(f5)).toBe(true);
        expect(coner1.isMiddle(f1)).toBe(true);
        expect(coner1.isMiddle(e3)).toBe(false);
    });
    it('should check move available', () =>{
        const coner1 = new middleCorners();
        //coner position
        const b5 = [positions.b5.row, positions.b5.col];
        const b1 = [positions.b1.row, positions.b1.col];
        const f5 = [positions.f5.row, positions.f5.col];
        const f1 = [positions.f1.row, positions.f1.col];
        //No corner positions
        const b3 = [positions.b3.row, positions.b3.col];
        const d5 = [positions.d5.row, positions.d5.col];
        const d1 = [positions.d1.row, positions.d1.col];
        const f3 = [positions.f3.row, positions.f3.col];
        const a3 = [positions.a3.row, positions.a3.col];
        expect(coner1.checkMove(b5, b3)).toBe(true);
        expect(coner1.checkMove(b5, d5)).toBe(true);
        expect(coner1.checkMove(b1, b3)).toBe(true);
        expect(coner1.checkMove(b1, d1)).toBe(true);
        expect(coner1.checkMove(f5, d5)).toBe(true);
        expect(coner1.checkMove(f5, f3)).toBe(true);
        expect(coner1.checkMove(f1, d1)).toBe(true);
        expect(coner1.checkMove(f1, f3)).toBe(true);

        expect(coner1.checkMove(b5, b1)).toBe(false);
        expect(coner1.checkMove(b5, a3)).toBe(false);
        expect(coner1.checkMove(b1, f1)).toBe(false);
        expect(coner1.checkMove(f5, b5)).toBe(false);
        expect(coner1.checkMove(f1, b1)).toBe(false);
    });
});