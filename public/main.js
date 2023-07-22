let typewriter = document.getElementById('typewriter');
let typewriterText = typewriter.textContent;
let typewriterSpeed = 100;
let i = 0;

typewriter.textContent = '';

function typeWriter() {
    if (i < typewriterText.length) {
        typewriter.textContent += typewriterText.charAt(i);
        i++;
        setTimeout(typeWriter, typewriterSpeed);
    } else{
        typewriter.style.borderRight = 'none';
    }

}

typeWriter();

let img = document.getElementById('draggableImage');
let isDragging = false;
let offsetX, offsetY;
let placeholder;
let placeHolderPlaced = false;
img.addEventListener('mousedown', function(e) {
    isDragging = true;
    
    // Create a placeholder div and insert it before the original image.
    if(placeHolderPlaced === false){
    placeholder = document.createElement('div');
    placeholder.style.width = img.offsetWidth + 'px';
    placeholder.style.height = img.offsetHeight + 'px';
    img.parentNode.insertBefore(placeholder, img);
    placeHolderPlaced = true;
    }
    // Change the original image to absolute positioning.
    img.style.position = 'absolute';
    img.src = "img/logoInverse.png"
    document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';
    offsetX = e.clientX - img.getBoundingClientRect().left;
    offsetY = e.clientY - img.getBoundingClientRect().top;
    e.preventDefault();
});

document.addEventListener('mousemove', function(e) {
    if (isDragging) {
        img.style.left = (e.clientX - offsetX) + 'px';
        img.style.top = (e.clientY - offsetY) + 'px';
    }
});

document.addEventListener('mouseup', function() {
    isDragging = false;
    img.src = "img/logo.png"
    document.body.style.backgroundColor = 'white';
document.body.style.color = 'black';
});
