// 1. links
console.log("Nombre d'enllaços:", document.links.length);
console.log("Primer enllaç:", document.links[0].href);

// 2. length (exemple amb imatges)
console.log("Nombre d'imatges:", document.images.length);

// 3. innerHTML (modificar contingut)
document.getElementById("info").innerHTML =
  "Benvinguts a PAI! Aquí aprendreu a interactuar amb el DOM.";

// 4. value + 5. forms
function llegirValor() {
  let formulari = document.forms[0];
  let valor = document.getElementById("inputSensor").value;

  document.getElementById("info").innerHTML =
    "Has introduït un valor de PM2.5: " + valor + " µg/m³";
}

// 6. images (modificar imatge)
setTimeout(() => {
  document.images[0].src = "../IMG/ciutat2.jpg";
  console.log("Imatge canviada després de 2 segons");
}, 2000);

// 7. scripts
console.log("Scripts carregats:", document.scripts.length);
