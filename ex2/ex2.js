const couleur = document.querySelector("#couleur");
const police = document.querySelector("#police");
const taille = document.querySelector("#taille");
const texte = document.querySelector("h1");
couleur.addEventListener("change", () => {
  texte.style.color = couleur.value;
});
police.addEventListener("change", () => {
  texte.style.fontFamily = police.value;
});
taille.addEventListener("change", () => {
  texte.style.fontSize = taille.value + "px ";
});
