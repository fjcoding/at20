
export class positionOnBoard {
     #posX
     #posY

     #color
    #board=[]
     constructor(board,color) {
         this.#board=board;
         this.#color=color;


        }

     asPosition() {
        var arr=[];
        const a=this.#board.length;
       for (var i = 0; i < a; i++) {
            for (var j = 0; j < a; j++) {
            if (this.#board[i][j]==this.#color) {
               arr.push([i,j])
          }
        }
       }
        return arr;
     }

 }

