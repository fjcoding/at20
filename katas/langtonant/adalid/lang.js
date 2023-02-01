const antMoves = (large = undefined, steps = undefined, sense = '',) =>{
    if (sense === '') {
        return console.error('The sense can not be empty');
    }
    const RIGHT = 'R';
    const LEFT = 'L';
    const UP = 'U';
    const DOWN = 'D';

    let directionX = Math.floor(large / 2);
    let directionY = Math.floor(large / 2);
    //let sense = randomDirection();
    let posActual;
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
    posActual = arr[directionX][directionY];
    arr[directionX][directionY] = 'a';
    showTable(arr);


    if (posActual === 0 && sense === UP) {
        arr[directionX][directionY - 1] = 'a';
        arr[directionX][directionY] = 1;
        steps--;
        sense = 'L';
        console.log('**********');
        showTable(arr);
        console.log('New sense ' + sense, steps);
        if (steps > 0) {
            antMoves(large, steps, sense);
        }
    } else
    if (posActual === 0 && sense === DOWN) {
        arr[directionX][directionY + 1] = 'a';
        arr[directionX][directionY] = 1;
        steps--;
        sense = 'R';
        console.log('**********');
        showTable(arr);
        console.log('New sense ' + sense, steps);
        if (steps > 0) {
            antMoves(large, steps, sense);
        }
    } else
    if (posActual === 0 && sense === RIGHT) {
        arr[directionX - 1][directionY] = 'a';
        arr[directionX][directionY] = 1;
        steps--;
        sense = 'U';
        console.log('**********');
        showTable(arr);
        console.log('New sense ' + sense, steps);
        if (steps > 0) {
            antMoves(large, steps, sense);
        }
    } else
    if (posActual === 0 && sense === LEFT) {
        arr[directionX + 1][directionY] = 'a';
        arr[directionX][directionY] = 1;
        steps--;
        sense = 'D';
        console.log('**********');
        showTable(arr);
        console.log('New sense ' + sense, steps);
        if (steps > 0) {
            antMoves(large, steps, sense);
        }
    }
};
//This is optional
// const randomDirection = () =>{
//     const direcctions = ['U', 'D', 'R', 'L'];
//     let aleatorio = direcctions[Math.floor(Math.random() * direcctions.length)];
//     return aleatorio;
// };

const showTable = (arr) =>{
    for (let element in arr) {
        console.log(' ' + arr[element]);
    }
};

antMoves(5, 1, 'U');
// antMoves(5, 1, 'D');
// antMoves(5, 1, 'R');
// antMoves(5, 1, 'L');


