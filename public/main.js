let colorIndex = 0;
let colors = ["#ffd8ef", "#ffe7cc", "#ddf2e2", "#e8f1fe", "#f4e1ff"];
let messages = [
  "Trove rocks!",
  "Trove rolls!",
  "Trove sucks!",
  "Trove means luxury.",
  "Trove has trillions of dollars.",
];
let spanElement = document.getElementById("trove-forever");
let imageElement = document.getElementById("draggableImage");
let bodyElement = document.body;
let navbarElement = document.getElementById("navbar");

imageElement.addEventListener("click", function () {
  spanElement.textContent = messages[colorIndex];
  bodyElement.style.backgroundColor = colors[colorIndex];
  navbarElement.style.backgroundColor = colors[colorIndex];

  colorIndex = (colorIndex + 1) % colors.length;
});

window.addEventListener("DOMContentLoaded", (event) => {
  var imageSources = [
    "img/Trinket_1.jpg",
    "img/Trinket_2.jpg",
    "img/Trinket_3.jpg",
  ];
  var currentImageIndex = 0;

  function changeImage() {
    document.querySelector(".carousel-img").src =
      imageSources[currentImageIndex];
  }

  document.querySelector(".left-btn").addEventListener("click", function () {
    if (currentImageIndex > 0) {
      currentImageIndex--;
    } else {
      currentImageIndex = imageSources.length - 1; // loop back to last image
    }
    changeImage();
  });

  document.querySelector(".right-btn").addEventListener("click", function () {
    if (currentImageIndex < imageSources.length - 1) {
      currentImageIndex++;
    } else {
      currentImageIndex = 0; // loop back to first image
    }
    changeImage();
  });

  changeImage(); // set the initial image
});
