export class cardDeck {
    static suitValue = {
        '2' : {
            'C' :'2C',
            'D' :'2D',
            'H' :'2H',
            'S' :'2S'
        }
        ,
        '3' : {
            'C' :'3C',
            'D' :'3D',
            'H' :'3H',
            'S' :'3S'
        }
        ,
        '4' : {
            'C' :'4C',
            'D' :'4D',
            'H' :'4H',
            'S' :'4S'
        }
        ,
        '5' : {
            'C' :'5C',
            'D' :'5D',
            'H' :'5H',
            'S' :'5S'
        }
        ,
        '6' : {
            'C' :'6C',
            'D' :'6D',
            'H' :'6H',
            'S' :'6S'
        }
        ,
        '7' : {
            'C' :'7C',
            'D' :'7D',
            'H' :'7H',
            'S' :'7S'
        }
        ,
        '8' : {
            'C' :'8C',
            'D' :'8D',
            'H' :'8H',
            'S' :'8S'
        }
        ,
        '9' : {
            'C' :'9C',
            'D' :'9D',
            'H' :'9H',
            'S' :'9S'
        }
        ,
        'T' : {
            'C' :'TC',
            'D' :'TD',
            'H' :'TH',
            'S' :'TS'
        }

        ,
        'J' : {
            'C' :'JC',
            'D' :'JD',
            'H' :'JH',
            'S' :'JS'
        }

        ,
        'Q' : {
            'C' :'QC',
            'D' :'QD',
            'H' :'QH',
            'S' :'QS'
        }
        ,
        'K' : {
            'C' :'KC',
            'D' :'KD',
            'H' :'KH',
            'S' :'KS'
        }

        ,
        'A' : {
            'C' :'AC',
            'D' :'AD',
            'H' :'AH',
            'S' :'AS'
        }
    };

    #suit;

    #value;

    constructor(value, suit) {
        this.#value = value;
        this.#suit = suit;
    }

    asCard() {
        return cardDeck.suitValue[this.#value][this.#suit];
    }
}