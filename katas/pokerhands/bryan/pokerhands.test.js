import {readHand} from './pokerhands';



test ('Read the cards and return a ', () => {
var handW = '2H';
var handB = '7S';
const white = new readHand(handW);
const black = new readHand(handB);
expect(white.card).toBe('2H');
expect(black.card).toBe('7S');
});