const Ant = require("./ant");
const Grid = require("./grid");


let initial_position = [2,2]; // initial position for the ant
let initial_direction = "up"; // initial direction for the ant (up,down,right,left)
let default_Color = "0"; // Defualt color for the grid string (0 = white 1 = black)
let size_grid  = 8; // size for the grid string (NxN)
let step  = 10; // step for the ant

let ant1 = new Ant(initial_position,initial_direction);
let grid1 = new Grid(default_Color,size_grid,initial_position);




function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  } 

  async function main() {
    console.log("STEP 0")
    grid1.show();
    console.log("Direction:",ant1.direction_ant,"||","Color:",grid1.get_color());
    console.log("-----------------");
    await delay(1000);
    console.clear();
    for(let i = 0; i < step; i++){
      console.log("STEP",i+1)
      ant1.move(grid1.get_color());
      grid1.track(ant1.position_ant);
      grid1.show();
      console.log("Direction:",ant1.direction_ant,"||","Color:",grid1.get_color());
      console.log("-----------------");
      await delay(1000);
      console.clear(); 
    }
  }

  main();
