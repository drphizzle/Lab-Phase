// adding click event to the menu-icon
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.ul-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle("active");
    
});




