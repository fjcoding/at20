import { Deck } from './deck';

describe('Tests for deck class', () => {
    it('should be able to receive string and split the string', () => {
        const cards = 'Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH';
        const deckSplit = new Deck(cards);
        //const sizeDeck = deckSplit.dealDeck();
        expect(deckSplit.dealDeck().length).toBe(13);
      
    });
    it('should be able to receive array and  return hand value', () => {
        const cards = ['Black:', '2H', '3D', '5S', '9C', 'KD',' ', 'White:', '2C', '3H', '4S', '8C', 'AH'];
        const numArray = new Deck(cards);
        expect(numArray.isHandOne(cards).length).toBe(5);
        expect(numArray.isHandOne(cards)).toStrictEqual([2, 3, 5, 9, 13]);
        expect(numArray.isHandTwo(cards)).toEqual([2, 3, 4, 8, 14]);
    });
    it('should be able to receive array and  return max value', () => {
        const hand1 = [2, 3, 5, 9, 13];
        const hand2 = [2, 3, 4, 8, 14];
        const numArray = new Deck();
        expect(numArray.isMax(hand1)).toBe(13);
        expect(numArray.isMax(hand2)).toBe(14);

    });
    /*it('should be able to receive two array and  return win with high card', () => {
        const cards = ['Black:', '2H', '3D', '5S', '9C', 'KD',' ', 'White:', '2C', '3H', '4S', '8C', 'AH'];
        const hand1 = [2,3,5,9,13];
        const hand2 = [2,3,4,8,14];
        const numArray = new Deck();
        expect(numArray.isMax(hand1)).toBe('AH');
        //xpect(numArray.isMax(hand2)).toBe(14);

    });*/

    
});