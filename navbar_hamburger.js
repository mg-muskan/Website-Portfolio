const hamburger = document.getElementById('hamburger');
const navI = document.getElementById('nav-items');

hamburger.addEventListener('click', () => {
  navI.classList.toggle('show');
});