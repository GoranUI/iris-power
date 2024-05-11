const openMenu = () => {
  document.getElementById('menu').classList.toggle('translate-x-full');
  document.querySelector('body').classList.add('overflow-y-hidden');
  document.getElementById('overlay').classList.remove('opacity-0');
  document.getElementById('overlay').classList.add('opacity-50');
};

const closeMenu = () => {
  document.getElementById('menu').classList.toggle('translate-x-full');
  document.querySelector('body').classList.remove('overflow-y-hidden');
  document.getElementById('overlay').classList.remove('opacity-50');
  document.getElementById('overlay').classList.add('opacity-0');
};

window.onload = () => {
  document.getElementById('menu-button').addEventListener('click', openMenu);
  document.getElementById('menu-button-close').addEventListener('click', closeMenu);
  document.querySelectorAll('#mobile-nav a').forEach((link) => link.addEventListener('click', closeMenu));
};