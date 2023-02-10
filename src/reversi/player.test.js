import { Player } from './player';
<<<<<<< HEAD

test('Create a player and check the players tag', () => {
    const whitePlayer = new Player('W');
    const blackPlayer = new Player('B');
    expect(whitePlayer.playerTag).toStrictEqual('W');
    expect(blackPlayer.playerTag).toStrictEqual('B');
});

=======
test('Create a player and set a token on the board', () => {
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

>>>>>>> main
test('Create a player and check how many tokens the player has', () => {
    const whitePlayer = new Player('W');
    const blackPlayer = new Player('B');
    expect(whitePlayer.tokenCount).toStrictEqual(28);
    expect(blackPlayer.tokenCount).toStrictEqual(28);
});