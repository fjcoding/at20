import { Player } from './player';

test('Create a player and check the players tag', () => {
    const whitePlayer = new Player('W');
    const blackPlayer = new Player('B');
    expect(whitePlayer.playerTag).toStrictEqual('W');
    expect(blackPlayer.playerTag).toStrictEqual('B');
});

test('Create a player and check how many tokens the player has', () => {
    const whitePlayer = new Player('W');
    const blackPlayer = new Player('B');
    expect(whitePlayer.tokenCount).toStrictEqual(28);
    expect(blackPlayer.tokenCount).toStrictEqual(28);
});