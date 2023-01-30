const multiples = (num) =>{
    let listMultiples = [];
    for (let i = 1; i < num; i++) {
        if ((i % 3 === 0) ||(i % 5 === 0 )){
            listMultiples.push(i);
        }  
    }
    const finalResult = listMultiples.reduce(
        (previousValue, currentValue) => previousValue + currentValue);

    console.log(finalResult)
}
multiples(10);