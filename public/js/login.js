const loginFormHandler = async (event) => {
    event.preventDefault();

    console.log("loginFormHandler");

    // Collect values from the login form
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    console.log(email);
    console.log(password);

    if (email && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the overview page
            console.log("Logged In!");
            document.location.replace('/homepage');
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const email = document.getElementById('email-signup').value.trim();
    const password = document.getElementById('password-signup').value.trim();

    if (email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
