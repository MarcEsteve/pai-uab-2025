document.getElementById("contingutDiv").addEventListener("mouseover", negre);

document.getElementById("contingutDiv").addEventListener("mouseout", argent);

function negre() {
  this.style.borderColor = "black";
}

function argent() {
  this.style.borderColor = "silver";
}