const numberLimit = process.argv[2]; // first argument

if (!Number.isInteger(Number(numberLimit))) {
    throw new Error('The argument must be an integer');
}


const multiples = (numberLimit) => {
    let sum = 0;

    for (let number = 1; number < numberLimit; number++) {
        if (number % 3 === 0 || number % 5 === 0) {
            sum += number;
        }
    }

    return sum;
};

console.log(`Sum of multiples of 3 and 5 below ${numberLimit} is\x1b[32m ${multiples(numberLimit)}\x1b[37m`);