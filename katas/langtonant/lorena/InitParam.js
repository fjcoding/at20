//Funtion for Ant´s Eviornment.

export function gridInit (len, wid, colorGridInit) {
    var gridInit = new Array;
    for (let i = 0; i < len; i++) {
        gridInit[i] = new Array();
        for (let j = 0; j < wid; j++) {
            gridInit[i][j] = colorGridInit;
        }
    }
    return gridInit;
}

//Funtion for Ant´s Initial Position (Random)

export function posAndOriInit(len, wid) {
    var posAndOriInit = new Array;
    var xInit = Math.floor(Math.random() * ((wid) - 0) + 0);     // x initial position random
    var yInit = Math.floor(Math.random() * ((len) - 0) + 0);     // y initial position random
    var oriInit = Math.floor(Math.random() * ((4) - 0) + 0);     // Ant´s initial orientation Up=0, Right=1, Down=2, Left=3
    posAndOriInit = new Array(xInit, yInit, oriInit);
    return posAndOriInit;
}