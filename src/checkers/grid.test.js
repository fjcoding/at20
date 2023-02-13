import {Grid} from './grid';

describe('Test for Grid Class', () => {
    it('should be able to create the grid with the initial positions of the pieces ', () => {
        const grid = new Grid();
        const strGrid = grid.toString();
        let expectedGrid = ' A B C D E F G H\n';
        expectedGrid += ' ---------------  \n';
        expectedGrid += '0| |■| |■| |■| |■|\n';
        expectedGrid += '1|■| |■| |■| |■| |\n';
        expectedGrid += '2| |■| |■| |■| |■|\n';
        expectedGrid += '3|■| |■| |■| |■| |\n';
        expectedGrid += '4| |■| |■| |■| |■|\n';
        expectedGrid += '5|■| |■| |■| |■| |\n';
        expectedGrid += '6| |■| |■| |■| |■|\n';
        expectedGrid += '7|■| |■| |■| |■| |\n';
        expectedGrid += ' ---------------  ';
        expect(strGrid).toBe(expectedGrid);
    });
});