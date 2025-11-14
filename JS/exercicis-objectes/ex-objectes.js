//Constructor del objecte Cotxe

function Cotxe(m, c, cc) {
  // Propietats
  this.marca = m;
  this.color = c;
  this.cc = cc;
  // Métodes
  this.potent = function() {
    let text = "";
    if (this.cc > 1500) {
      text = "Molt potent!";
    } else {
      text = "Normalet";
    }
    return text;
  };
}

// Creació d'instàncies de l'objecte Cotxe

let cotxe1 = new Cotxe("Seat", "groc", 1500);
let cotxe2 = new Cotxe("Opel", "blanc", 1800);

console.log(cotxe1.marca + " " + cotxe1.cc + "cm3");
console.log(cotxe1.potent());

console.log(cotxe2.marca + " " + cotxe2.cc + "cm3");
console.log(cotxe2.potent());
