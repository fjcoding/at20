export class HandChecker {
    hasConsecutiveValues(pokerhand) {
        let hasConsecutives = true;
        pokerhand.sortCards();
        pokerhand.cards.forEach((card, index) => {
            if (index < pokerhand.cards.length - 1) {
                const previous = card.value.numeric;
                const next = pokerhand.cards[index + 1].value.numeric;
                hasConsecutives &&= previous + 1 === next;
            }
        });
        return hasConsecutives;
    }

    hasAllCardsSameSuit(pokerhand) {
        let allSameSuit = true;
        let index = 0;
        const firstSuit = pokerhand.cards[0].suit;
        while (allSameSuit && index < pokerhand.cards.length) {
            allSameSuit &&= pokerhand.cards[index++].suit === firstSuit;
        }
        return allSameSuit;
    }
}