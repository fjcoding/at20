var gridSize = process.argv[2];
var steps = process.argv[3];

var gridRow = new Array();
for (x = 0; x < gridSize ; x++){
    gridRow[x] = new Array();
    for (y = 0; y < gridSize ; y++){
    gridRow[x][y]= 0;
    }
}

var direction = 'up';
var positionX = Math.trunc(gridSize/2);
var positionY = Math.trunc(gridSize/2);
var color = 0;
while (steps > 0){
    if (positionX >= 0 && positionY >= 0){
        if (direction == 'up'){
            if (color == 0){
                gridRow[positionX][positionY] = 1;
                positionY=positionY+1;
                color = gridRow[positionX][positionY];
                direction = 'right';
            }       
            else if (color == 1){
                gridRow[positionX][positionY] =0;
                positionY=positionY-1;
                color = gridRow[positionX][positionY];
                direction = 'left';
            } 
        }
        else if (direction == 'right'){
            if (color == 0){
                gridRow[positionX][positionY] =1;
                positionX=positionX+1;
                color = gridRow[positionX][positionY];
                direction = 'down';
            }
            else if (color == 1){
                gridRow[positionX][positionY] =0;
                positionX=positionX-1;
                color = gridRow[positionX][positionY];
                direction = 'up';
            } 
        }
        else if (direction == 'down'){
            if (color == 0){
                gridRow[positionX][positionY] = 1;
                positionY= positionY-1;
                color = gridRow[positionX][positionY];
                direction = 'left';
            }
            else if (color == 1){
                gridRow[positionX][positionY] =0;
                positionY=positionY+1;
                color = gridRow[positionX][positionY];
                direction = 'right';
            } 
        }
        else if (direction == 'left'){
            if (color == 0){
                gridRow[positionX][positionY] =1;
                positionX=positionX-1;
                color = gridRow[positionX][positionY];
                direction = 'up';
            }
            else if (color == 1){
                gridRow[positionX][positionY] = 0;
                positionX=positionX+1;
                color = gridRow[positionX][positionY];
                direction = 'down';
            } 
        }   
        steps--
    }
    else {
        steps = 0;
        console.log('off the grid');
        //console.log(gridRow);

    }  
//console.log(gridRow) 
}
console.log(gridRow);
