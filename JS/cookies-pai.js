// Guardar una cookie
function guardarCookie() {
    let nom = document.getElementById("nom").value;

    if (nom === "") {
        alert("Introdueix un nom");
        return;
    }

    // Guardem la cookie durant 1 dia
    document.cookie = "estudiant=" + nom + "; max-age=86400; path=/";

    document.getElementById("missatge").innerHTML =
        "Cookie guardada: " + nom;
}


// Llegir una cookie
function llegirCookie() {
    let cookies = document.cookie.split("; ");
    let estudiant = "No trobada";

    for (let i = 0; i < cookies.length; i++) {
        let parts = cookies[i].split("=");

        if (parts[0] === "estudiant") {
            estudiant = parts[1];
        }
    }

    document.getElementById("missatge").innerHTML =
        "Cookie llegida: " + estudiant;
}


// Esborrar una cookie
function esborrarCookie() {
    // Posem la cookie amb temps expirat
    document.cookie = "estudiant=; max-age=0; path=/";

    document.getElementById("missatge").innerHTML =
        "Cookie esborrada";
}
