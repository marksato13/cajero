//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//Evento para mostrar y ocultar menú
function open_close_menu() {
  body.classList.toggle("body_move");
  side_menu.classList.toggle("menu__side_move");
}

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760) {
  body.classList.add("body_move");
  side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive(adaptable)

addEventListener("resize", function () {
  if (window.innerWidth > 760) {
    body.classList.remove("body_move");
    side_menu.classList.remove("menu__side_move");
  }

  if (window.innerWidth < 760) {
    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
  }
});

// ---------------------------


// Obtener elementos del DOM
const retiroButton = document.getElementById('retiroButton');
const comprobanteModal = document.getElementById('comprobanteModal');
const monedaModal = document.getElementById('monedaModal');
const montoModal = document.getElementById('montoModal');
const confirmacionModal = document.getElementById('confirmacionModal');

// Mostrar modal de comprobante al hacer clic en Retiro
retiroButton.addEventListener('click', () => {
  comprobanteModal.style.display = 'block';
});

// Acción cuando se selecciona Sí en el modal de comprobante
document.getElementById('siButton').addEventListener('click', () => {
  comprobanteModal.style.display = 'none';
  monedaModal.style.display = 'block';
});

// Acción cuando se selecciona No en el modal de comprobante
document.getElementById('noButton').addEventListener('click', () => {
  comprobanteModal.style.display = 'none';
  // Aquí podrías continuar con el siguiente paso o cerrar todo el proceso
});

// Acción cuando se confirma la selección de moneda
document.getElementById('monedaSelect').addEventListener('change', () => {
  monedaModal.style.display = 'none';
  montoModal.style.display = 'block';
});

// Acción cuando se confirma el monto ingresado
document.getElementById('confirmarMontoButton').addEventListener('click', () => {
  montoModal.style.display = 'none';
  confirmacionModal.style.display = 'block';
});

// Acción cuando se confirma el monto en el modal de confirmación
document.getElementById('correctoButton').addEventListener('click', () => {
  confirmacionModal.style.display = 'none';
  // Aquí podrías proceder con la transacción
});

// Acción cuando se selecciona Incorrecto en el modal de confirmación
document.getElementById('incorrectoButton').addEventListener('click', () => {
  confirmacionModal.style.display = 'none';
  montoModal.style.display = 'block';
});

// Acción cuando se hace clic fuera del modal para cerrarlo
window.addEventListener('click', (event) => {
  if (event.target == comprobanteModal || event.target == monedaModal || event.target == montoModal || event.target == confirmacionModal) {
    event.target.style.display = 'none';
  }
});


// Variable global para almacenar la cantidad retirada
let cantidadRetirada = 0;

// Función para actualizar el contenido del span con la cantidad retirada
function actualizarCantidadRetirada() {
  document.getElementById('cantidad-retirada').textContent = `Cantidad retirada: ${cantidadRetirada}`;
}

// Acción cuando se confirma el monto en el modal de confirmación
document.getElementById('correctoButton').addEventListener('click', () => {
  confirmacionModal.style.display = 'none';
  cantidadRetirada = parseInt(document.getElementById('montoInput').value); // Obtenemos el valor del input del monto y lo convertimos a número
  actualizarCantidadRetirada(); // Llamamos a la función para actualizar la cantidad retirada en el span
  
  // Datos adicionales
  const fechaRetiro = obtenerFechaActual(); // Obtener la fecha actual
  const correoElectronico = 'elias@pajin.com'; // Correo electrónico estático
  
  // Generar el HTML para el card
  const cardHTML = `
      <div class="card">
          <h2>Datos del Retiro</h2>
          <p><strong>Fecha de Retiro:</strong> ${fechaRetiro}</p>
          <p><strong>Correo Electrónico:</strong> ${correoElectronico}</p>
          <p><strong>Cantidad Retirada:</strong> $${cantidadRetirada.toFixed(2)}</p>
          <!-- Agrega más datos estáticos aquí -->
      </div>
  `;
  
  // Insertar el card en el contenedor
  cardContainer.innerHTML = cardHTML;
  
  // Aquí podrías proceder con la transacción
});

// Función para actualizar el contenido del span con la cantidad retirada y los datos del correo
function actualizarCantidadRetirada() {
  const spanCantidadRetirada = document.getElementById('cantidad-retirada');
  spanCantidadRetirada.innerHTML = `
    <p><strong>Cantidad retirada:</strong> ${cantidadRetirada.toFixed(2)}</p>
    <p><strong>Correo Electrónico:</strong> elias@pajin.com</p>
  `;
}


// ---------------------------------------------------


