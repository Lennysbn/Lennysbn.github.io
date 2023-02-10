// Pour menu déroulant

function recette(fruit) {
  if (fruit == "rien") {
    document.getElementById("infoFruit").classList.remove("special");
    document.getElementById("infoFruit").textContent="";
  }
  else {
    document.getElementById("infoFruit").classList.add("special");
    if (fruit == "Banane") {
    document.getElementById("infoFruit").textContent="Avec de la banane, vous pouvez faire une banane flambée !";
    }
    if (fruit == "Fraise") {
    document.getElementById("infoFruit").textContent="Avec des fraises, vous pouvez faire une tarte aux fraises !";
    }
    if (fruit == "Pomme") {
    document.getElementById("infoFruit").textContent="Avec de la pomme, vous pouvez faire de la compote de pommes !";
    }
  }
}