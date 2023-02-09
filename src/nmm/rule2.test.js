import { rule2 } from './rule2';
import { positions } from './possiblePositions';

describe('Tests for rule2 class', () => {
    it('Tests for "a0" position it shuld be just 2 possibilities ', () => {
        const Rule2 = new rule2();
        const option1 = [positions.a3.row, positions.a3.col];
        const option2 = [positions.d0.row, positions.d0.col];
        const testPosition = [positions.b5.row, positions.b5.col];
        expect(Rule2.a0Options(option1)).toEqual(true);
        expect(Rule2.a0Options(option2)).toEqual(true);
        expect(Rule2.a0Options(testPosition)).toEqual(false);
    });
    it('Tests for "a3" position it shuld be just 2 possibilities ', () => {
        const Rule2 = new rule2();
        const option1 =  [positions.a6.row, positions.a6.col];
        const option2 =  [positions.a0.row, positions.a0.col];
        const option3 =  [positions.b3.row, positions.b3.col];
        const testPosition = [positions.b5.row, positions.b5.col];
        expect(Rule2.a3Options(option1)).toEqual(true);
        expect(Rule2.a3Options(option2)).toEqual(true);
        expect(Rule2.a3Options(option3)).toEqual(true);
        expect(Rule2.a3Options(testPosition)).toEqual(false);
    });
    it('Tests for "a6" position it shuld be just 2 possibilities ', () => {
        const Rule2 = new rule2();
        const option1 =  [positions.a3.row, positions.a3.col];
        const option2 =  [positions.d6.row, positions.d6.col];
        const testPosition = [positions.b5.row, positions.b5.col];
        expect(Rule2.a6Options(option1)).toEqual(true);
        expect(Rule2.a6Options(option2)).toEqual(true);
        expect(Rule2.a6Options(testPosition)).toEqual(false);
    });
    it('Tests for "d6" position it shuld be just 2 possibilities ', () => {
        const Rule2 = new rule2();
        const option1 =  [positions.g6.row, positions.g6.col];
        const option2 =  [positions.a6.row, positions.a6.col];
        const option3 =  [positions.d5.row, positions.d5.col];
        const testPosition = [positions.b5.row, positions.b5.col];
        expect(Rule2.d6Options(option1)).toEqual(true);
        expect(Rule2.d6Options(option2)).toEqual(true);
        expect(Rule2.d6Options(option3)).toEqual(true);
        expect(Rule2.d6Options(testPosition)).toEqual(false);
    });
    it('Tests for "g6" position it shuld be just 2 possibilities ', () => {
        const Rule2 = new rule2();
        const option1 =  [positions.d6.row, positions.d6.col];
        const option2 =  [positions.g3.row, positions.g3.col];
        const testPosition = [positions.b5.row, positions.b5.col];
        expect(Rule2.g6Options(option1)).toEqual(true);
        expect(Rule2.g6Options(option2)).toEqual(true);
        expect(Rule2.g6Options(testPosition)).toEqual(false);
    });
});