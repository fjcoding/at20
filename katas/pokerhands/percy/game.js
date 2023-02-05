import { pokerHand } from './pokerHand';
import { handCard } from './cardsPokerHand';

export class game {
    //2=0 3=1 4=2 5=3 6=4 7=5 8=6 9=7 T=8 J=9 Q=10 K=11 A=12
    #white;

    #black;

    #asWinner;


    constructor(white, black) {
        this.#white = white;
        this.#black = black;
        this.#gamePoker();
    }

    get asWinner() {
        return this.#asWinner;
    }

    // '2H 3D 5S 9C KD';
    #gamePoker() {
        let blackValue = 0;
        let whiteValue = 0;
        const handCardsWhite = this.#white;
        const handCard1White = new handCard(handCardsWhite);
        const whiteHand = new pokerHand(handCard1White.asHandCard);
        const gameWhite = whiteHand.asValueCard[0];
        if (gameWhite == 'High Card Win') {
            whiteValue = 1;
        } else if (gameWhite == 'pair') {
            whiteValue = 2;
        } else if (gameWhite == 'Two pair') {
            whiteValue = 3;
        } else if (gameWhite == 'Three of a kind') {
            whiteValue = 4;
        } else if (gameWhite == 'flush') {
            whiteValue = 5;
        } else if (gameWhite == 'Full House') {
            whiteValue = 6;
        } else if (gameWhite == 'four of a kind') {
            whiteValue = 7;
        }


        const handCardsBlack = this.#black;
        const handCard1Black = new handCard(handCardsBlack);
        const BlackHand = new pokerHand(handCard1Black.asHandCard);
        const gameBlack = BlackHand.asValueCard[0];
        if (gameBlack == 'High Card Win') {
            blackValue = 1;
        } else if (gameBlack == 'pair') {
            blackValue = 2;
        } else if (gameBlack == 'Two pair') {
            blackValue = 3;
        } else if (gameBlack == 'Three of a kind') {
            blackValue = 4;
        } else if (gameBlack == 'flush') {
            blackValue = 5;
        } else if (gameBlack == 'Full House') {
            blackValue = 6;
        } else if (gameBlack == 'four of a kind') {
            blackValue = 7;
        }
        this.#asWinner=[whiteValue,blackValue];
        if (whiteValue === blackValue) {
            whiteValue=whiteValue+whiteHand.asValueCard[1];
            blackValue=blackValue+BlackHand.asValueCard[1];
            if (whiteValue > blackValue) {
                this.#asWinner = 'White wins : ' + gameWhite;
            } else if (blackValue > whiteValue) {
                this.#asWinner = 'Black wins : ' + gameBlack;
            }else if(whiteValue === blackValue){
            this.#asWinner = 'Tie';
        }
        } else if (whiteValue > blackValue) {
            this.#asWinner = 'White wins : ' + gameWhite;
        } else if (blackValue > whiteValue) {
            this.#asWinner = 'Black wins : ' + gameBlack;
        }
    }
}


