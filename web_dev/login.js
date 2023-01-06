const form = document.getElementById('login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === '' || password === '') {
    alert('Username and password are required');
  } else if (username === 'admin' && password === 'password') {
    alert('Logged in successfully!');
  } else {
    alert('Incorrect username or password');
  }
});
