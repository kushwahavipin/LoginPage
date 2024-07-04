let usernameInput = document.querySelector('#name');
let passwordInput = document.querySelector('#password');
let form = document.querySelector('form');

let bar = document.querySelector('.inner_load');
let feedback = document.querySelector(".password-feedback");

passwordInput.addEventListener('input', () => {
    valPassword(passwordInput.value);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    usernameInput.value = "";
    passwordInput.value = "";
});

function valPassword(password) {
    if (password.length < 8) {
        bar.style.width = '20%';
        bar.style.backgroundColor = 'maroon';
        feedback.style.color = "red";
        feedback.textContent = 'Password must be at least 8 characters long.';
    } else if (!/[A-Z]/.test(password)) {
        bar.style.width = '40%';
        bar.style.backgroundColor = 'orange';
        feedback.style.color = "orange";
        feedback.textContent = 'Password must contain at least one uppercase letter.';
    } else if (!/[a-z]/.test(password)) {
        bar.style.width = '60%';
        bar.style.backgroundColor = 'yellow';
        feedback.style.color = "yellow";
        feedback.textContent = 'Password must contain at least one lowercase letter.';
    } else if (!/\d/.test(password)) {
        bar.style.width = '80%';
        bar.style.backgroundColor = 'lightgreen';
        feedback.style.color = "lightgreen";
        feedback.textContent = 'Password must contain at least one number.';
    } else {
        bar.style.width = '100%';
        bar.style.backgroundColor = 'green';
        feedback.style.color = "green";
        feedback.textContent = 'This is a strong password.';
    }
}