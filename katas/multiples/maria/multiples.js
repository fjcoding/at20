function multiples(number) {
    var suma = 0;
    if (number > 0) {
        for (let i = 1; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                suma = suma + i;
            }
        }
    }
    return suma;
}

console.log(multiples(process.argv[2]));