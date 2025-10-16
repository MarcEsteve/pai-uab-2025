    // let diaSetmana = new Date().toLocaleDateString('ca-ES', { weekday: 'long' });

    let diaSetmana = "diMecres";
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

    