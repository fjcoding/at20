import { handleError } from './main';

test('test for main file to check negative positions', () => {
    expect(handleError([-1, 0], 10)).toBe('ant is outside of the grid');
    expect(handleError([0, -1], 10)).toBe('ant is outside of the grid');
});

test('test for main file to check positions bigger than size grid', () => {
    expect(handleError([0, 4], 3)).toBe('ant is outside of the grid');
    expect(handleError([4, 0], 3)).toBe('ant is outside of the grid');
    expect(handleError([0, 40], 3)).toBe('ant is outside of the grid');
    expect(handleError([40, 0], 3)).toBe('ant is outside of the grid');
});

test('test for main file to check positions smaller than size grid', () => {
    expect(handleError([0, 2], 3)).toBe(1);
    expect(handleError([2, 0], 3)).toBe(1);
    expect(handleError([0, 0], 3)).toBe(1);
    expect(handleError([0, 0], 3)).toBe(1);
});