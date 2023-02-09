import { positions } from './possiblePositions';
const grid = [
    ['*', '-', '-', '*', '-', '-', '*'],
    ['|', '*', '-', '*', '-', '*', '|'],
    ['|', '|', '*', '*', '*', '|', '|'],
    ['*', '*', '*', ' ', '*', '*', '*'],
    ['|', '|', '*', '*', '*', '|', '|'],
    ['|', '*', '-', '*', '-', '*', '|'],
    ['*', '-', '-', '*', '-', '-', '*']
];
describe('Tests for positions object', () => {
    it('Tests for "a" positions it shuld be "*" for emtpy positions', () => {
        expect(grid[positions.a0.row][positions.a0.col]).toEqual('*');
        expect(grid[positions.a3.row][positions.a3.col]).toEqual('*');
        expect(grid[positions.a6.row][positions.a6.col]).toEqual('*');
    });
    it('Tests for "b" positions it shuld be "*" for emtpy positions', () => {
        expect(grid[positions.b1.row][positions.b1.col]).toEqual('*');
        expect(grid[positions.b3.row][positions.b3.col]).toEqual('*');
        expect(grid[positions.b5.row][positions.b5.col]).toEqual('*');
    });
    it('Tests for "c" positions it shuld be "*" for emtpy positions', () => {
        expect(grid[positions.c2.row][positions.c2.col]).toEqual('*');
        expect(grid[positions.c3.row][positions.c3.col]).toEqual('*');
        expect(grid[positions.c4.row][positions.c4.col]).toEqual('*');
    });
    it('Tests for "d" positions it shuld be "*" for emtpy positions', () => {
        expect(grid[positions.d0.row][positions.d0.col]).toEqual('*');
        expect(grid[positions.d1.row][positions.d1.col]).toEqual('*');
        expect(grid[positions.d2.row][positions.d2.col]).toEqual('*');
        expect(grid[positions.d4.row][positions.d4.col]).toEqual('*');
        expect(grid[positions.d6.row][positions.d6.col]).toEqual('*');
        expect(grid[positions.d6.row][positions.d6.col]).toEqual('*');
    });
    it('Tests for "e" positions it shuld be "*" for emtpy positions', () => {
        expect(grid[positions.e2.row][positions.e2.col]).toEqual('*');
        expect(grid[positions.e3.row][positions.e3.col]).toEqual('*');
        expect(grid[positions.e4.row][positions.e4.col]).toEqual('*');
    });
    it('Tests for "f" positions it shuld be "*" for emtpy positions', () => {
        expect(grid[positions.f1.row][positions.f1.col]).toEqual('*');
        expect(grid[positions.f3.row][positions.f3.col]).toEqual('*');
        expect(grid[positions.f5.row][positions.f5.col]).toEqual('*');
    });
    it('Tests for "g" positions it shuld be "*" for emtpy positions', () => {
        expect(grid[positions.g0.row][positions.g0.col]).toEqual('*');
        expect(grid[positions.g3.row][positions.g3.col]).toEqual('*');
        expect(grid[positions.g6.row][positions.g6.col]).toEqual('*');
    });
});