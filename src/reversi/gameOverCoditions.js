
export class GameOver {
    playersWithoutTokens (tokensBlackLeft, tokensWhiteLeft) {
        var zeroTokens = false;
        if (tokensBlackLeft == 0 && tokensWhiteLeft == 0) {
            zeroTokens = true;
        }
        return zeroTokens;
    }

    playersWithoutMoves (movesBlack, movesWhite) {
        var zeroMoves = false;
        if (movesBlack == 0 && movesWhite == 0) {
            zeroMoves = true;
        }
        return zeroMoves;
    }

    whenIsGameOver (zeroTokens, zeroMoves) {
        var gameOver = false;
        if (zeroTokens == true || zeroMoves == true) {
            gameOver = true;
        }
        return gameOver;
    }
}