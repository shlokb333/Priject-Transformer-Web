const registerForm = document.querySelector('form');
registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    localStorage.setItem(username, password);
    alert('Registration successful! Please login.');
    window.location.href = 'login.html';
});

