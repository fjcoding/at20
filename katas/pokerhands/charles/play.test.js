import { Play } from "./play";
import { PokerHand } from "./pokerHand";

describe('Tests for play class', () => {
    it('should be able to show the poker hand of each player', () => {
        let cardList = 'Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH';
        let players = {
            'player1' : {
                'name': 'Black',
                'pokerHand': new PokerHand(['KD','9C','5S','3D','2H']),
                'rankPH': 'HC'
            },
            'player2' : {
                'name': 'White',
                'pokerHand': new PokerHand(['AH','8C','4S','3H','2C']),
                'rankPH': 'HC'
            }
        }
        let play = new Play(cardList);
        expect(play.pokerHandsPlayers()).toStrictEqual(players);

        cardList = 'Black: 2H 4S 4C 2D 4H  White: 2S 8S AS QS 3S';
        players = {
            'player1' : {
                'name': 'Black',
                'pokerHand': new PokerHand(['2H', '4S', '4C', '2D', '4H']),
                'rankPH': 'FH'
            },
            'player2' : {
                'name': 'White',
                'pokerHand': new PokerHand(['2S', '8S', 'AS', 'QS', '3S']),
                'rankPH': 'FL'
            }
        }
        play = new Play(cardList);
        expect(play.pokerHandsPlayers()).toStrictEqual(players);
    });

    it('You should be able to show if there is a winner or there is a tie.', () => {
        let cardList = 'Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C AH';
        let players = {
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
        expect(play.classificationResult()).toBe('White wins. - with high card: A');

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
        expect(play.classificationResult()).toBe('Black wins. - with full house: 4 over 2');

        cardList = 'Black: 2H 3D 5S 9C KD  White: 2C 3H 4S 8C KH';
        players = {
            'player1' : {
                'name': 'Black',
                'pokerHand': new PokerHand(['2H', '3D', '5S', '9C', 'KD'])
            },
            'player2' : {
                'name': 'White',
                'pokerHand': new PokerHand(['2C', '3H', '4S', '8C', 'KH'])
            }
        }
        play = new Play(cardList);
        expect(play.classificationResult()).toBe('Black wins. - with high card: 9');

        cardList = 'Black: 2H 3D 5S 9C KD  White: 2D 3H 5C 9S KH';
        players = {
            'player1' : {
                'name': 'Black',
                'pokerHand': new PokerHand(['2H', '3D', '5S', '9C', 'KD'])
            },
            'player2' : {
                'name': 'White',
                'pokerHand': new PokerHand(['2D', '3H', '5C', '9S', 'KH'])
            }
        }
        play = new Play(cardList);
        expect(play.classificationResult()).toBe('Tie');
    });

});
