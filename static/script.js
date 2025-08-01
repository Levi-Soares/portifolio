/* Menu mobile: Abrir e fechar barra lateral */
const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

menuMobile.addEventListener('click', () => {
  // Alterna a classe no body
  body.classList.toggle('menu-nav-active');

  // Alterna o ícone entre bi-list e bi-x
  if (menuMobile.classList.contains('bi-list')) {
    menuMobile.classList.replace('bi-list', 'bi-x');
  } else {
    menuMobile.classList.replace('bi-x', 'bi-list');
  }
});

/* Rolagem suave para âncoras */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Fecha o menu mobile se estiver aberto
    if (body.classList.contains('menu-nav-active')) {
      body.classList.remove('menu-nav-active');
      menuMobile.classList.replace('bi-x', 'bi-list');
    }

    // Rolagem suave
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

/*Fechar o menu quando selecionar algum topico e mudar o icone para list*/

const navItems = document.querySelectorAll('.nav-item');

navItem.forEach(item => {
  item.addEventListener("click", () => {
    if (body.classList.contains("menu-nav-active")) {
      body.classList.remove("menu-nav-active")
      menuMobile.classList.replace("bi-x", "bi-list");
    }
  })
})

// Animar todos os itens na tela que tiverem meu atributo data-anime

/* const items = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.10;

  items.forEach(element => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

animeScroll();
window.addEventListener("scroll", animeScroll); */

// Atualize seu JavaScript para:
function animeScroll() {
  const windowTop = window.scrollY + (window.innerHeight * 0.85);
  const elements = document.querySelectorAll('[data-anime]:not(.animated)');
  
  elements.forEach(element => {
    if (windowTop > element.offsetTop) {
      element.classList.add('animated');
    }
  });
}

// Inicialização
window.addEventListener('load', () => {
  animeScroll();
  setTimeout(animeScroll, 100); // Garante que elementos na viewport inicial sejam animados
});

window.addEventListener('scroll', animeScroll);
