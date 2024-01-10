document.addEventListener("DOMContentLoaded", function () {
  // est appellé quand la page est chargé
  // Liste des images
  const backgroundImages = [
    "images/badminton.jpg",
    "images/basket.jpg",
    "images/foot.jpg",
    "images/hand.jpg",
    "images/tennis.jpg",
    "images/rugby.jpeg",
  ];

  let currentImageIndex = 0;

  function changeBackgroundImage() {
    const backgroundContainer = document.getElementById("background-container");
    const nextImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    const nextImage = backgroundImages[nextImageIndex];

    backgroundContainer.style.opacity = 0.7; // Disparait
    setTimeout(function () {
      backgroundContainer.style.backgroundImage = `url('${nextImage}')`;
      backgroundContainer.style.opacity = 1; // Apparait
      currentImageIndex = nextImageIndex;
    }, 500); //Le delais sert à attendre que l'animation soit faite
  }

  // Appelle la fonction changeBackground toute les 15 secondes
  setInterval(changeBackgroundImage, 15000);
});
