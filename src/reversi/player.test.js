import { Player } from './player';


describe('Test for Player class', () => {
    test('Create a player and set a token', () => {
        const whitePlayer = new Player('W');
        const blackPlayer = new Player('B');
        expect(whitePlayer.setToken(1, 1)).toStrictEqual([1, 1]);
        expect(blackPlayer.setToken(6, 1)).toStrictEqual([6, 1]);
    });


    test('Create a player and check the players tag', () => {
        const whitePlayer = new Player('W');
        const blackPlayer = new Player('B');
        expect(whitePlayer.playerTag).toStrictEqual('W');
        expect(blackPlayer.playerTag).toStrictEqual('B');
    });

    test('Create a player, set a token and check how many tokens the player has left', () => {
        const whitePlayer = new Player('W');
        const blackPlayer = new Player('B');
        whitePlayer.setToken(1, 1);
        blackPlayer.setToken(6, 1);
        expect(whitePlayer.tokenCount).toStrictEqual(27);
        expect(blackPlayer.tokenCount).toStrictEqual(27);
    });
});
