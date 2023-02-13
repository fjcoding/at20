// import { Grid } from './grid';
// import { Piece } from './piece';

const movePieceForwardLeft = () => {};

const movePieceBackRight = () =>{};

const movePieceBackLeft = () => {};


const movePieceForwardRight = () =>{


};
const movePiece = () =>{

};
const selectPiece = (x, y) =>{
    //const position = [x, y];
    if (isValidPosition(x, y)) {
        return
    }
};
const isValidPosition = (x, y) =>{
    let isValid = false;
    if (y > -1 && x > -1 && y < 8 && x < 8) {
        isValid = true;
    }
    return isValid;
};
export const action = {
    movePieceForwardRight,
    movePieceForwardLeft,
    movePieceBackRight,
    movePieceBackLeft,
    selectPiece,
    movePiece
};

//export {movePieceForwardRight, movePieceForwardLeft, movePieceBackRight, movePieceBackLeft, selectPiece };