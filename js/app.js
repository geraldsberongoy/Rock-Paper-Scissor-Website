function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if fields are empty
    if (username === '' || password === '') {
        alert('Please fill in both fields.');
        return false; // Prevent form submission
    }

    // Validate credentials
    if (username === 'admin' && password === 'admin') {
        window.location.href = 'interface.html';
        return false; // Prevent form submission
    } else {
        alert('Invalid credentials. Please try again.');
        return false; // Prevent form submission
    }
}