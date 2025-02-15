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
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXZYabcdefghijklmnopqrstuvwxyz0123456789";
    let code ="";
    // for (let i = 0; i < 6; i++ ) {
    //     code += characters.charAt(Math.floor(Math.random() * characters.length));
    // }
    // return code;

    for (let i = 0; i < 6; i++ ) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        let randomChar = characters.charAt(randomIndex);
        

        let randomColor = getRandomColor();

    code += `<span style="color: ${randomColor};">${randomChar}</span>`;
    }

    document.querySelector('.display').innerHTML = code;
    
};


// To display the code in multiple colors

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};


// Display the generated code in the span field
let codeInput = document.getElementById('generatedCode');
codeInput.value = generateCode();

// Form submission validation

    document.getElementById('mainForm').addEventListener("submit", function(event) {
    let userCode = document.getElementById('userCode').value;
    let codeInput = document.getElementById('generatedCode').textContent;
    

    if (userCode !== codeInput) {
        event.preventDefault();
        document.getElementById('message').innerText = "incorrect code. Please try again.";
    } else {
        alert ("Code is correct! Form submitted.")
    }
    
});



