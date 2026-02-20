import { desafios } from "./desafios.js";
import { projetos } from "./projetos.js";

// Selecionar elementos do DOM
const navigation = document.querySelector("#navigation");
const backToTopButton = document.querySelector("#backToTopButton");
const toggle = document.querySelector("#sw-checkbox");
const projectsSection = document.querySelector("#projects .wrapper");

const notebook_1 = document.querySelector("#notebook-1");
const notebook_2 = document.querySelector("#notebook-2");
const notebook_2_white = document.querySelector("#notebook-2-white");
const vidro = document.querySelector("#vidro");

window.addEventListener("load", function begin() {
  if (projectsSection) {
    projetos(projectsSection);
  }
  
  const desafioBtn = document.querySelector("#desafio");
  if (desafioBtn) {
    desafioBtn.addEventListener("click", () => {
      desafios(projectsSection);
      const backToProjectsBtn = document.querySelector("#backToProjectsBtn");
      if (backToProjectsBtn) {
        backToProjectsBtn.addEventListener("click", begin);
      }
    });
  }
});

// Script para area de Conheimentos
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".knowledge-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    document.querySelector(".filter-btn.active").classList.remove("active");
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    cards.forEach(card => {
      if (filter === "all") {
        card.style.display = "block";
      } else {
        if (card.classList.contains(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      }
    });

  });
});


// Eventos de scroll
window.addEventListener("scroll", onScroll);
onScroll(); // Chamada inicial para configurar corretamente a navegação e o botão de voltar ao topo

// Configuração para esconder os notebooks após um tempo
window.addEventListener("load", () => {
  setTimeout(() => {
    if (notebook_1) notebook_1.style.opacity = 0;
    if (notebook_1) notebook_1.style.animation = "none";
    if (notebook_2) notebook_2.style.animation = "none";
    if (notebook_2_white) notebook_2_white.style.animation = "none";
    if (vidro) vidro.style.animation = "none";
  }, 4000);
});

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();

  const about = document.querySelector("#about");
  const projects = document.querySelector("#projects");
  const knowledge = document.querySelector("#knowledge");
  const contact = document.querySelector("#contact");

  if (about) activateMenuAtCurrentSection(about);
  if (projects) activateMenuAtCurrentSection(projects);
  if (knowledge) activateMenuAtCurrentSection(knowledge);
  if (contact) activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;
  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*="${sectionId}"]`);

  if (menuElement) {
    menuElement.classList.remove("active");

    if (sectionBoundaries) {
      menuElement.classList.add("active");
    }
  }
}

function showNavOnScroll() {
  if (scrollY > 0 && navigation) {
    navigation.classList.add("scroll");
  } else if (navigation) {
    navigation.classList.remove("scroll");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550 && backToTopButton) {
    backToTopButton.classList.add("show");
  } else if (backToTopButton) {
    backToTopButton.classList.remove("show");
  }
}

// Funções para abrir e fechar o menu
openMenu();
function openMenu() {
  const openBtns = document.querySelectorAll(".open");
  openBtns.forEach((e) => {
    e.addEventListener("click", () => {
      document.body.classList.add("menu-expanded");
    });
  });
}

closeMenu();
function closeMenu() {
  const closeBtns = document.querySelectorAll(".close");
  closeBtns.forEach((e) => {
    e.addEventListener("click", () => {
      document.body.classList.remove("menu-expanded");
    });
  });
}

// ScrollReveal para animações
ScrollReveal({
  origin: "bottom",
  distance: "50px",
  duration: 1000,
}).reveal(
  `#home, 
  #home img, 
  #about, 
  #about header, 
  #about p,
  #about img,
  #projects,
  #projects header,
  #projects .card,
  #knowledge,
  #knowledge header,
  #knowledge .card,
  #contact,
  #contact header`
);

// Alternar entre modos claro e escuro
if (toggle) {
  toggle.addEventListener("change", () => {
    document.body.classList.toggle("light-mode");
  });
} 
