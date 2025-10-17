let contador = 1;
do {      
    console.log("El valor de contador és: " + contador);
    contador++;
} while (contador <= 5);

// 🔁 Exemple: Simular la lectura del nivell de contaminació d’un sensor

let nivellContaminacio;

// Simulem la lectura d’un sensor (valor entre 0 i 100)
do {
  nivellContaminacio = Math.floor(Math.random() * 101);
  console.log("Nivell de contaminació llegit: " + nivellContaminacio);
} while (false); // Ens assegurem que s’executa un cop

// Avaluem el resultat
if (nivellContaminacio > 50) {
  console.log("⚠️ Alerta: nivell alt de contaminació!");
} else {
  console.log("✅ Nivell segur de contaminació.");
}
