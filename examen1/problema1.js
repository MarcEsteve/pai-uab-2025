let numero = parseInt(prompt("Dóna'm un número enter"));

// console.log(numero);

if (numero === 0) {
    //Acció si la condició es true
    console.log("El número és zero");
} else if (numero > 0) {
    //Acció si la condició else if es true
    console.log("El número és positiu");
} else {
    //Acció si la condició es diferent de les anteriors
    console.log("El número és negatiu");
}