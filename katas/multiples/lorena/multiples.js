
const limit = process.argv[2]; // first argumentvar limit = prompt('digite un numero?'); // number limit
//var limit = -15;
var addsum = 0;

if( limit >= 0){
    for(i=1; i<limit; i++){
        if(i % 3 == 0 || i % 5 == 0)
            addsum = addsum + i;
    }
    console.log(`The sum is: ${addsum}`)
    }
else
    console.log (0)