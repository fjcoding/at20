import { Deck } from './deck';

describe('Tests for deck class', () => {
    it('should be able to receive string and split the string', () => {
        const cards = 'Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH';
        const deckSplit = new Deck(cards);
        //const sizeDeck = deckSplit.dealDeck();
        expect(deckSplit.dealDeck().length).toBe(13);
    });
    it('should be able to receive array and  return hand value', () => {
        const cards = ['Black:', '2H', '3D', '5S', '9C', 'KD', ' ', 'White:', '2C', '3H', '4S', '8C', 'AH'];
        const numArray = new Deck(cards);
        expect(numArray.isHandOne(cards).length).toBe(5);
        expect(numArray.isHandTwo(cards)).toStrictEqual([{value:2, suit:'C'}, {value:3, suit:'H'}, {value:4, suit:'S'}, {value:8, suit:'C'}, {value:14, suit:'H'}]);
        expect(numArray.isHandOne(cards)).toEqual([{value:2, suit:'H'}, {value:3, suit:'D'}, {value:5, suit:'S'}, {value:9, suit:'C'}, {value:13, suit:'D'}]);
    });
    it('should be able to receive array and  return hand sort', () => {
        const hand1 = [{value:2, suit:'H'}, {value:10, suit:'D'}, {value:1, suit:'S'}, {value:9, suit:'C'}, {value:13, suit:'H'}];
        const hand2 = [{value:9, suit:'C'}, {value:13, suit:'H'}, {value:4, suit:'S'}, {value:1, suit:'C'}, {value:14, suit:'H'}];
        const hand3 = [{value:9, suit:'C'}, {value:13, suit:'H'}, {value:4, suit:'S'}, {value:13, suit:'C'}, {value:14, suit:'H'}];
        const hand4 = [{value:9, suit:'C'}, {value:1, suit:'H'}, {value:4, suit:'S'}, {value:1, suit:'C'}, {value:9, suit:'H'}];
        const hand5 = [{value:9, suit:'C'}, {value:13, suit:'H'}, {value:9, suit:'S'}, {value:1, suit:'C'}, {value:9, suit:'H'}];
        const hand7 = [{value:9, suit:'C'}, {value:13, suit:'H'}, {value:9, suit:'S'}, {value:9, suit:'D'}, {value:9, suit:'H'}];
        const hand8 = [{value:9, suit:'C'}, {value:13, suit:'H'}, {value:10, suit:'S'}, {value:11, suit:'C'}, {value:12, suit:'H'}];
        const hand9 = [{value:9, suit:'C'}, {value:7, suit:'D'}, {value:7, suit:'S'}, {value:9, suit:'D'}, {value:7, suit:'H'}];
        const numArray = new Deck();
        expect(numArray.sortHands(hand1)).toEqual([{value:1, suit:'S'}, {value:2, suit:'H'}, {value:9, suit:'C'}, {value:10, suit:'D'}, {value:13, suit:'H'}]);
        expect(numArray.sortHands(hand2)).toEqual([{value:1, suit:'C'}, {value:4, suit:'S'}, {value:9, suit:'C'}, {value:13, suit:'H'}, {value:14, suit:'H'}]);
        expect(numArray.sortHands(hand3)).toEqual([{value:4, suit:'S'}, {value:9, suit:'C'}, {value:13, suit:'H'}, {value:13, suit:'C'}, {value:14, suit:'H'}]);
        expect(numArray.sortHands(hand4)).toEqual([{value:1, suit:'H'}, {value:1, suit:'C'}, {value:4, suit:'S'}, {value:9, suit:'C'}, {value:9, suit:'H'}]);
        expect(numArray.sortHands(hand5)).toEqual([{value:1, suit:'C'}, {value:9, suit:'C'}, {value:9, suit:'S'}, {value:9, suit:'H'}, {value:13, suit:'H'}]);
        expect(numArray.sortHands(hand7)).toEqual([{value:9, suit:'C'}, {value:9, suit:'S'}, {value:9, suit:'D'}, {value:9, suit:'H'}, {value:13, suit:'H'}]);
        expect(numArray.sortHands(hand8)).toEqual([{value:9, suit:'C'}, {value:10, suit:'S'}, {value:11, suit:'C'}, {value:12, suit:'H'}, {value:13, suit:'H'}]);
        expect(numArray.sortHands(hand9)).toEqual([{value:7, suit:'D'}, {value:7, suit:'S'}, {value:7, suit:'H'}, {value:9, suit:'C'}, {value:9, suit:'D'}]);
    });
    it('should be able to receive array and  return hand win in hight card value', () => {
        const hand1 = [{value:2, suit:'H'}, {value:10, suit:'D'}, {value:1, suit:'S'}, {value:9, suit:'C'}, {value:13, suit:'D'}];
        const hand2 = [{value:9, suit:'C'}, {value:13, suit:'H'}, {value:4, suit:'S'}, {value:1, suit:'C'}, {value:14, suit:'H'}];
        const hand3 = [{value:9, suit:'C'}, {value:13, suit:'H'}, {value:4, suit:'S'}, {value:1, suit:'C'}, {value:11, suit:'H'}];
        const hand4 = [{value:7, suit:'C'}, {value:13, suit:'D'}, {value:4, suit:'S'}, {value:1, suit:'C'}, {value:14, suit:'S'}];
        const hand5 = [{value:9, suit:'C'}, {value:13, suit:'D'}, {value:6, suit:'S'}, {value:1, suit:'C'}, {value:14, suit:'S'}];
        const hand6 = [{value:9, suit:'C'}, {value:13, suit:'D'}, {value:4, suit:'S'}, {value:2, suit:'C'}, {value:14, suit:'S'}];
        const hand7 = [{value:2, suit:'C'}, {value:3, suit:'D'}, {value:5, suit:'S'}, {value:8, suit:'C'}, {value:13, suit:'S'}];
        const hand8 = [{value:2, suit:'D'}, {value:3, suit:'D'}, {value:5, suit:'H'}, {value:8, suit:'5'}, {value:13, suit:'S'}];
        const numArray = new Deck();
        expect(numArray.hightCard(hand1, hand2)).toEqual({value:14, suit:'H'});
        expect(numArray.hightCard(hand1, hand3)).toEqual({value:11, suit:'H'});
        expect(numArray.hightCard(hand2, hand4)).toEqual({value:9, suit:'C'});
        expect(numArray.hightCard(hand2, hand5)).toEqual({value:6, suit:'S'});
        expect(numArray.hightCard(hand2, hand6)).toEqual({value:2, suit:'C'});
        expect(numArray.hightCard(hand7, hand8)).toEqual('Tie');
    });
    it('should be able to receive array and  return hand win in pair card value', () => {
        const hand1 = [{value:2, suit:'H'}, {value:10, suit:'D'}, {value:1, suit:'S'}, {value:2, suit:'C'}, {value:13, suit:'D'}];
        //const hand2 = [{value:7, suit:'C'}, {value:13, suit:'D'}, {value:4, suit:'S'}, {value:1, suit:'C'}, {value:14, suit:'S'}];
        const numArray = new Deck();
        expect(numArray.pairCard(hand1)).toEqual([{value:2, suit:'H'}, {value:2, suit:'C'}]);
    });
});