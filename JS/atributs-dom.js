// 1. Modificar un href
function modificarHref() {
  let link = document.getElementById("enllacDades");
  link.href = "https://opendata-ajuntament.barcelona.cat";
  link.innerHTML = "Open Data Barcelona";
}

// 2. Modificar className (canvi d'estat del sensor)
function canviarClasse() {
  let sensor = document.getElementById("sensor");

  // Exemple: si està en verd → passa a taronja → després a vermell
  if (sensor.className === "sensor-ok") {
    sensor.className = "sensor-alerta";
  } else if (sensor.className === "sensor-alerta") {
    sensor.className = "sensor-perill";
  } else {
    sensor.className = "sensor-ok";
  }
}

// 3. Modificar estil directament
function canviarEstil() {
  let sensor = document.getElementById("sensor");

  sensor.style.fontSize = "20px";
  sensor.style.fontWeight = "bold";
  sensor.style.backgroundColor = "#f0f0f0";
}

// 4. Modificar src i alt d’una imatge
function canviarImatge() {
  let img = document.getElementById("imatgeMapa");

  img.src = "../IMG/ciutat2.jpg";
  img.alt = "Mapa actualitzat";
}

// 5. Modificar atributs dataset (molt important)
function canviarDataset() {
  let sensor = document.getElementById("sensor");

  // dataset = guardar info agregada del sensor
  sensor.dataset.id = "B91";
  sensor.dataset.tipus = "PM10";

  sensor.innerHTML = `Sensor ${sensor.dataset.tipus} – ID ${sensor.dataset.id}`;
}
