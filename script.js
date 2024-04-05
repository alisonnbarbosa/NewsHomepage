const navbar = document.querySelector(".navbar");

document.querySelector(".menu").addEventListener('click', ()=> navbar.style.transform = 'translateX(0)');
document.querySelector(".menu-close").addEventListener('click', ()=> navbar.style.transform = 'translateX(100%)')