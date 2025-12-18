/* =====================================================
   1. FUNCIÓ CLÀSSICA
===================================================== */
function avaluarQualitatAire(pm25) {
    if (pm25 < 20) {
        return "Qualitat de l’aire BONA";
    } else {
        return "Qualitat de l’aire DOLENTA";
    }
}

function executarClassica() {
    let resultat = avaluarQualitatAire(15);
    mostrarResultat(resultat);
}


/* =====================================================
   2. FUNCIÓ ANÒNIMA (assignada a variable)
===================================================== */
let avaluarAireAnonima = function(pm25) {
    return pm25 < 20 ? "Aire net" : "Aire contaminat";
};

function executarAnonima() {
    let resultat = avaluarAireAnonima(30);
    mostrarResultat(resultat);
}


/* =====================================================
   3. FUNCIÓ FLETXA
===================================================== */
const avaluarAireArrow = (pm25) => {
    if (pm25 < 20) {
        return "Aire correcte";
    } else {
        return "Aire incorrecte";
    }
};

function executarArrow() {
    let resultat = avaluarAireArrow(10);
    mostrarResultat(resultat);
}


/* =====================================================
   4. FUNCIÓ FLETXA CURTA (return implícit)
===================================================== */
const estatAire = pm25 => pm25 < 20 ? "ESTAT OK" : "ESTAT ALERTA";

function executarArrowCurta() {
    let resultat = estatAire(25);
    mostrarResultat(resultat);
}


/* =====================================================
   5. FUNCIÓ FLETXA SENSE PARÀMETRES
===================================================== */
const obtenirHoraActual = () => {
    return new Date().toLocaleTimeString();
};

function mostrarHora() {
    mostrarResultat("Hora actual: " + obtenirHoraActual());
}


/* =====================================================
   6. FUNCIÓ AMB PARÀMETRES REST (...)
===================================================== */
function sumar(...valors) {
    let suma = 0;

    for (let i = 0; i < valors.length; i++) {
        suma += valors[i];
    }

    return suma;
}

function executarRest() {
    let total = sumar(12, 15, 9, 20);
    mostrarResultat("Suma total dels sensors: " + total);
}


/* =====================================================
   FUNCIÓ COMUNA PER MOSTRAR RESULTATS AL DOM
===================================================== */
function mostrarResultat(text) {
    document.getElementById("resultat").innerHTML = text;
}
