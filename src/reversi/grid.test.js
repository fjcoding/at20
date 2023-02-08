import { Grid } from './grid';

describe('Test for Grid class', () => {
    it('should be able show the initial map', () => {
        const posX = 3;
        const posY = 3;
        const color = 'w';
        const resultMap = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'w', 'b', ' ', ' ', ' '],
            [' ', ' ', ' ', 'b', 'w', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ];
        const map = new Grid(posX, posY, color);
        expect(map.gridInit()).toStrictEqual(resultMap);
    });
});
