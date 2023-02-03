//import Card from './card';

const playGame = (play1, play2) =>{
    console.log(play1 + ' | ' + play2);
};
playGame('2H 3D 5S 9C KD', '2C 3H 4S 8C AH');
export class Hand {
    #hand;

    constructor(hand) {
        this.hand = hand;
    }
    separatorInPairs(){}
}