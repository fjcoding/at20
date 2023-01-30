
var count;
var sum = 0;
var numb;


function multiples(top) {
    if (top < 0) {
        return 0;
    } else {
        for (count = 0; count < top; count++) {
            if (count % 5 == 0 || count % 3 == 0) {
                sum += count;
            }
        }

        return sum;
    }
}


numb = 20;
console.log(multiples(numb));


