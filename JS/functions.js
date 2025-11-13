let resultat; 
let sumand1 = parseInt(prompt("introdueix un valor"));
let sumand2 = parseInt(prompt("introdueix un valor"));

function sumar(s1, s2) {
  return s1 + s2;
    // console.log(s1 + s2);
}

// let resultat = sumar(5, 3);

// console.log(resultat);

resultat = sumar(sumand1, sumand2);
console.log(resultat);
alert("El resultat de la suma és: " + resultat);
