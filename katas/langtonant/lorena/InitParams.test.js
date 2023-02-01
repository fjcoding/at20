// Test
import { gridInit } from './InitParam';

test('gridInit have the correct dimension of length', () => {
    let len = 4;
    let wid = 4;
    expect(gridInit(len, wid).length).toBe(len);
});