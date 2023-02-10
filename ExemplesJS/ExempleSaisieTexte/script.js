// Mettre un style Special
document.getElementById("boutonValider").addEventListener("click", afficherBienvenue);

function afficherBienvenue() {
  var myname = document.getElementById("myname").value;
  document.getElementById("zoneMessage").textContent = "Bonjour " + myname + " , je vous souhaite la bienvenue !";

  var monage = document.getElementById("myage").value;
  var parag = document.createElement('p');
  parag.textContent = "Vous avez " + monage + " ans ";
  document.getElementById("zoneMessage").appendChild(parag);
  
  var now = new Date();
  var annee   = now.getFullYear();
  var anneeNaissance = annee - parseInt(monage);
  var parag2 = document.createElement('p');
  parag2.textContent = "Votre année de naissance est, à un an près, l'année " + anneeNaissance.toString();
  document.getElementById("zoneMessage").appendChild(parag2);
  
  var parag3 = document.createElement('p');
  if (parseInt(monage) >= 18) {
	parag3.textContent = " Vous êtes majeur " ;
  }
  else {
	  parag3.textContent = " Vous êtes mineur " ;
  }
  document.getElementById("zoneMessage").appendChild(parag3);  
}

