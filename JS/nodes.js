// Funció per afegir un sensor normal (appendChild + createElement + createTextNode)
function afegirSensor() {
  let llista = document.getElementById("llistaSensors");

  // Crear l'element <li>
  let nouSensor = document.createElement("li");

  // Crear el text del sensor
  let text = document.createTextNode("Sensor nou: Humitat — 48%");

  // Afegir el text dins del <li>
  nouSensor.appendChild(text);

  // Afegir el <li> al final de la llista
  llista.appendChild(nouSensor);
}

// Funció per afegir un sensor prioritari (insertBefore)
function afegirSensorPrioritari() {
  let llista = document.getElementById("llistaSensors");

  // Crear element
  let sensorUrgent = document.createElement("li");
  let text = document.createTextNode("⚠ Sensor prioritari: Soroll — 78 dB");

  sensorUrgent.appendChild(text);

  // Inserir-lo abans del primer element existent
  let primer = llista.firstElementChild;
  llista.insertBefore(sensorUrgent, primer);
}

// Funció per eliminar l'últim sensor (removeChild)
function eliminarUltimSensor() {
  let llista = document.getElementById("llistaSensors");
  let ultim = llista.lastElementChild;

  if (ultim) {
    llista.removeChild(ultim);
  }
}

// Funció per eliminar el primer sensor (removeChild)
function eliminarPrimerSensor() {
  let llista = document.getElementById("llistaSensors");
  let primer = llista.firstElementChild;

  if (primer) {
    llista.removeChild(primer);
  }
}

function afegirSensorPersonalitzat() {
  let llista = document.getElementById("llistaSensors");
  let tipus = document.getElementById("tipusSensor").value;
  let valor = document.getElementById("valorSensor").value;
  let magnitud = document.getElementById("magnitud").value;
  let prioritat = document.getElementById("prioritat").value;
  let nouSensorCustom = document.createElement("li");
  let text = document.createTextNode(`Sensor personalitzat: ${tipus} — ${valor} ${magnitud}`);

  nouSensorCustom.appendChild(text);
  if (prioritat === "urgent") {
    let primer = llista.firstElementChild;
    llista.insertBefore(nouSensorCustom, primer);
  } else {
    llista.appendChild(nouSensorCustom);
  }
}

