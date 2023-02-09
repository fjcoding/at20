import Grid from './grid';

describe('Test for Grid Class', () => {
    it('should be able to create the grid with the initial positions of the pieces ', () => {
        const grid = new Grid();
        const strGrid = grid.toString();
        const expectedGrid = '  A B C D E F G H \n' +
                             ' ---------------  \n' +
                             '0|■| |■| |■| |■| |\n' +
                             '1| |■| |■| |■| |■|\n' +
                             '2|■| |■| |■| |■| |\n' +
                             '3| |■| |■| |■| |■|\n' +
                             '4|■| |■| |■| |■| |\n' +
                             '5| |■| |■| |■| |■|\n' +
                             '6|■| |■| |■| |■| |\n' +
                             '7| |■| |■| |■| |■|\n' +
                             ' ---------------  ';
        expect(strGrid).toBe(expectedGrid);
    });
});