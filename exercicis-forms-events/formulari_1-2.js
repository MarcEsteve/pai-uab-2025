function inici() {
  let resultat = "";
  // Apartat a
  resultat +=
    "<strong>Formulari 1</strong>:<br>" +
    document.formulari_i.firstname.value +
    "<br>";
  resultat += document.formulari_i.lastname.value + "<br>";
  // Apartat b
  // Cal determinar quin és el radiobutton seleccionat. Un cop trobat no cal buscar més
  let elements = document.formulari_ii.quest;
  let i = 0;
  while (i < elements.length && !elements[i].checked) {
    i++;
  }
  // Comprovo al final si he sortit del while perquè he trobat el seleccionat.
  if (elements[i].checked) {
    resultat +=
      "<strong>Formulari 2</strong>:<br>" + elements[i].value + "<br>";
  }

  // Apartat c
  // En aquest cas tots poden estar seleccionats, per tant cal mirar-los tots
  // Com que al formulari només estan aquests elements, els podem recorre tots.
  elements = document.formulari_iii;
  resultat += "<strong>Formulari 3</strong>:<br>";
  for (i = 0; i < elements.length; i++) {
    if (elements[i].checked) {
      resultat += elements[i].value + "<br>";
    }
  }

  // Apartat d
  resultat += "<strong>Formulari 4</strong>:<br>";
  resultat += document.getElementById("opcions").options[2].value;

  document.getElementById("resultats").innerHTML = resultat;
}
