// 3.- (2 punts) Escriu un programa que demani a l'usuari un número N i mostri a la consola tots els números de l'1 fins a N. Pots fer-ho utilitzant tant un bucle for com un bucle while.

let N = parseInt(prompt("Introdueix un número N:"));
let i =1; // Variable per al bucle
while (N >= 1) {
    console.log("Número:"+ i);
    i++;
    N--;
}