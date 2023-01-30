const antMoves = (large = undefined ,steps = undefined, sense ='') =>{
    if(large === undefined) return console.warn("You did not enter any number for the size of the arr");
    if(typeof large !== "number") return console.error(`The valu ${large} entered is NOT a number`);
    if(Math.sign(large) === -1) return console.error("The number cannot be negative");
    if(steps === undefined) return console.warn("You did not enter a valid number of steps");
    if(typeof steps !== "number") return console.error(`The valu ${steps} entered is NOT a number`);
    if(Math.sign(steps) === -1) return console.error("The steps cannot be negative");
    if(sense === '') return console.error("The sense can not be empty");

    let positionX = Math.floor(large/2);
    let positionY = Math.floor(large/2);
    //let sense = randomDirection();
    let posAnte, posPoste, posActual;
    console.log(sense);

    //build grid
    let arr = new Array(large);

        for (let i = 0; i < large; i++) {
            arr[i] = new Array(large);
            for (let j = 0; j < large; j++) {
                    arr[i][j] = 0; 
                }
        }
        //Save the initial position
        posActual = arr[positionX][positionY];
        arr[positionX][positionY]= 'a';  
        showTable(arr); 


        if (posActual === 0 && sense === 'U') {
            posPoste = arr[positionX][positionY-1]
            arr[positionX][positionY-1]='a'; 
            arr[positionX][positionY] = 1;
            steps--;
            sense = 'L';
            console.log("**********"); 
            showTable(arr); 
            console.log("New sense "+ sense, steps);
            if (steps > 0) {
                antMoves(large,steps,sense);   
            }
        }else
        if (posActual === 0 && sense === 'D') {
            posPoste = arr[positionX][positionY+1];
            arr[positionX][positionY+1]='a'; 
            arr[positionX][positionY] = 1;
            steps--;
            sense = 'R';
            console.log("**********"); 
            showTable(arr);  
            console.log("New sense "+ sense, steps);
            if (steps > 0) {
                antMoves(large,steps,sense);   
            }     
        }else
        if (posActual === 0 && sense === 'R') {
            posPoste = arr[positionX-1][positionY];
            arr[positionX-1][positionY]='a'; 
            arr[positionX][positionY] = 1;
            steps--;
            sense = 'U';
            console.log("**********"); 
            showTable(arr);  
            console.log("New sense "+ sense, steps); 
            if (steps > 0) {
                antMoves(large,steps,sense);   
            }
        }else
        if (posActual === 0 && sense === 'L') {
            posPoste =  arr[positionX+1][positionY]
            arr[positionX+1][positionY]='a'; 
            arr[positionX][positionY] = 1;
            steps--;
            sense = 'D';
            console.log("**********"); 
            showTable(arr); 
            console.log("New sense "+ sense, steps);
            if (steps > 0) {
                antMoves(large,steps,sense);   
            }  
        } 
}

const randomDirection = () =>{
    const direcctions = ["U", "D", "R", "L"];
    let aleatorio = direcctions[Math.floor(Math.random() * direcctions.length)];
    return aleatorio;
}

const showTable = (arr) =>{
    for (let element in arr) {
        console.log(" " + arr[element]);
    }
}

antMoves(5,1,'U');
antMoves(5,1,'D');
antMoves(5,1,'R');
antMoves(5,1,'L');



