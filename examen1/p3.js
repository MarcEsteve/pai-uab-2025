// 3.- (2 punts) Escriu un programa que demani a l'usuari una constant NUMERO positiva i mostri a la consola tots els números del 0 fins a NUMERO. Pots fer-ho utilitzant qualsevol bucle. Si no és positiu, que no faci res.

const NUMERO = parseInt(prompt("Introdueix un número positiu:"));
if (NUMERO > 0) {
  for (let i = 0; i <= NUMERO; i++) {
    console.log(i);
  }
}