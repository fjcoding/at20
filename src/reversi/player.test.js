import { Player } from './player';



test('Create a player and set a token on the board', () => {
const whitePlayer = new Player('W');
expect(whitePlayer.setToken(5,1)).toStrictEqual([5,1,27,'W']); // [posx,posy,tokens left, player's tag]
});




