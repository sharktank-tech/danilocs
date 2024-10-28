// Seletor do botão de modo escuro e carrosséis
const darkModeToggle = document.getElementById('dark-mode-toggle');
const carousel = document.querySelector('.carousel');
const projectCarousel = document.querySelector('.project-carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.carousel-item');
const projectCards = document.querySelectorAll('.project-card');

let currentIndex = 0;
let projectIndex = 0;

// Função para alternar o modo escuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Escuro';
}

// Função para atualizar o carrossel
function updateCarousel(carousel, index, items) {
    const offset = -index * (items[0].clientWidth + 10); // 10 é a margem entre os itens
    carousel.style.transform = `translateX(${offset}px)`;
}

// Evento para alternar o modo escuro
darkModeToggle.addEventListener('click', toggleDarkMode);

// Evento para navegação do carrossel de habilidades
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    updateCarousel(carousel, currentIndex, items);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateCarousel(carousel, currentIndex, items);
});

// Evento para navegação do carrossel de projetos
prevButton.addEventListener('click', () => {
    projectIndex = (projectIndex > 0) ? projectIndex - 1 : projectCards.length - 1;
    updateCarousel(projectCarousel, projectIndex, projectCards);
});

nextButton.addEventListener('click', () => {
    projectIndex = (projectIndex < projectCards.length - 1) ? projectIndex + 1 : 0;
    updateCarousel(projectCarousel, projectIndex, projectCards);
});
