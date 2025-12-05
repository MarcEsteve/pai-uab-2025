  function mostraOculta() {
    let element = document.getElementById('paragraf');
    let enllac = document.getElementById('enllaç');
    if(element.style.display == "" || element.style.display == "block") {
		element.style.display = "none";
		enllaç.innerHTML = 'Prem per veure';
    }
    else {
		element.style.display = "block";
		enllaç.innerHTML = 'JavaScript';
    }
  }
