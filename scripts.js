let slideIndex = [0, 0, 0]; // Índices separados para cada slider

function moveSlide(n, projectIndex) {
    const slidesContainer = document.querySelectorAll('.project')[projectIndex].querySelector('.slides');
    const totalSlides = slidesContainer.children.length;

    // Atualiza o índice do slide atual
    slideIndex[projectIndex] = (slideIndex[projectIndex] + n + totalSlides) % totalSlides;

    // Transforma a posição do container de slides
    slidesContainer.style.transform = `translateX(-${slideIndex[projectIndex] * 100}%)`;
    slidesContainer.style.transition = 'transform 0.5s ease'; // Adiciona uma transição suave
}