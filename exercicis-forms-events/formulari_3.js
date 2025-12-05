function comprovaEmail(){ 									
	let email= document.getElementsByName("email");
	//crea una llista
	let error= false; 			
	//determinem la posició del caràcter @ 			
	let primera = email[0].value.indexOf("@"); 			
	let ultima = email[0].value.lastIndexOf("@"); 			//verifiquem que existeix una @ 			
	if (primera==-1) { 				
		error = true; 			
	} 			
	//verifiquem que l'@ és única 			
	if (primera!=ultima) { 				
		error = true; 			
	} 			
		//verifiquem que l'@ no és ni al principi ni al final 			if (primera==0 || ultima==email[0].value.length-1) { 					error = true; 			
		} 			
		//mostrem el resultat 			 			
		if (error){ 			   
			alert("ERROR: el correu electrònic és incorrecte"); 			}
		else{ 
			alert("El correu electrònic és correcte") 		
		}
}  
