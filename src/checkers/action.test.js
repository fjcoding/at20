import { action } from './action';

describe('Tests for isValidPosition metod ', () => {
    it('should able to return false when input a incorrect position', () => {
        expect(action.isValidPosition(-2, 9)).toEqual(false);
    });
    it('should able to return true when input a correct position', () => {
        expect(action.isValidPosition(2, 5)).toEqual(true);
    });
});
