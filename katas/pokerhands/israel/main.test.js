import { whoWins } from './main';

describe('Test for whoWins function', () => {
    it('Test for Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH || White wins with score: 11400', () => {
        const hand1 = ['2H', '3D', '5S', '9C', 'KD'];
        const hand2 = ['2C', '3H', '4S', '8C', 'AH'];
        expect(whoWins(hand1, hand2)).toBe('White wins with score: 11400');
    });
    it('Test for Black: 2H 4S 4C 2D 4H || White: 2S 8S AS QS 3S - Black wins', () => {
        const hand1 = ['2H', '4S', '4C', '2D', '4H'];
        const hand2 = ['2S', '8S', 'AS', 'QS', '3S'];
        expect(whoWins(hand1, hand2)).toBe('Black wins with score: 70402');
    });
    it('Test for Black: 2H 3D 5S 9C KD || White: 2C 3H 4S 8C KH - Black wins', () => {
        const hand1 = ['2H', '3D', '5S', '9C', 'KD'];
        const hand2 = ['2C', '3H', '4S', '8C', 'KH'];
        expect(whoWins(hand1, hand2)).toBe('Black wins');
    });
    it('Test for Black: Black: 2H 3D 5S 9C KD || White: 2D 3H 5C 9S KH - tie', () => {
        const hand1 = ['2H', '3D', '5S', '9C', 'KD'];
        const hand2 = ['2D', '3H', '5C', '9S', 'KH'];
        expect(whoWins(hand1, hand2)).toBe('tie');
    });
});