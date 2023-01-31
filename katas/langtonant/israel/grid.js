/*defaultColor:
0 = white
1 = black
*/
export class grid {
    constructor(defaultColor, size, obj) {
        this.size = size;
        this.obj = obj;
        this.grid = [];
        this.defaultColor = defaultColor;
        this.color = defaultColor;
        this.colors = ['white', 'black'];

        for (let i = 0; i < this.size; i++) {
            this.grid.push(this.defaultColor.repeat(size).split(''));
        }

        this.grid[this.obj[0]][this.obj[1]] = 'x';
    }

    track(newPositionObj) {
        let newColor = this.grid[newPositionObj[1]][newPositionObj[0]];

        if (this.color === '0') {
            this.grid[this.obj[1]][this.obj[0]] = '1';
        } else if (this.color === '1') {
            this.grid[this.obj[1]][this.obj[0]] = '0';
        }

        this.grid[newPositionObj[1]][newPositionObj[0]] = 'x';
        this.color = newColor;
        this.obj = newPositionObj;
    }

    getColor() {
        return this.colors[parseInt(this.color)];
    }

    show() {
        for (let row of this.grid) {
            console.log(row.join(' '));
        }
    }
}