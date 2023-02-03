import { pokerGame } from './poker.js';
//Sample input:

export function whoWins(Black, White) {
    const pokerGame1 = new pokerGame();
    const scoreBlack = pokerGame1.getScoreHand(Black);
    const scoreWhite = pokerGame1.getScoreHand(White);
    if (scoreBlack > scoreWhite) {
        return 'Black wins with score: ' + scoreBlack.toString();
    } else if (scoreBlack < scoreWhite) {
        return 'White wins with score: ' + scoreWhite.toString();
    } else if (scoreBlack === scoreWhite) {
        if (scoreBlack < 20000) {
            let numbersBlack = pokerGame1.onliNumbers(Black);
            let numbersWhite = pokerGame1.onliNumbers(White);
            numbersBlack.sort((a, b) => a - b);
            numbersWhite.sort((a, b) => a - b);
            for (let index = 4; index > 0; index--) {
                if (numbersBlack[index] > numbersWhite[index]) {
                    return 'Black wins';
                } else if (numbersWhite[index] > numbersBlack[index]) {
                    return 'White wins';
                }
            }
            return 'tie';
        }
        return 'tie';
    }
}