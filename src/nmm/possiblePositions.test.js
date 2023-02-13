import { positions } from './possiblePositions';
const grid = [
    ['a6', '-',  '-',  'd6',  '-', '-', 'g6'],
    ['|',  'b5',  '-', 'd5',  '-', 'f5', '|'],
    ['|', '|',   'c4', 'd4',  'e4', '|', '|'],
    ['a3', 'b3', 'c3', ' ',   'e3', 'f3', 'g3'],
    ['|', '|',   'c2', 'd2',  'e2', '|', '|'],
    ['|', 'b1',  '-',  'd1',  '-', 'f1', '|'],
    ['a0', '-',  '-',  'd0',  '-', '-', 'g0']
];
describe('Tests for positions object', () => {
    it('Tests for "a" positions it should be emtpy positions', () => {
        expect(grid[positions.a0.row][positions.a0.col]).toEqual('a0');
        expect(grid[positions.a3.row][positions.a3.col]).toEqual('a3');
        expect(grid[positions.a6.row][positions.a6.col]).toEqual('a6');
    });
    it('Tests for "b" positions it should be for emtpy positions', () => {
        expect(grid[positions.b1.row][positions.b1.col]).toEqual('b1');
        expect(grid[positions.b3.row][positions.b3.col]).toEqual('b3');
        expect(grid[positions.b5.row][positions.b5.col]).toEqual('b5');
    });
    it('Tests for "c" positions it should be for emtpy positions', () => {
        expect(grid[positions.c2.row][positions.c2.col]).toEqual('c2');
        expect(grid[positions.c3.row][positions.c3.col]).toEqual('c3');
        expect(grid[positions.c4.row][positions.c4.col]).toEqual('c4');
    });
    it('Tests for "d" positions it should be for emtpy positions', () => {
        expect(grid[positions.d0.row][positions.d0.col]).toEqual('d0');
        expect(grid[positions.d1.row][positions.d1.col]).toEqual('d1');
        expect(grid[positions.d2.row][positions.d2.col]).toEqual('d2');
        expect(grid[positions.d4.row][positions.d4.col]).toEqual('d4');
        expect(grid[positions.d5.row][positions.d5.col]).toEqual('d5');
        expect(grid[positions.d6.row][positions.d6.col]).toEqual('d6');
    });
    it('Tests for "e" positions it should be for emtpy positions', () => {
        expect(grid[positions.e2.row][positions.e2.col]).toEqual('e2');
        expect(grid[positions.e3.row][positions.e3.col]).toEqual('e3');
        expect(grid[positions.e4.row][positions.e4.col]).toEqual('e4');
    });
    it('Tests for "f" positions it should be for emtpy positions', () => {
        expect(grid[positions.f1.row][positions.f1.col]).toEqual('f1');
        expect(grid[positions.f3.row][positions.f3.col]).toEqual('f3');
        expect(grid[positions.f5.row][positions.f5.col]).toEqual('f5');
    });
    it('Tests for "g" positions it should be for emtpy positions', () => {
        expect(grid[positions.g0.row][positions.g0.col]).toEqual('g0');
        expect(grid[positions.g3.row][positions.g3.col]).toEqual('g3');
        expect(grid[positions.g6.row][positions.g6.col]).toEqual('g6');
    });
});