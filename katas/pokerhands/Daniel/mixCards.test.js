import { Cards } from './mixCards';

describe ('Get random cards for play a poker game', ()=>{
    it('Should be able to get five poker cards randomly for a player', () => {
        const numbers = [];
        const suit = [];
        const hand = new Cards(numbers, suit);
        hand.handMaker();
        expect(hand.newpHand()).toBe(hand.newHand);
    });
});