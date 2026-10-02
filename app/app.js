const VALID_EMAIL = 'demo@example.com';
const VALID_PASSWORD = 'Password123';
const NETWORK_DELAY_MS = 800;

const loginView = document.getElementById('loginView');
const homeView = document.getElementById('homeView');
const emailInput = document.getElementById('form-login-email');
const passwordInput = document.getElementById('form-login-password');
const loginError = document.getElementById('login-error');
const menuButton = document.getElementById('profileMenuButton');
const dropdown = document.getElementById('profileMenuDropdown');
const panelTitle = document.getElementById('panelTitle');

if (!location.hash) {
  location.hash = '#/auth/login';
}

document.getElementById('login-submit').addEventListener('click', (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  setTimeout(() => {
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      loginError.hidden = true;
      loginView.hidden = true;
      homeView.hidden = false;
      location.hash = '#/home';
    } else {
      loginError.hidden = false;
      location.hash = '#/auth/login?error=401';
    }
  }, NETWORK_DELAY_MS);
});

menuButton.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdown.hidden = !dropdown.hidden;
});

document.addEventListener('click', (e) => {
  if (!dropdown.hidden && !dropdown.contains(e.target) && e.target !== menuButton) {
    dropdown.hidden = true;
  }
});

dropdown.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    location.hash = link.getAttribute('href').slice(1);
    panelTitle.textContent = link.textContent;
    dropdown.hidden = true;
  });
});
