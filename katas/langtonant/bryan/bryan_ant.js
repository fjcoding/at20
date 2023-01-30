

var ant_up=0; //fixed direction value for up
var ant_r=1;//fixed direction value for right
var ant_d=2;//fixed direction value for down
var ant_l=3;//fixed direction value for left
 
var ant_dir=ant_up;//Default initial direction
var state_cell;//State that will be read when switching positions

var state;//current state in which the ant is in
var b_st=0;
var w_st=255;

var n_steps;
var steps;
var max_steps=12000;

var height = 3000;
var width=3000;
var ant_x = width/2;//ant's x coordinate Given a 2000x2000 canvas, the coordinates start in the middle, subject to change
var ant_y = height/2;// //Given a 2000x2000 canvas, the coordinates start in the middle




var can = document.getElementById("myCanvas");
var can_ob = can.getContext("2d");//Create a two dimensional object to represent the canvas

var pixelSize = 20; // 
can_ob.font = "20px Georgia";// Ant's size will be 10 pixels and the font georgia

var dark = "black";
var light = "white";

can_ob.fillStyle = light; //Create a white grid the same size of the canvas
can_ob.fillRect(0, 0, width, height);//Place the grid on the canvas 







 function direction(state) {

    // console.log("state cell: " )
    // console.log(state.data[0])
        if (state.data[0] == w_st && state.data[1] == w_st && state.data[2] == w_st ){
            ant_dir+=1;
            if (ant_dir > 3 ){
                   ant_dir=ant_up;
            }
        
            can_ob.fillStyle = dark;
            can_ob.fillRect(ant_x, ant_y, pixelSize, pixelSize);//Turn the cell black
        
            //state = b_st; //Add a line which changes or takes the state value and turns the cell black 
            }

        else if (state.data[0] == b_st && state.data[1] == b_st && state.data[2] == b_st ){
             ant_dir-=1; //
            if (ant_dir < 0 ){
                ant_dir=ant_l;
            }
        
            can_ob.fillStyle = light;
            can_ob.fillRect(ant_x, ant_y, pixelSize, pixelSize);//Turn the cell white
               // state = w_st; //Add a line which changes or takes the state value and turns the cell white
            }

            // console.log("Direction: " )
            // console.log(ant_dir)

                }

function move(dir) {
    if (dir == ant_up){

        ant_x=ant_x;//the values are subject to the corrdinate system
        ant_y-=pixelSize;
        
    }
    else if(dir== ant_r ){
        ant_x+=pixelSize;
        ant_y=ant_y;
    }
    else if(dir == ant_d){
        ant_x=ant_x;
        ant_y+=pixelSize;

    }

    else if(dir == ant_l){
        ant_x-=pixelSize;
        ant_y=ant_y;
    } 

    // console.log("Coordinates x y: ");
    // console.log(ant_x,ant_y);

        }


    // function begin(){


    //  state_cell = can_ob.getImageData(ant_x, ant_y, 1, 1);
    //  //add a line where we can read the state of the cell in the new coordinates after the function move
    //  direction(state_cell);
    //  move(ant_dir);
    // //  console.log("Step: ");
    // //  console.log(steps);
    // //  console.log("---------------");
    // // }
    // }
    // setInterval(begin, 0.001);


   
        for(steps=0;steps<=max_steps;steps++){
   
        state_cell = can_ob.getImageData(ant_x, ant_y, 1, 1);
        //add a line where we can read the state of the cell in the new coordinates after the function move
        direction(state_cell);
        move(ant_dir);
       //  console.log("Step: ");
       //  console.log(steps);
       //  console.log("---------------");
        }
       
