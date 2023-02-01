
export function ant(){
// Initialize the grid with gridSize x gridSize cells, all set to 0
const gridSize = 100;
const grid = Array(gridSize)
  .fill(null)
  .map(() => Array(gridSize).fill(0));

// Start the ant in the center of the grid
let antX = Math.floor(gridSize / 2);
let antY = Math.floor(gridSize / 2);

// The ant's direction: 0 = right, 1 = down, 2 = left, 3 = up

let direction = 0; 

// Repeat the following steps 10000 times

for (let step = 0; step < 100; step++) {
  // Get the current cell's state
  const currentCell = grid[antX][antY];

  // Change the cell's state
  
    grid[antX][antY] = currentCell === 0 ? 1 : 0;

    // Turn right if the cell is white (0), turn left if the cell is black (1)
    direction = (direction + (currentCell === 0 ? 1 : -1) + 4) % 4;
  
    // Move the ant in the current direction
    switch (direction) {
      case 0:
        antX++;
        break;
      case 1:
        antY++;
        break;
      case 2:
        antX--;
        break;
      case 3:
        antY--;
        break;
    }
  }
  return antY, antX;
}
ant();
