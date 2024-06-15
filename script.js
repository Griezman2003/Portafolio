
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.menu-button');
  const menuList = document.querySelector('.menu');

  menuButton.addEventListener('click', function() {
      menuList.classList.toggle('show');
  });

  // Opcional: Cerrar el menú al hacer clic fuera de él
  document.addEventListener('click', function(event) {
      if (!menuButton.contains(event.target) && !menuList.contains(event.target)) {
          menuList.classList.remove('show');
      }
  });
});
