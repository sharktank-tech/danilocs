document.getElementById('dark-mode-toggle').onclick = function() {
    document.body.classList.toggle('dark-mode');
};

const carousel = document.getElementById('skills-carousel');
let position = 0;

function moveCarousel() {
    position -= 100; // move 100% to the left
    if (position < -((carousel.children.length - 1) * 100)) {
        position = 0; // reset position
    }
    carousel.style.transform = `translateX(${position}%)`;
}

setInterval(moveCarousel, 3000); // Move every 3 seconds

// Form Submission
document.getElementById('contact-form').onsubmit = function(e) {
    e.preventDefault(); // Prevent default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    document.getElementById('notification').innerText = `Obrigado, ${name}! Você será contatado em ${email}.`;
    e.target.reset(); // Reset form fields
};
