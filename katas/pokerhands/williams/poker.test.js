import { findPokerr} from './poker';
describe('findPokerr', () => {
    it('should return the value of the card that repeats 4 times in the hand', () => {
        const hand = [{ value: 2 }, { value: 3 }, { value: 2 }, { value: 2 }, { value: 2 },];
        expect(findPokerr(hand)).toBe(2);
    });

    it('should return null if no card repeats 4 times in the hand', () => {
        const hand = [{ value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }, { value: 6 },];
        expect(findPokerr(hand)).toBe(null);
    });
});