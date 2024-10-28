document.getElementById('dark-mode-toggle').onclick = function() {
    document.body.classList.toggle('dark-mode');
};

const carousel = document.getElementById('skills-carousel');
let position = 0;

// Clona os elementos do carrossel para criar um efeito infinito
const cloneItems = () => {
    const items = Array.from(carousel.children);
    items.forEach(item => {
        const clone = item.cloneNode(true);
        carousel.appendChild(clone); // Adiciona os clones ao final
    });
};

cloneItems(); // Clona os itens ao iniciar

// Atualiza a posição do carrossel
function moveCarousel() {
    position -= 100; // Move 100% para a esquerda
    if (position <= -((carousel.children.length / 2) * 100)) {
        position = 0; // Reinicia a posição
    }
    carousel.style.transform = `translateX(${position}%)`;
}

// Move o carrossel a cada 3 segundos
setInterval(moveCarousel, 3000);

// Função para movimento click+arrasta
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return; // Se não estiver pressionado, não faz nada
    e.preventDefault(); // Previne o comportamento padrão
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // O número 2 ajusta a sensibilidade
    carousel.scrollLeft = scrollLeft - walk;
});

// Form Submission
document.getElementById('contact-form').onsubmit = function(e) {
    e.preventDefault(); // Prevent default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    document.getElementById('notification').innerText = `Obrigado, ${name}! Você será contatado em ${email}.`;
    e.target.reset(); // Reset form fields
};