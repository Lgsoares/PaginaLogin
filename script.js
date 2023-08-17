const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const registerLink = document.getElementById('register-link');
const loginLink = document.getElementById('login-link');

registerLink.addEventListener('click', function(event) {
  event.preventDefault();
  loginForm.classList.remove('show-login');
  registerForm.classList.add('show-register');
});

loginLink.addEventListener('click', function(event) {
  event.preventDefault();
  loginForm.classList.add('show-login');
  registerForm.classList.remove('show-register');
});

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // Lógica de autenticação
});

registerForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const newUsername = document.getElementById('new-username').value;
  const newPassword = document.getElementById('new-password').value;
  // Lógica de cadastro
});

