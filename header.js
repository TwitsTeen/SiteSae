document.addEventListener("DOMContentLoaded", scroll()); //appelle la fonction scroll quand la page est chargé

function scroll() {
  var header = document.getElementById("main-header");

  window.addEventListener("scroll", function () {
    //est appellé à chaque fois que l'évènement scroll est enregistré
    if (window.scrollY > 0) {
      // si la page n'est pas tout en haut
      header.classList.add("scrolled"); // ajoute la class scrolled au header
    } else {
      header.classList.remove("scrolled"); // enlève la class scrolled au header
    }
  });
}
