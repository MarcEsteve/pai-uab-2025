// 12.	Crea un formulari amb el següent HTML que no pots modificar (1,50):

//  A) Escriu el codi JavaScript perquè, en clicar el botó "Validar", es comprovi que el camp de correu té exactament una @ i un punt després d'aquesta. Si el correu és vàlid, mostra "Correu vàlid" en color verd al paràgraf <p>. Si no ho és, mostra "Correu no vàlid" en color vermell al mateix paràgraf.
document.getElementById("validar").addEventListener("click", function () {
    //Identifica els elements necessaris
    //Valor del correu
  const email = document.getElementById("email").value;
    //Element on es mostrarà el missatge
  const error = document.getElementById("error");
  //Comprova si el correu té exactament una @ i un punt després d'aquesta
  const atIndex = email.indexOf("@");
  const lastAtIndex = email.lastIndexOf("@");
  const hasDotAfterAt = email.indexOf(".", atIndex) > atIndex;
  if (atIndex !== -1 && atIndex === lastAtIndex && hasDotAfterAt) {
    error.textContent = "Correu vàlid";
    error.style.color = "green"; // Text en verd si és correcte
  } else {
    error.textContent = "Correu no vàlid";
    error.style.color = "red"; // Text en vermell si hi ha error
  }
});

// B) Extreu només el domini del correu (el text després de la @) i mostra'l en un alert.

document.getElementById("validar").addEventListener("click", function() {
  const email = document.getElementById("email").value;
  const atIndex = email.indexOf("@");
  if (atIndex !== -1) {
    const domini = email.slice(atIndex + 1); // Extreiem tot després de la "@"
    alert(`El domini del correu és: ${domini}`);
    console.log(domini);
  }
});

