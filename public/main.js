
let colorIndex = 0;
let colors = ["#ffd8ef", "#ffe7cc", "#ddf2e2", "#e8f1fe", "#f4e1ff"];
let messages = ['Trove is Powerful!',"Trove is Kind!", "Trove becomes us all!", "Trove sees through me!", "Trove is funny, haha!"]
let spanElement = document.getElementById("trove-forever");
let imageElement = document.getElementById("draggableImage");
let bodyElement = document.body;
let navbarElement = document.getElementById("navbar");

imageElement.addEventListener("click", function() {
    spanElement.textContent = messages[colorIndex];
    bodyElement.style.backgroundColor = colors[colorIndex];
    navbarElement.style.backgroundColor = colors[colorIndex];
    
    colorIndex = (colorIndex + 1) % colors.length;
});
