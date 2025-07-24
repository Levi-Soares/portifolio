/*Menu mobile: Abrir e fechar barra lateral*/

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
