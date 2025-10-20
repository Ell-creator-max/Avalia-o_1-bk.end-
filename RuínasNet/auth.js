document.addEventListener('DOMContentLoaded', () => {

    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];

            const existingUser = users.find(user => user.email === email);
            if (existingUser) {
                alert('Este email já está cadastrado. Por favor, tente outro.');
                return; 
            }

            users.push({ name, email, password });

            localStorage.setItem('users', JSON.stringify(users));

            alert('Registro realizado com sucesso! Agora você pode fazer login.');
            window.location.href = 'login.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const users = JSON.parse(localStorage.getItem('users')) || [];

            const validUser = users.find(user => user.email === email && user.password === password);

            
            if (validUser) {
                alert(`Bem-vindo(a) de volta, ${validUser.name}!`);
                
                sessionStorage.setItem('loggedInUser', validUser.name); 
                
                window.location.href = 'comunidade.html'; 
            } else {
                alert('Email ou senha incorretos. Tente novamente.');
            }
        });
    }


});