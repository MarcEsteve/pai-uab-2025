// Què son els arrays?
// https://www.figma.com/board/70nxREl8qURNuOfJhSX7HQ/FRONTEND?node-id=93-403&t=JP9ARxQYYeW3xAZL-4

let arrayExample = [1, 2, 3, 4, 5];
console.log(arrayExample); // Mostra l'array complet

// Accedir a un element específic
console.log(arrayExample[2]); // Mostra el tercer element (índex 2)

// Afegir un element al final de l'array
arrayExample.push(6);
console.log(arrayExample); // Mostra l'array amb el nou element

// Eliminar l'últim element de l'array
arrayExample.pop();
console.log(arrayExample); // Mostra l'array després d'eliminar l'últim element

// Iterar sobre els elements de l'array
arrayExample.forEach(function(element) {
    console.log(element); // Mostra cada element de l'array
});

// Mida de l'array
console.log(arrayExample.length); // Mostra la mida de l'array