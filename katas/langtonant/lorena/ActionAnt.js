// Box color of grid

export function colorBox (x, y, colorAct) {
    var color = 0;
    if (colorAct == 0) {
        color = 1;
    } else {
        color = 0;
    }
    return color;
}


// Ant´s Orientation

export function newOri (x, y, ori, colorAct) {
    var newOri = 0;
    if (colorAct == 0) {
        newOri = (ori + 1) % 4;
    } else {
        newOri = (ori + 3) % 4;
    }
    return newOri;
}

//Funtion: Ant´s displacement

export function mov (x, y, ori, wid, len) {
    var newPositAnt = new Array();
    if (ori == 0 && y != 0) {
        y = y - 1;
    } else if (ori == 1 && x != (wid - 1)) {
        x = x + 1;
    } else if (ori == 2 && y != (len - 1)) {
        y = y + 1;
    } else if (ori == 3 && x != 0) {
        x = x - 1;
    } else {
        ori = (ori + 2) % 4;           //If the ant is on the limit, turn 180° ???
    }
    newPositAnt = new Array (x, y, ori);
    return newPositAnt;
}


