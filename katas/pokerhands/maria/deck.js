export class Deck{
    #deck;
    constructor(deck){
        this.#deck = deck;
    }

    dealDeck(){
        var newDeck = this.#deck.split(' ');
        return newDeck
    }

    isHandOne(arrayCards){
        var handOne = new Array();
        var arrayNumeber = ['2','3','4','5','6','7','8','9'];
        for (let i = 0; i < 5 ; i++){
            var caracter = arrayCards[i+1].charAt(0);
            if(arrayNumeber.includes(caracter) ){
                handOne[i] = parseInt(caracter);
            }
            else if (caracter == 'T') {
                handOne[i] = 10;
            }
            else if (caracter == 'J') {
                handOne[i] = 11;
            }
            else if (caracter == 'Q') {
                handOne[i] = 12;
            }
            else if (caracter == 'K') {
                handOne[i] = 13;
            }
            else {
                handOne[i] = 14;
            }
       
        }

       return handOne
    }  

    isHandTwo(arrayCards){
        var handTwo = new Array();
        var arrayNumeber = ['2','3','4','5','6','7','8','9'];
        for (let i = 0; i < 5 ; i++){
            var caracter = arrayCards[i+8].charAt(0);
            if(arrayNumeber.includes(caracter) ){
                handTwo[i] = parseInt(caracter);
            }
            else if (caracter == 'T') {
                handTwo[i] = 10;
            }
            else if (caracter == 'J') {
                handTwo[i] = 11;
            }
            else if (caracter == 'Q') {
                handTwo[i] = 12;
            }
            else if (caracter == 'K') {
                handTwo[i] = 13;
            }
            else {
                handTwo[i] = 14;
            }
       
        }

       return handTwo
    }  
   
    isMax(hand) {
       var max =  Math.max(...hand)
       return max
    }
  
}

