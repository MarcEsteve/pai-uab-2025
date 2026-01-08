// 9.	Defineix un objecte (i assigna valors inventats) que representi un estudiant i crea una funció que calculi la seva nota final. L'objecte haurà de contenir les següents propietats:
// •	nom: Nom de l'estudiant. string
// •	assignatures: Un array que inclou noms de les assignatures. []
// •	notes: Un array amb les notes corresponents a cada assignatura. []
// La funció calculaNotaFinal(estudiant) ha de:
// •	Retornar la mitjana de les notes de l'estudiant.
// •	Afegir un nou camp a l'objecte anomenat notaFinal amb el valor de la mitjana.
// •	Mostrar per consola un missatge en format:
// "L'estudiant [nom] té una nota final de [notaFinal]".

// Definim l'objecte estudiant
const estudiant = {
  nom: "Marc",
  assignatures: ["Matemàtiques", "Història", "Programació"],
  notes: [8, 7.5, 9]
};

// Funció per calcular la nota final
function calculaNotaFinal(estudiant) {
  let suma = 0;

  // Recórrer les notes i sumar-les
  for (let i = 0; i < estudiant.notes.length; i++) {
    suma += estudiant.notes[i];
  }

  // Calcular la mitjana
  const mitjana = suma / estudiant.notes.length;

  // Afegir la propietat notaFinal
  estudiant.notaFinal = mitjana;

  // Mostrar el resultat
  console.log(
    `L'estudiant ${estudiant.nom} té una nota final de ${estudiant.notaFinal.toFixed(2)}`
  );
}

// Executar la funció
calculaNotaFinal(estudiant);

