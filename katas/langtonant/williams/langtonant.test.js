import { initializeGrid } from './langtonant';

test('initializeGrid should return a grid with size n x n, all cells set to 0', () => {
    const size = 3;
    const expectedGrid = [    [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];
    expect(initializeGrid(size)).toEqual(expectedGrid);
});