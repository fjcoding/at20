import { Card } from './card';
import { Hand } from './hand';

describe('Tests for card class', () => {
    it('should be able to parse a  numeric to string input', () => {
        const input = '2C';
        let value;
        let suit;
        let separator = input.split('');
        value = separator[0];
        suit = separator[1];
        const card = new Card(value, suit);
        expect(card.valueResult()).toBe(2);
    });

    it('should be able to parse a  numeric to string input', () => {
        const input = 'AC';
        let value;
        let suit;
        let separator = input.split('');
        value = separator[0];
        suit = separator[1];
        const card = new Card(value, suit);
        expect(card.valueResult()).toBe(14);
    });

    it('should be able to coincide whit the suit to string input', () => {
        const input = '8H';
        let value;
        let suit;
        let separator = input.split('');
        value = separator[0];
        suit = separator[1];
        const card = new Card(value, suit);
        expect(card.suitResult()).toBe('HEARTS');
    });
});

describe('Tests for hand class', () => {
    it('should be able to separate an string in pairs', () => {
        const input = '2H 3D 5S 9C KD';
        let separator = input.split('');
        let playHand = separator;
        const hand = new Hand(playHand);
        expect(hand.separatorInPairs()).toBe(['2H', '3D', '5S', '9C', 'KD']);
    });
});
