/*
       up
      ----
     |0000|
left |0000| right
     |0000|
     |0000|
      ----
      down

In simple words ANT is like a vector so it has a position(x,y) and a direction(up,down,right,left)
*/

module.exports = class ant {
    constructor(positionAnt, directionAnt) {
        this.positionAnt = positionAnt;
        this.directionAnt = directionAnt;
    }

    newDirection(direction, color) {
        if (direction == 'up' && color == 'black') {
            return 'left';
        } else if (direction == 'down' && color == 'black') {
            return 'right';
        } else if (direction == 'left' && color == 'black') {
            return 'down';
        } else if (direction == 'right' && color == 'black') {
            return 'up';
        }

        if (direction == 'up' && color == 'white') {
            return 'right';
        } else if (direction == 'down' && color == 'white') {
            return 'left';
        } else if (direction == 'left' && color == 'white') {
            return 'up';
        } else if (direction == 'right' && color == 'white') {
            return 'down';
        }
    }

    newPosition(direction, position) {
        let newPosition = [position[0], position[1]];

        if (direction == 'up') {
            newPosition[1] -= 1;
            return newPosition;
        } else if (direction == 'down') {
            newPosition[1] += 1;
            return newPosition;
        } else if (direction == 'left') {
            newPosition[0] -= 1;
            return newPosition;
        } else if (direction == 'right') {
            newPosition[0] += 1;
            return newPosition;
        }
    }

    move (color) {
        let newDirection = this.newDirection(this.directionAnt, color);
        let newPosition = this.newPosition(newDirection, this.positionAnt);
        this.directionAnt = newDirection;
        this.positionAnt = newPosition;
    }
};
