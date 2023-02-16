export class Turn {
    assignTurn (positinonsToflip, currentPlayer) {
        var actTurn;
        if ((positinonsToflip.length != 0 && currentPlayer == 'B')
            || (positinonsToflip.length == 0 && currentPlayer == 'W')) {
            actTurn = 1;
        } else if ((positinonsToflip.length != 0 && currentPlayer == 'W')
            || (positinonsToflip.length == 0 && currentPlayer == 'B')) {
            actTurn = 0;
        }
        return actTurn;
    }

    switchPlayerWithoutMoves(possiblePositions, currentPlayer) {
        var switchTurn;
        if ((possiblePositions.length == 0 && currentPlayer == 'B')
            || (possiblePositions.length != 0 && currentPlayer == 'W')) {
            switchTurn = 1;
        } else if ((possiblePositions.length == 0 && currentPlayer == 'W')
            || (possiblePositions.length != 0 && currentPlayer == 'B')) {
            switchTurn = 0;
        }
        return switchTurn;
    }
}