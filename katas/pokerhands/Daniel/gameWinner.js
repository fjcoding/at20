import { Cards } from './mixCards';
import { pokerHandgame } from './pokerhands';

export class winnerplayer {
    constructor() {
        this.whitePlayer = new Cards();
        this.blackPlayer = new Cards();
    }

    dealHands() {
        this.whitePlayerHand = this.whitePlayer.handMaker();
        this.blackPlayerHand = this.blackPlayer.handMaker();
    }

    compareHands() {
        let whiteHandRank = new pokerHandgame(this.whitePlayerHand).HandRanking();
        let blackHandRank = new pokerHandgame(this.blackPlayerHand).HandRanking();
        if (whiteHandRank > blackHandRank) {
            return 'White player wins';
        } else if (blackHandRank > whiteHandRank) {
            return 'Black player wins';
        } else {
            return 'Tie!';
        }
    }
}
