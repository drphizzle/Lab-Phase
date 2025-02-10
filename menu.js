// adding click event to the menu-icon
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.ul-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle("active");
    
});

// close menu after clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove("active");
    });

});
