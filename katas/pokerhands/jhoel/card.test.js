import Card from './card';

describe('Test for Card Class', () => {
    //order -> 2, 3, 4, 5, 6, 7, 8, 9, T, J, Q, K, A
    //suit -> H, D, C, S
    it('should to assigned the correct suit to card', () => {
        let card = new Card('2', 'H');
        expect(card.getSuit()).toBe('H');
        expect(card.getSuitName()).toBe('Hearts');

        card = new Card('2', 'D');
        expect(card.getSuit()).toBe('D');
        expect(card.getSuitName()).toBe('Diamonds');

        card = new Card('2', 'C');
        expect(card.getSuit()).toBe('C');
        expect(card.getSuitName()).toBe('Clubs');

        card = new Card('2', 'S');
        expect(card.getSuit()).toBe('S');
        expect(card.getSuitName()).toBe('Spades');
    });

    it('should to assigned the correct value to card', () => {
        let card = new Card('2', 'H');
        expect(card.getValue()).toBe('2');
        expect(card.getValueName()).toBe('2');
        expect(card.getValueNumber()).toBe(0);

        card = new Card('3', 'H');
        expect(card.getValue()).toBe('3');
        expect(card.getValueName()).toBe('3');
        expect(card.getValueNumber()).toBe(1);

        card = new Card('4', 'H');
        expect(card.getValue()).toBe('4');
        expect(card.getValueName()).toBe('4');
        expect(card.getValueNumber()).toBe(2);


        card = new Card('5', 'H');
        expect(card.getValue()).toBe('5');
        expect(card.getValueName()).toBe('5');
        expect(card.getValueNumber()).toBe(3);

        card = new Card('6', 'H');
        expect(card.getValue()).toBe('6');
        expect(card.getValueName()).toBe('6');
        expect(card.getValueNumber()).toBe(4);

        card = new Card('7', 'H');
        expect(card.getValue()).toBe('7');
        expect(card.getValueName()).toBe('7');
        expect(card.getValueNumber()).toBe(5);

        card = new Card('8', 'H');
        expect(card.getValue()).toBe('8');
        expect(card.getValueName()).toBe('8');
        expect(card.getValueNumber()).toBe(6);

        card = new Card('9', 'H');
        expect(card.getValue()).toBe('9');
        expect(card.getValueName()).toBe('9');
        expect(card.getValueNumber()).toBe(7);

        card = new Card('T', 'H');
        expect(card.getValue()).toBe('T');
        expect(card.getValueName()).toBe('10');
        expect(card.getValueNumber()).toBe(8);

        card = new Card('J', 'H');
        expect(card.getValue()).toBe('J');
        expect(card.getValueName()).toBe('Jack');
        expect(card.getValueNumber()).toBe(9);

        card = new Card('Q', 'H');
        expect(card.getValue()).toBe('Q');
        expect(card.getValueName()).toBe('Queen');
        expect(card.getValueNumber()).toBe(10);

        card = new Card('K', 'H');
        expect(card.getValue()).toBe('K');
        expect(card.getValueName()).toBe('King');
        expect(card.getValueNumber()).toBe(11);

        card = new Card('A', 'H');
        expect(card.getValue()).toBe('A');
        expect(card.getValueName()).toBe('Ace');
        expect(card.getValueNumber()).toBe(12);
    });

    it('should correctly compare the values with other card and return if is greater, equal or less ', () => {
        //if the card is greater than other card, should return 1
        //if the card is equal to other card, should return 0
        //if the card is less than other card, should return -1
        let card1 = new Card('A', 'H');
        let card2 = new Card('K', 'H');
        expect(card1.compareWith(card2)).toBe(1);
        expect(card2.compareWith(card1)).toBe(-1);

        card1 = new Card('K', 'H');
        card2 = new Card('Q', 'H');
        expect(card1.compareWith(card2)).toBe(1);
        expect(card2.compareWith(card1)).toBe(-1);

        card1 = new Card('Q', 'H');
        card2 = new Card('J', 'H');
        expect(card1.compareWith(card2)).toBe(1);
        expect(card2.compareWith(card1)).toBe(-1);

        card1 = new Card('J', 'H');
        card2 = new Card('T', 'H');
        expect(card1.compareWith(card2)).toBe(1);
        expect(card2.compareWith(card1)).toBe(-1);

        card1 = new Card('T', 'H');
        card2 = new Card('9', 'H');
        expect(card1.compareWith(card2)).toBe(1);
        expect(card2.compareWith(card1)).toBe(-1);

        card1 = new Card('9', 'H');
        card2 = new Card('8', 'H');
        expect(card1.compareWith(card2)).toBe(1);
        expect(card2.compareWith(card1)).toBe(-1);

        card1 = new Card('8', 'H');
        card2 = new Card('7', 'H');
        expect(card1.compareWith(card2)).toBe(1);
        expect(card2.compareWith(card1)).toBe(-1);

        card1 = new Card('7', 'H');
        card2 = new Card('6', 'H');
        expect(card1.compareWith(card2)).toBe(1);
        expect(card2.compareWith(card1)).toBe(-1);

        card1 = new Card('6', 'H');
        card2 = new Card('5', 'H');
        expect(card1.compareWith(card2)).toBe(1);
        expect(card2.compareWith(card1)).toBe(-1);

        card1 = new Card('5', 'H');
        card2 = new Card('4', 'H');
        expect(card1.compareWith(card2)).toBe(1);
        expect(card2.compareWith(card1)).toBe(-1);

        card1 = new Card('4', 'H');
        card2 = new Card('3', 'H');
        expect(card1.compareWith(card2)).toBe(1);
        expect(card2.compareWith(card1)).toBe(-1);

        card1 = new Card('3', 'H');
        card2 = new Card('2', 'H');
        expect(card1.compareWith(card2)).toBe(1);
        expect(card2.compareWith(card1)).toBe(-1);

        card1 = new Card('A', 'H');
        card2 = new Card('A', 'H');
        expect(card1.compareWith(card2)).toBe(0);
    });

    it('should the correct string form of the card', () => {
        const card = new Card('A', 'H');
        expect(card.toString()).toBe('AH');
    });
});
