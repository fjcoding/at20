import { Player } from './player';
test('Create a player and set a token on the board', () => {
    const whitePlayer = new Player('W');
    const blackPlayer = new Player('B');
    expect(whitePlayer.setToken(1, 1)).toStrictEqual([1, 1, 27, 'W']); // [posx,posy,tokens left,palyerTag]
    expect(blackPlayer.setToken(6, 1)).toStrictEqual([6, 1, 27, 'B']); // [posx,posy,tokens left,palyerTag]
});


