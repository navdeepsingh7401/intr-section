const navItems = document.querySelectorAll('.nav-item');
const navTriggers = document.querySelectorAll('.nav-trigger');

navTriggers.forEach((button) => {
  button.addEventListener('click', () => {
    const parent = button.closest('.nav-item');
    const isOpen = parent.classList.contains('open');

    navItems.forEach((item) => {
      if (item !== parent) {
        item.classList.remove('open');
        item.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
      }
    });

    parent.classList.toggle('open', !isOpen);
    button.setAttribute('aria-expanded', String(!isOpen));
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.nav-item')) {
    navItems.forEach((item) => {
      item.classList.remove('open');
      item.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
    });
  }
});

const mobileMenu = document.querySelector('.nav-wrap');
const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.close-menu');
const overlay = document.querySelector('.body-overlay');

function setMenuState(isOpen) {
  mobileMenu?.classList.toggle('open', isOpen);
  overlay?.classList.toggle('visible', isOpen);
  menuToggle?.setAttribute('aria-expanded', String(isOpen));
}

menuToggle?.addEventListener('click', () => {
  const isOpen = mobileMenu?.classList.contains('open');
  setMenuState(!isOpen);
});

menuClose?.addEventListener('click', () => setMenuState(false));
overlay?.addEventListener('click', () => setMenuState(false));

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) {
    setMenuState(false);
    navItems.forEach((item) => {
      item.classList.remove('open');
      item.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
    });
  }
});
