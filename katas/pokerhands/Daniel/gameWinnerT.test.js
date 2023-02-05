import  {winnerplayer} from './gameWinner';

describe('This should be able to prepare the game and tell who wins', () => {
    const game = new winnerplayer();
    it('Verify that every player has two cards', () => {
        game.dealHands();
        expect(game.whitePlayerHand.length).toEqual(5);
        expect(game.blackPlayerHand.length).toEqual(5);
    });

    it('Compares and declare the Winner of the poker hands!', () => {
        game.dealHands();
        let result = game.compareHands();
        expect(result).toBeDefined();
    });
});
