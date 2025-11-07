// 1.- (2 punts) Escriu un programa amb JavaScript que, donat un número llegit amb prompt (recorda fer la conversió), escrigui el missatge a consola "El número és superior a 3" si el número és més gran que tres, "El número és inferior a 3" si és més petit que tres i "El número és tres" si és igual a tres.

let numero = parseInt(prompt("Introdueix un numero:"));

// if (numero > 3) {
//   console.log("El numero es major que 3");
// } else if (numero < 3) {
//   console.log("El numero es menor que 3");
// } else {
//   console.log("El numero es igual a 3");
// }

if (numero > 3) {
  console.log("El numero es major que 3");
} else if (numero < 3) {
  console.log("El numero es menor que 3");
} else if (numero === 3) {
  console.log("El numero es igual a 3");
} else {
  console.log("No és un número vàlid");
}
