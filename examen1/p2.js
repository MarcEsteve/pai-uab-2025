// 2.- (2 punts) Escriu un programa que, donat un número entre 1 i 12, escrigui a la consola el mes de l’any corresponent (1 = “gener”, 2 = “febrer”, ... , 10 = “octubre” etc.). Si no és cap dels números doni un missatge a consola de “No és cap mes de l’any”.

let mes = parseInt(prompt("Introdueix un número entre 1 i 12:"));
switch (mes) {
  case 1:
    console.log("gener");
    break;
  case 2:
    console.log("febrer");
    break;
  case 3:
    console.log("març");
    break;
  case 4:
    console.log("abril");
    break;
  case 5:
    console.log("maig");
    break;
  case 6:
    console.log("juny");
    break;
  case 7:
    console.log("juliol");
    break;
  case 8:
    console.log("agost");
    break;
  case 9:
    console.log("setembre");
    break;
  case 10:
    console.log("octubre");
    break;
  case 11:
    console.log("novembre");
    break;
  case 12:
    console.log("desembre");
    break;
  default:
    console.log("No és cap mes de l'any");
    break;
}

// if (mes < 1 || mes > 12) {
//   console.log("No és cap mes de l'any");
// }