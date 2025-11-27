// 1. links
console.log("Nombre d'enllaços:", document.links.length);
console.log("Primer enllaç:", document.links[0].href);

// 2. length (exemple amb imatges)
console.log("Nombre d'imatges:", document.images.length);

// 3. innerHTML (modificar contingut)

console.log(document.getElementById("info").innerHTML);
document.getElementById("info").innerHTML =
  "Benvinguts a PAI! <br>Aquí aprendreu a interactuar amb el DOM.";

// 4. value + 5. forms
function llegirValor() {
  let formulari = document.forms[1];
  console.log("Nombre de formularis:" + document.forms.length)
  console.log(formulari);

  let valor = document.getElementById("inputSensor").value;
  document.getElementById("outputSensor").innerHTML =
    "Has introduït un valor de PM2.5: " + valor + " µg/m³";
}

// 6. scripts
console.log("Scripts carregats:", document.scripts.length);

// 7. images (modificar imatge) + 8 src (font de la imatge, per exemple)
setTimeout(() => {
  document.images[0].src = "../IMG/ciutat2.jpg";
  console.log("Imatge canviada després de 2 segons");
}, 2000);