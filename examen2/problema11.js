document.getElementById("afegir").addEventListener("click", function () {
  const llista = document.getElementById("llista");
  const quart = llista.children[2]; // Seleccionem el quart element
  const tercer = document.createElement("li"); // Creem un nou <li>
  tercer.textContent = "Tercer"; // Assignem el text
  llista.insertBefore(tercer, quart); // Inserim abans del quart
});

document.getElementById("esborrar").addEventListener("click", function() { 
 	const llista = document.getElementById("llista"); 
 	const segon = llista.children[1]; // Seleccionem el segon element 
 	llista.removeChild(segon); // L'eliminem 
});

