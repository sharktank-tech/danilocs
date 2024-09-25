let slideIndex = [0, 0, 0]; // Índices separados para cada slider

function moveSlide(n, projectIndex) {
    const slidesContainers = document.querySelectorAll('.slider-container'); // Seleciona todos os contêineres de slides
    const slidesContainer = slidesContainers[projectIndex].querySelector('.slides'); // Seleciona o contêiner específico do projeto
    const totalSlides = slidesContainer.children.length;

    // Atualiza o índice do slide atual, garantindo que ele seja circular
    slideIndex[projectIndex] = (slideIndex[projectIndex] + n + totalSlides) % totalSlides;

    // Esconde todas as imagens e mostra apenas a imagem ativa
    for (let i = 0; i < totalSlides; i++) {
        slidesContainer.children[i].classList.remove('active');
    }
    slidesContainer.children[slideIndex[projectIndex]].classList.add('active');
}

// Garante que a transição seja sempre suave para todos os containers de slides
document.querySelectorAll('.slides').forEach(slidesContainer => {
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
});

// Para garantir que a primeira imagem seja visível no início
document.querySelectorAll('.slides').forEach((slidesContainer, index) => {
    slidesContainer.children[0].classList.add('active');
});