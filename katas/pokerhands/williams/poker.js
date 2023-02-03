export function countRepeats(hand) {
    const repeat = {};
    hand.forEach(card => {
        if (!repeat[card.value]) {
            repeat[card.value] = 0;
        }
        repeat[card.value]++;
    });
    return repeat;
}

export function findPokerr(hand) {
    const repeat = countRepeats(hand);
    for (let value in repeat) {
        if (repeat[value] === 4) {
            return parseInt(value, 10);
        }
    }
    return null;
}

const hand = [
    { value: 8, stick: 'diamonds' },
    { value: 8, stick: 'hearts' },
    { value: 8, stick: 'clubs' },
    { value: 8, stick: 'spades' },
    { value: 4, stick: 'diamonds' }
];

console.log(findPokerr(hand));

const hand1 = [
    { value: 8, stick: 'diamonds' },
    { value: 7, stick: 'hearts' },
    { value: 8, stick: 'clubs' },
    { value: 8, stick: 'spades' },
    { value: 4, stick: 'diamonds' }
];
console.log(findPokerr(hand1));
