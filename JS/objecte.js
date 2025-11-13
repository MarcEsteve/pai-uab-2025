// Objecte simple Persona
let persona = {
  nom: "Cristina Casanova Esteve",
  dni: "52535948W",
  dataNaix: new Date("2002/04/28"),
};

console.log(persona);
console.log(
  "Nom: " +
    persona.nom +
    ", DNI: " +
    persona.dni +
    ", Data de Naixement: " +
    persona.dataNaix.toDateString()
);

// Constructor d'objectes Persona

function Persona(nom, dni, dn) {
  this.nom = nom;
  this.dni = dni;
  this.dataNaix = new Date(dn);
}

let persona1 = new Persona(
  "Cristina Casanova Esteve",
  "52535948W",
  "2002/04/28"
);
let persona2 = new Persona("Andreu Oliveres Martí", "55214587T", "2002/02/03");

console.log(persona1);
console.log(persona2);

console.log(
  "Nom: " +
    persona1.nom +
    ", DNI: " +
    persona1.dni +
    ", Data de Naixement: " +
    persona1.dataNaix.toDateString()
);
console.log(
  "Nom: " +
    persona2.nom +
    ", DNI: " +
    persona2.dni +
    ", Data de Naixement: " +
    persona2.dataNaix.toDateString()
);


//Crearem un contructor de objectes Coche
function Coche(marca, modelo, anyo) {
  this.marca = marca;
  this.modelo = modelo;
  this.anyo = anyo;
}
let coche1 = new Coche("Toyota", "Corolla", 2020);
let coche2 = new Coche("Honda", "Civic", 2019);

console.log(
  "Marca: " +
    coche1.marca +      
    ", Modelo: " +
    coche1.modelo +
    ", Año: " +
    coche1.anyo
);