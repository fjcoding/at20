const arg1 = process.argv[2]; // first argument

function multiplesOf(multiple, number){    
    return number%multiple==0 ? true : false;
}

function sumOfMultiples (number){
    let sum = 0;
    for (let index = 1; index < number; index++) {
        if(multiplesOf(3, index) || multiplesOf(5, index)){
            sum += index;
        }
    }
    console.log("Sum of multiples: "+sum);
}

function main(){
    if(!isNaN(arg1)){
        const number = parseInt(arg1);
        if(number>=0){
            sumOfMultiples(number);
        }else{
            console.log("0");
        }
    }else{
        console.log("You must enter a number");
    }
}

main()