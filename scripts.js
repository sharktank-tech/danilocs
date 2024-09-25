let slideIndex = [0, 0, 0]; // Índices separados para cada slider

function moveSlide(n, projectIndex) {
    const slidesContainer = document.querySelectorAll('.project')[projectIndex].querySelector('.slides');
    const totalSlides = slidesContainer.children.length;

    // Atualiza o índice do slide atual, garantindo que ele seja circular
    slideIndex[projectIndex] = (slideIndex[projectIndex] + n + totalSlides) % totalSlides;

    // Aplica a transformação de posição do container de slides
    slidesContainer.style.transform = `translateX(-${slideIndex[projectIndex] * 100}%)`;

    // Adiciona uma transição suave para o movimento dos slides
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
}