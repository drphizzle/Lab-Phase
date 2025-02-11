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
// Contact form interaction

// Generate a random 6-character code
function generateCode() {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXZY0123456789";
    let code ="";
    for (let i = 0; i < 6; i++ ) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}

// Display the generated code in the input field
let codeInput = document.getElementById('generatedCode');
codeInput.value = generateCode();

// Form submission validation
document.getElementById('mainForm').addEventListener("submit", function(event) {
    let userCode = document.getElementById('userCode').value;
    if (userCode !== codeInput.value) {
        event.preventDefault();
        document.getElementById('message').innerText = "incorrect code. Please try again.";
    } else {
        alert ("Code is correct! Form submitted.")
    }
});