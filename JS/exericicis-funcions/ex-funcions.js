// 3.1 Escriu un script que contingui una funció a la qual se li passa com a paràmetre un nombre enter i retorna com a resultat una cadena de text que indica si el número és parell o imparell. Mostra per pantalla el resultat retornat per la funció.


function parellSenar(numero) {
    if (numero % 2 === 0) {
        return "El número " + numero + " és parell.";
    } else {
        return "El número " + numero + " és imparell.";
    }
}

let numeroEntrada = parseInt(prompt("Introdueix un nombre enter:"));
let resultat = parellSenar(numeroEntrada);
console.log(resultat);
document.getElementById("resultado31").innerText = resultat;