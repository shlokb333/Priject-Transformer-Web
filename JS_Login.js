const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedPassword = localStorage.getItem(username);
    if (password === storedPassword) {
        alert('Login successful!');
        window.location.href = 'HTML_Index.html';
    } else {
        alert('Username or password is incorrect. Please try again.');
    }
});
