//lANGTON'S ANT//

//Funtion: Ant´s displacement 

function mov(x, y, ori) {
    var movant = new Array();
    if(ori == 0 && y != 0){
        y = y - 1;
    }
    else if (ori == 1 && x != (wid-1)){
        x = x + 1;
    }
    else if (ori == 2 && y != (len-1)){        
        y = y + 1;
    }
    else if (ori == 3 && x != 0){
        x = x - 1;
    }
    else {
        ori=(ori + 2) %4;           //If the ant is on the limit, turn 180° ???
    }
    movant = new Array (x,y,ori)
    
    return movant;
}

// Ant´s environment

var grid = new Array();
var len = 6;
var wid = 6;

for (i=0; i<len; i++) {
    grid[i]=new Array();
    for(j=0; j<wid; j++) {       
        grid[i][j]=0;        
    }
    console.log(grid[i])
}

// Initial Ant´s position

var x = Math.floor(Math.random() * ((wid) - 0) + 0);     // x position random
var y=Math.floor(Math.random() * ((len) - 0) + 0);      // y position random
var ori=Math.floor(Math.random() * ((4) - 0) + 0);      // Ant´s orientation Up=0, Right=1, Down=2, Left=3

var movant = new Array(x, y, ori); // firest box position

console.log(movant)


var n=10;                        // Tracking number

while(n > 0 ){

    if (grid[y][x] == 0){           // Ant´s Orientation
        ori = (ori + 1) % 4;
        grid[y][x]= 1
    }
    else{
        ori = (ori + 3) % 4;
        grid[y][x] = 0   
    }

    movant = mov(x,y,ori)
    x = movant[0];
    y = movant[1];

    console.log (grid)
    console.log(movant)
    n--;
}
