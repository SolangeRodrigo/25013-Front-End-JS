let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const totalElemento = document.getElementById("total");
  const contador = document.getElementById("contador");

  lista.innerHTML = "";
  carrito.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    lista.appendChild(li);
  });

  totalElemento.textContent = total;
  contador.textContent = carrito.length;

  // Actualizar barra flotante
  document.getElementById("cantidad-barra").textContent = carrito.length;
  document.getElementById("total-barra").textContent = total;
}

// Evento para mostrar el carrito desde el menú
document.getElementById("ver-carrito").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("carrito").classList.toggle("oculto");
});

// Evento para mostrar el carrito desde la barra
document.getElementById("mostrar-carrito").addEventListener("click", () => {
  const carritoElement = document.getElementById("carrito");
  carritoElement.classList.toggle("oculto");
  carritoElement.scrollIntoView({ behavior: "smooth" });
});
