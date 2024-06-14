const icon = document.querySelector('.menu');
const menuList = document.querySelector('.menu ul');

icon.addEventListener('click', function() {
  menuList.classList.toggle('active');
});
