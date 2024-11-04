function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if fields are empty
    if (email === '' || password === '') {
        alert('Please fill in both fields.');
        return false; // Prevent form submission
    }

    // Validate credentials
    if (email === 'admin' && password === 'admin') {
        window.location.href = 'interface.html';
        return false; // Prevent form submission
    } else {
        alert('Invalid credentials. Please try again.');
        return false; // Prevent form submission
    }
}