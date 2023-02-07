const pokerHands = [
    { hand: 'High Card', value: 1 },
    { hand: 'Pair', value: 2 },
    { hand: 'Two Pairs', value: 3 },
    { hand: 'Three of a Kind', value: 4 },
    { hand: 'Straight', value: 5 },
    { hand: 'Flush', value: 6 },
    { hand: 'Full House', value: 7 },
    { hand: 'Four of a Kind', value: 8 },
    { hand: 'Straight Flush', value: 9 }
];

const values = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    T: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14
};

const suits = {
    C: 1,
    D: 2,
    H: 3,
    S: 4
};

export function comparePokerHands(hand1, hand2) {
    const hand1Score = getHandScore(hand1);
    const hand2Score = getHandScore(hand2);

    if (hand1Score > hand2Score) {
        return `${hand1} wins with a ${pokerHands[hand1Score - 1].hand}`;
    } else if (hand1Score < hand2Score) {
        return `${hand2} wins with a ${pokerHands[hand2Score - 1].hand}`;
    } else {
        return 'It\'s a tie';
    }
}

function getHandScore(hand) {
    const cards = hand.split(' ');
    const cardValues = cards.map(card => values[card[0]]);
    const cardSuits = cards.map(card => suits[card[1]]);

    const isStraight = isHandStraight(cardValues);
    const isFlush = isHandFlush(cardSuits);

    if (isStraight && isFlush) {
        return pokerHands.find(hand => hand.hand === 'Straight Flush').value;
    }

    const countByValue = countBy(cardValues, value => value);

    if (hasNOfAKind(countByValue, 4)) {
        return pokerHands.find(hand => hand.hand === 'Four of a Kind').value;
    }

    const threeOfAKind = countByValue.find(count => count === 3);
    const pairs = countByValue.filter(count => count === 2);

    if (threeOfAKind && pairs.length === 1) {
        return pokerHands.find(hand => hand.hand === 'Full House').value;
    }

    if (isFlush) {
        return pokerHands.find(hand => hand.hand === 'Flush').value;
    }

    if (isStraight) {
        return pokerHands.find(hand => hand.hand === 'Straight').value;
    }

    if (threeOfAKind) {
        return pokerHands.find(hand => hand.hand === 'Three of a Kind').value;
    }

    if (pairs.length === 2) {
        return pokerHands.find(hand => hand.hand === 'Two Pairs').value;
    }

    if (pairs.length === 1) {
        return pokerHands.find(hand => hand.hand === 'Pair').value;
    }

    return pokerHands.find(hand => hand.hand === 'High Card').value;
}

function isHandFlush(cardSuits) {
    return new Set(cardSuits).size === 1;
}

function isHandStraight(cardValues) {
    const maxValue = Math.max(...cardValues);
    const minValue = Math.min(...cardValues);
    return maxValue - minValue === 4 && new Set(cardValues).size === 5;
}

function countBy(items, fn) {
    const result = {};
    items.forEach(item => {
        const key = fn(item);
        result[key] = result[key] ? result[key] + 1 : 1;
    });
    return Object.values(result);
}

function hasNOfAKind(counts, n) {
    return counts.some(count => count === n);
}
const hand1 = '2H 8H 4H 5H 6H';
const hand2 = 'AH KH QH JH TH';

console.log(comparePokerHands(hand1, hand2));