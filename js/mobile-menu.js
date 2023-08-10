(() => {
  const menuLinks = document.querySelectorAll('.mob__menu .menu__link');
  const menu = document.querySelector('.mob__menu');

  function closeMenu() {
    if (!menu.classList.contains('is-hidden')) {
      menu.classList.add('is-hidden');
    }
  }

  // Закривати меню при натисканні на посилання в мобільному меню
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
})();
