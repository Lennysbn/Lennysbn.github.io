// Pour bouton radio

function mymessage() {
  var monTexte = "";
  if (document.getElementById("Chanel").checked){
    monTexte = "Non, Chanel a été créé en 1910 à Paris";
  }
  if (document.getElementById("Louis Vuitton").checked){
    monTexte = "En effet, Louis Vuitton a été créé en 1854, c'est donc la,plus ancienne des 3";
  }
  if (document.getElementById("Dior").checked){
    monTexte = "Pas de chance, c'est la plus recente, elle est fondée en 1946";
  }
  document.getElementById("messageBienvenue").textContent = monTexte;
}