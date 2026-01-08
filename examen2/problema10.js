// 10.	Tens el següent formulari HTML que no pots modificar (1,50):

// (problema10.html)
 
// A) Escriu el codi JavaScript per fer que, en clicar el botó, el paràgraf <p> mostri el text "El teu nom és:" seguit del nom introduït a l'input.

// B) Modifica el codi perquè, si no s'introdueix cap nom, es mostri el missatge d’error "Aquest camp és obligatori" en color vermell dins del <p>.



document.getElementById("mostrar").addEventListener("click", function() { 
 	const nom = document.getElementById("nom").value; 
 	const resultat = document.getElementById("resultat"); 
 	if (nom) { 
 		resultat.textContent = `El teu nom és: ${nom}`;
 		resultat.style.color = "black"; 
 		// Text en negre si tot és correcte 
 	} else { 
 		resultat.textContent = "Aquest camp és obligatori";  
 		resultat.style.color = "red"; 
 		// Text en vermell si hi ha error 
 	} 
});
