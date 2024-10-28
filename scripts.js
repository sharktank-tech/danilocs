// Alternar Modo Escuro
document.getElementById('dark-mode-toggle').onclick = function() {
    document.body.classList.toggle('dark-mode');
};

const carousel = document.getElementById('skills-carousel');
let position = 0;
const itemCount = carousel.children.length; // Total de itens
const itemWidth = 160; // Largura dos itens (ajuste conforme necessário)
const totalWidth = itemCount * itemWidth; // Largura total do carrossel

// Clona os elementos do carrossel para criar um efeito infinito
const cloneItems = () => {
    const items = Array.from(carousel.children);
    items.forEach(item => {
        const clone = item.cloneNode(true);
        carousel.appendChild(clone); // Adiciona os clones ao final
    });
};

// Inicializa o carrossel clonando os itens
cloneItems();
const clonedItemCount = carousel.children.length; // Conta após a clonagem
const clonedTotalWidth = clonedItemCount * itemWidth; // Largura total após clonagem

// Atualiza a posição do carrossel
function moveCarousel() {
    position -= itemWidth; // Move 160px para a esquerda
    if (position <= -clonedTotalWidth / 2) {
        position = -clonedTotalWidth / 4; // Move a posição para o meio da nova lista de itens
    }
    carousel.style.transform = `translateX(${position}px)`;
}

// Botões de Navegação
document.getElementById('prev').onclick = () => {
    position += itemWidth; // Move 160px para a direita
    if (position > 0) {
        position = -((clonedItemCount / 2) * itemWidth); // Se estiver no início, vai para a metade dos clones
    }
    carousel.style.transform = `translateX(${position}px)`;
};

document.getElementById('next').onclick = moveCarousel;

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
    e.preventDefault(); // Prevenir envio padrão do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    document.getElementById('notification').innerText = `Obrigado, ${name}! Você será contatado em ${email}.`;
    e.target.reset(); // Reinicia os campos do formulário
};
