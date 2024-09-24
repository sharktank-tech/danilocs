let slideIndex = [0, 0, 0]; // Índices separados para cada slider

function moveSlide(n, projectIndex) {
    let slides = document.querySelectorAll('.project')[projectIndex].querySelector('.slides');
    let totalSlides = slides.children.length;
    
    slideIndex[projectIndex] += n;

    if (slideIndex[projectIndex] >= totalSlides) {
        slideIndex[projectIndex] = 0; // Volta ao primeiro slide
    }

    if (slideIndex[projectIndex] < 0) {
        slideIndex[projectIndex] = totalSlides - 1; // Vai ao último slide
    }

    slides.style.transform = `translateX(-${slideIndex[projectIndex] * 100}%)`;
}