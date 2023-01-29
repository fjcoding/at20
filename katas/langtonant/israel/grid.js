/*defaultColor:
0 = white
1 = black
*/
module.exports = class grid {
    constructor(defaultColor, size, obj){
        this.size = size;
        this.obj = obj;
        this.grid = [];
        this.defaultColor = defaultColor;
        this.color = defaultColor;
        this.colors = ["white", "black"];
        
        for (let i = 0; i < this.size; i++) {
            this.grid.push(this.defaultColor.repeat(size).split(""));
        }
        
        this.grid[this.obj[0]][this.obj[1]] = "x";
    }

    track(new_position_obj) {
        let new_color = this.grid[new_position_obj[1]][new_position_obj[0]];
        
        if (this.color === "0") {
            this.grid[this.obj[1]][this.obj[0]] = "1";
        } else if (this.color === "1") {
            this.grid[this.obj[1]][this.obj[0]] = "0";
        }
        
        this.grid[new_position_obj[1]][new_position_obj[0]] = "x";
        this.color = new_color;
        this.obj = new_position_obj;
    }
    
    get_color() {
        return this.colors[parseInt(this.color)];
    }
    
    show() {
        for (let row of this.grid) {
            console.log(row.join(" "));
        }
    }
}