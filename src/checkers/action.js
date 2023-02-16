import { TYPE as PIECE_TYPE, COLOR as PIECE_COLOR } from './piece.js';

const movePiece = (player, targetPosition) => {
    if (!isValidTargetPosition(targetPosition, player.pieceSelected)) {
        throw new Error('Invalid target position');
    }
    //TODO Check enemies
    player.pieceSelected.x = targetPosition.x;
    player.pieceSelected.y = targetPosition.y;
};

const isValidTargetPosition = (targetPosition, piece) => {
    if (!isValidPosition(targetPosition.x, targetPosition.y)) {
        throw new Error('Invalid target position is outside of the grid');
    }
    const xOperator = piece.color == PIECE_COLOR.RED ? 1 : -1;
    const validPositions = [{
        y: piece.y + 1,
        x: piece.x + xOperator
    }, {
        y: piece.y - 1,
        x: piece.x + xOperator
    }
    ];
    if (piece.getTypeChain === PIECE_TYPE.LADY) {
        validPositions.push({
            y: piece.y + 1,
            x: piece.x - xOperator
        }, {
            y: piece.y - 1,
            x: piece.x - xOperator
        });
    }

    const validPosition = validPositions.find(position => {
        if (position.x === targetPosition.x && position.y === targetPosition.y) {
            return true;
        }
        return false;
    });
    return validPosition;
};

const selectPiece = (player, positions) => {
    if (!isValidPosition(positions.x, positions.y)) {
        throw new Error('Invalid position');
    }
    const playerPiece = getPlayerPiece(player, positions);
    if (!playerPiece) {
        throw new Error(`Invalid piece for player, ${player.name}`);
    }
    player.pieceSelected = playerPiece;
};

const isValidPosition = (x, y) =>{
    let isValid = false;
    if (y > -1 && x > -1 && y < 8 && x < 8) {
        isValid = true;
    }
    return isValid;
};

const getPlayerPiece = (player, positions) => {
    if (player.pieceColor == 'R') {
        const playerFound = player.game.redPieces.find((piece) => {
            if (positions.x == piece.x && positions.y == piece.y) {
                return true;
            }
            return false;
        });
        return playerFound;
    } else {
        const playerFound = player.game.whitePieces.find((piece) => {
            if (positions.x == piece.x && positions.y == piece.y) {
                return true;
            }
            return false;
        });
        return playerFound;
    }
};

export const action = {
    selectPiece,
    movePiece,
    isValidPosition
};