
const limit = process.argv[2]; // number limit

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