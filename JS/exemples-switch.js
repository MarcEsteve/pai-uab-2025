    // let diaSetmana = new Date().toLocaleDateString('ca-ES', { weekday: 'long' });

    let diaSetmana = "Dijous";

    diaSetmana = diaSetmana.toLowerCase();
    switch (diaSetmana) {
        case "dilluns":
            console.log("Avui és dilluns.");
            break;
        case "dimarts":
            console.log("Avui és dimarts.");
            break;
        case "dimecres":
            console.log("Avui és dimecres.");
            break;
        case "dijous":
            console.log("Avui és dijous.");
            break;
        case "divendres":
            console.log("Avui és divendres.");
            break;
        case "dissabte":
            console.log("Avui és dissabte.");
            break;
        case "diumenge":
            console.log("Avui és diumenge.");
            break;
        default:
            console.log("No es un dia de la setmana vàlid.");
    }

    // let  mesAny = "Octubre";
    let  mesAny = new Date().toLocaleDateString('ca-ES', { month: 'long' });

    switch (mesAny) {
        case "gener":
            console.log("Aquest mes és gener.");
            break;
        case "febrer":
            console.log("Avui és febrer.");
            break;
        case "març":
            console.log("Avui és març.");
            break;
        case "abril":
            console.log("Avui és abril.");
            break;
        case "maig":
            console.log("Avui és maig.");
            break;
        case "juny":
            console.log("Avui és juny.");
            break;
        case "juliol":
            console.log("Avui és juliol.");
            break;
        case "agost":
            console.log("Avui és agost.");
            break;
        case "setembre":
            console.log("Avui és setembre.");
            break;
        case "octubre":
            console.log("Avui és octubre.");
            break;
        case "novembre":
            console.log("Avui és novembre.");
            break;
        case "desembre":
            console.log("Avui és desembre.");
            break;
        default:
            console.log("No es un mes de l'any vàlid.");
    }