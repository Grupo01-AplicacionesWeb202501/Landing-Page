//Efecto fade-in
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');
});

// Ocultar o desaparecer boton de registro en menu hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const registerBtn = document.getElementById('register-btn');


menuToggle.addEventListener('change', function() {
  if (menuToggle.checked) {
    // Si el menú hamburguesa está activado, ocultar el botón de registro
    registerBtn.style.display = 'none';
  } else {
    // Si el menú hamburguesa no está activado, mostrar el botón de registro
    registerBtn.style.display = 'block';
  }
});

// Menu hamburguesa
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-active");  // Añade o quita la clase que mueve las opciones
});

