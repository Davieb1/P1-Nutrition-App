const loginBtn = document.getElementById('btnLogin');
const registerBtn = document.getElementById('btnRegister');

loginBtn.addEventListener('click', () => {
    const username = document.getElementById('txtLoginUser').value.trim();
    const password = document.getElementById('txtLoginPass').value.trim();

    if (username === '' || password === '') {
        alert('Please enter both username and password.');
        return;
    }

    const storedUser = localStorage.getItem('username');
    const storedPass = localStorage.getItem('password');

    if (username === storedUser && password === storedPass) {
        alert('Login successful! Redirecting to Calorie Counter...');
        window.location.href = 'calories.html';
    } else {
        alert('Invalid credentials.');
    }
});

registerBtn.addEventListener('click', () => {
    const username = document.getElementById('txtRegUser').value.trim();
    const password = document.getElementById('txtRegPass').value.trim();

    if (username === '' || password === '') {
        alert('Please fill out both fields.');
        return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registration successful! You can now log in.');
});