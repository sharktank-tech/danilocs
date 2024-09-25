let slideIndex = [0, 0, 0]; // Índices separados para cada slider

function moveSlide(n, projectIndex) {
    const slidesContainers = document.querySelectorAll('.slider-container'); // Seleciona todos os contêineres de slides
    const slidesContainer = slidesContainers[projectIndex].querySelector('.slides'); // Seleciona o contêiner específico do projeto
    const totalSlides = slidesContainer.children.length;

    // Atualiza o índice do slide atual, garantindo que ele seja circular
    slideIndex[projectIndex] = (slideIndex[projectIndex] + n + totalSlides) % totalSlides;

    // Aplica a transformação de posição do container de slides
    slidesContainer.style.transform = `translateX(-${slideIndex[projectIndex] * 100}%)`;
}

// Garante que a transição seja sempre suave para todos os containers de slides
document.querySelectorAll('.slides').forEach(slidesContainer => {
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
});

// Para garantir que o primeiro slide seja visível no início
document.querySelectorAll('.slides').forEach((slidesContainer, index) => {
    slidesContainer.style.transform = `translateX(-${slideIndex[index] * 100}%)`;
});