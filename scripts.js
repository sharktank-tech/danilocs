// Seletor do botão de modo escuro
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Função para alternar o modo escuro
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Atualiza o texto do botão com base no modo
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Modo Claro';
    } else {
        darkModeToggle.textContent = 'Modo Escuro';
    }
});

// Carrossel de habilidades
const carousel = document.querySelector('.carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateCarousel() {
    const offset = -currentIndex * (items[0].clientWidth + 10); // 10 é a margem entre os itens
    carousel.style.transform = `translateX(${offset}px)`;
}

// Botão anterior
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
    updateCarousel();
});

// Botão próximo
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Carrossel de projetos
const projectCarousel = document.querySelector('.project-carousel');
const projectCards = document.querySelectorAll('.project-card');
let projectIndex = 0;

function updateProjectCarousel() {
    const projectOffset = -projectIndex * (projectCards[0].clientWidth + 10); // 10 é a margem entre os cards
    projectCarousel.style.transform = `translateX(${projectOffset}px)`;
}

// Lógica de navegação do carrossel de projetos
prevButton.addEventListener('click', () => {
    projectIndex = (projectIndex > 0) ? projectIndex - 1 : projectCards.length - 1;
    updateProjectCarousel();
});

nextButton.addEventListener('click', () => {
    projectIndex = (projectIndex < projectCards.length - 1) ? projectIndex + 1 : 0;
    updateProjectCarousel();
});