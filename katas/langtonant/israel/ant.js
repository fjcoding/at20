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
    constructor(position_ant,direction_ant){
        this.position_ant = position_ant;
        this.direction_ant = direction_ant;
    }

    new_direction(direction,color){
        //with black color

        if(direction == "up" && color == "black"){
            return "left";
        }
        else if(direction == "down" && color == "black"){
            return "right";
        }
        else if(direction == "left" && color == "black"){
            return "down";
        }
        else if(direction == "right" && color == "black"){
            return "up";
        }

        //with white color

        if(direction == "up" && color == "white"){
            return "right";
        }
        else if(direction == "down" && color == "white"){
            return "left";
        }
        else if(direction == "left" && color == "white"){
            return "up";
        }
        else if(direction == "right" && color == "white"){
            return "down";
        }

    }


    new_position(direction,position){
        let new_position = [position[0], position[1]];
    
        if(direction == "up"){
            new_position[1] -= 1; 
            return new_position;
        }
        else if(direction == "down"){
            new_position[1] += 1; 
            return new_position;
        }
        else if(direction == "left"){
            new_position[0] -= 1; 
            return new_position;
        }
        else if(direction == "right" ){
            new_position[0] += 1; 
            return new_position;
        }
    }

    move (color){
        let new_direction = this.new_direction(this.direction_ant,color);
        let new_position = this.new_position(new_direction,this.position_ant)
        this.direction_ant = new_direction
        this.position_ant = new_position;
    }
}
