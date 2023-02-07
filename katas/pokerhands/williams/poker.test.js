import { comparePokerHands} from './poker';

test('comparePokerHands returns the correct winner', () => {
    const hand1 = '2H 3H 8H 5H 6H';
    const hand2 = 'AH KH QH JH TH';
    expect(comparePokerHands(hand1, hand2)).toBe('AH KH QH JH TH wins with a Straight Flush');
});