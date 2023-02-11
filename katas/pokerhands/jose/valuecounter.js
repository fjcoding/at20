export class ValueCounter {
    countRepeatedValues(pokerhand) {
        const count = {};
        pokerhand.cards.forEach(card => {
            if (count[card.value.symbol]) {
                count[card.value.symbol]++;
            } else {
                count[card.value.symbol] = 1;
            }
        });
        return count;
    }
}