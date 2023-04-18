const darkModeBtn = document.getElementById('dark-mode-btn');
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Check if dark mode is enabled in local storage
if (localStorage.getItem('darkModeEnabled')) {
 enableDarkMode();
}

// Toggle dark mode on button click
darkModeBtn.addEventListener('click', () => {
 if (localStorage.getItem('darkModeEnabled')) {
  localStorage.removeItem('darkModeEnabled');
 } else {
  localStorage.setItem('darkModeEnabled', true);
 }
 enableDarkMode();
});

// Enable or disable dark mode
function enableDarkMode() {
 document.body.classList.toggle('dark-mode');
}