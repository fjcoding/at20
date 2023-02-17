import { GameOver } from './gameOverCoditions';

describe('Test for GameOver class', () => {
    it('should be able identify if both palyers are without tokens', () => {
        const tokensBlackLeft = 0;
        const tokensWhiteLeft = 0;
        let zeroTokens = new GameOver();
        expect(zeroTokens.playersWithoutTokens(tokensBlackLeft, tokensWhiteLeft)).toStrictEqual(true);
    });
    it('should be able identify if any palyer have tokens', () => {
        const tokensBlackLeft = 0;
        const tokensWhiteLeft = 3;
        let zeroTokens = new GameOver();
        expect(zeroTokens.playersWithoutTokens(tokensBlackLeft, tokensWhiteLeft)).toStrictEqual(false);
    });

    it('should be able identify if both palyers are without possible moves', () => {
        const movesBlack = 0;
        const movesWhite = 0;
        let zeroMoves = new GameOver();
        expect(zeroMoves.playersWithoutMoves(movesBlack, movesWhite)).toStrictEqual(true);
    });
    it('should be able identify if any palyer have moves', () => {
        const movesBlack = 5;
        const movesWhite = 0;
        let zeroMoves = new GameOver();
        expect(zeroMoves.playersWithoutMoves(movesBlack, movesWhite)).toStrictEqual(false);
    });

    it('should be able determinate the game over if both palyers are without possible moves or tokens', () => {
        const zeroMovesBoth = true;
        const zeroTokensBoth = false;
        let isGameOver = new GameOver();
        expect(isGameOver.whenIsGameOver(zeroTokensBoth, zeroMovesBoth)).toStrictEqual(true);
    });
    it('should be able determinate the game over is not yet if any palyer have moves or tokens', () => {
        const zeroMovesBoth = false;
        const zeroTokensBoth = false;
        let isGameOver = new GameOver();
        expect(isGameOver.whenIsGameOver(zeroTokensBoth, zeroMovesBoth)).toStrictEqual(false);
    });
});