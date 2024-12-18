document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("form");
  const contenedorProductos = document.querySelector(".productos-contenedor");

  formulario.addEventListener("submit", (evento) => {
      evento.preventDefault(); // Evita que se recargue la página

      // Capturar los valores de los campos del formulario
      const nombre = document.querySelector("#nombre").value;
      const precio = parseFloat(document.querySelector("#precio").value).toFixed(2);
      const imagenInput = document.querySelector("#imagen");
      const imagen = imagenInput.files[0] ? URL.createObjectURL(imagenInput.files[0]) : "";

      if (!nombre || !precio || !imagen) {
          alert("Por favor, llena todos los campos correctamente.");
          return;
      }

      // Crear la tarjeta del producto
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("card");
      tarjeta.setAttribute("data-producto", "");

      tarjeta.innerHTML = `
          <img src="${imagen}" alt="${nombre}">
          <div class="card-container--info">
              <p>${nombre}</p>
              <div class="card-container--value">
                  <p>$ ${precio}</p>
                  <img src="imagenes/Bote basura.png" alt="Eliminar producto" class="btn-eliminar">
              </div>
          </div>
      `;

      // Agregar funcionalidad de eliminación
      tarjeta.querySelector(".btn-eliminar").addEventListener("click", () => {
          contenedorProductos.removeChild(tarjeta);
      });

      // Agregar la tarjeta al contenedor de productos
      contenedorProductos.appendChild(tarjeta);

      // Limpiar los campos del formulario
      formulario.reset();
  });

  // Agregar funcionalidad de eliminación a los productos existentes
  contenedorProductos.addEventListener("click", (evento) => {
      if (evento.target.classList.contains("btn-eliminar")) {
          const tarjeta = evento.target.closest(".card");
          contenedorProductos.removeChild(tarjeta);
      }
  });
});
