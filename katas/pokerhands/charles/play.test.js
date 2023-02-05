import { Play } from "./play";
import { PokerHand } from "./pokerHand";

describe('Tests for play class', () => {
    it('should be able to show the poker hand of each player', () => {
        let cardList = 'Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH';
        const players = {
            'player1' : {
                'name': 'Black',
                'pokerHand': new PokerHand(['KD','9C','5S','3D','2H'])
            },
            'player2' : {
                'name': 'White',
                'pokerHand': new PokerHand(['AH','8C','4S','3H','2C'])
            }
        }
        let play = new Play(cardList);
        expect(play.pokerHandsPlayers()).toBe(players);

        cardList = 'Black: 2H 4S 4C 2D 4H  White: 2S 8S AS QS 3S';
        players = {
            'player1' : {
                'name': 'Black',
                'pokerHand': new PokerHand(['2H', '4S', '4C', '2D', '4H'])
            },
            'player2' : {
                'name': 'White',
                'pokerHand': new PokerHand(['2S', '8S', 'AS', 'QS', '3S'])
            }
        }
        play = new Play(cardList);
        expect(play.pokerHandsPlayers()).toBe(players);
    });
});
