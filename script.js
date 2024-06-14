const icon = document.querySelector('.menu .icon');
const menuList = document.querySelector('.menu ul');

icon.addEventListener('click', function() {
  menuList.classList.toggle('active');
});
