const refs = {
  body: document.querySelector('body'),
  mobileMenu: document.querySelector('.js-menu-container'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  closeMenuBtn: document.querySelector('.js-close-menu'),
  navList: document.querySelector('.js-nav-list'),
};
const mediaQuery = window.matchMedia('(min-width: 768px)');

refs.openMenuBtn.addEventListener('click', handlerOpenMenu);
refs.closeMenuBtn.addEventListener('click', handlerCloseMenu);

function handlerOpenMenu() {
  refs.mobileMenu.classList.add('is-open');
  refs.body.classList.add('open-mobile-menu');
  refs.openMenuBtn.setAttribute('aria-expanded', 'true');

  refs.navList.addEventListener('click', handlerCloseMenuByClickLink);
  // Close the mobile menu on wider screens if the device orientation changes
  mediaQuery.addEventListener('change', handlerBreakpointChange);
}

function handlerCloseMenu() {
  refs.mobileMenu.classList.remove('is-open');
  refs.body.classList.remove('open-mobile-menu');
  refs.openMenuBtn.setAttribute('aria-expanded', 'false');

  refs.navList.removeEventListener('click', handlerCloseMenuByClickLink);
  mediaQuery.removeEventListener('change', handlerBreakpointChange);
}

function handlerCloseMenuByClickLink(evt) {
  if (evt.target.classList.contains('js-menu-link')) {
    handlerCloseMenu();
  }
}

function handlerBreakpointChange(evt) {
  if (evt.matches) {
    handlerCloseMenu();
  }
}
