
// Selecciona el botón y el header con clase "headers"
const button = document.getElementById('button_login');
const header = document.querySelector('.headers'); // Seleccionamos usando la clase

// Cambia el fondo del header cuando el mouse está sobre el botón
button.addEventListener('mouseover', function() {
  header.style.backgroundColor = '#3CC7D6'; // Cambia a color turquesa vivo
});

// Restaura el fondo original cuando el mouse sale del botón
button.addEventListener('mouseout', function() {
  header.style.backgroundColor = '#0A117A'; // Azul profundo original
});
