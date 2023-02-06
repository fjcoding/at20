import { Cards } from './mixCards';

describe ('Get random cards for a Poker game', ()=>{
    it('Should be able to get five poker cards randomly for two players', () => {
        const numbers = ['2', '3', '5', '7', 'T'];
        const suit = ['C', 'D', 'H', 'S', 'C'];
        const hand1 = new Cards(numbers, suit);
        const hand2 = new Cards(numbers, suit);
        hand1.handMaker();
        hand2.handMaker();

        expect(hand1.newpHand()).toBe(hand1.newHand);
        expect(hand2.newpHand()).toBe(hand2.newHand);
    });
});

// ['2C','3D','5H','7S','TC']