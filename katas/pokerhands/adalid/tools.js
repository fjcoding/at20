const separador = () =>{
    const input = '2C';
    let value;
    let suit;
    let separator = input.split('');
    value = separator[0];
    suit = separator[1];
    console.log(separator, value, suit);
};
const separadorHand = () =>{
    const input = '2H 3D 5S 9C KD';
    //let arrNumbers = [];
    let separator = input.split(' ');
    // for (let i = 0; i < separator.length; i++) {
    //     let value;
    //     //let suit;
    //     value = separator[i].split('');
    //     arrNumbers.push(value);
    // }
    console.log(separator);
};
separador();
separadorHand();