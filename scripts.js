let slideIndex = [0, 0]; // Índice atual de cada slider
let slideId = ["slides1", "slides2"]; // IDs de cada container de slides

// Inicializa os sliders
function showSlides(n, sliderIndex) {
    let slides = document.getElementsByClassName(slideId[sliderIndex]);
    if (n >= slides.length) { slideIndex[sliderIndex] = 0; } 
    if (n < 0) { slideIndex[sliderIndex] = slides.length - 1; }
    
    // Esconde todas as imagens do slider
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Mostra a imagem ativa
    slides[slideIndex[sliderIndex]].style.display = "block";
}

// Movimenta os slides
function moveSlide(n, sliderIndex) {
    showSlides(slideIndex[sliderIndex] += n, sliderIndex);
}

// Inicia todos os sliders
window.onload = function() {
    for (let i = 0; i < slideId.length; i++) {
        showSlides(slideIndex[i], i);
    }
};
