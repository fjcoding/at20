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
}