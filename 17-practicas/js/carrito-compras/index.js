const d = document;

let carritoCompras = [];

const existeProducto = (nombre) => {
  if (carritoCompras.length) {
    return carritoCompras.some((p) => p.nombre === nombre);
  }

  return false;
};

const agregarProducto = (card) => {
  const productName =
    card.previousElementSibling.previousElementSibling.textContent;

  if (existeProducto(productName)) {
    // const producto = carritoCompras.find((p) => p.nombre === productName);
    // producto.cantidad++;
    carritoCompras = carritoCompras.map((p) => {
      if (p.nombre === productName) {
        p.cantidad = p.cantidad + 1;
      }
      return p;
    });
  } else {
    const productPrice = Number(
      card.previousElementSibling.textContent.slice(2)
    );

    carritoCompras = [
      ...carritoCompras,
      {
        nombre: productName,
        precio: productPrice,
        cantidad: 1,
      },
    ];
  }

  pintarCarrito();
};

const pintarCarrito = () => {
  const templateBody = d.getElementById("templateBody").content,
    fragment = d.createDocumentFragment(),
    tbody = d.getElementById("tbody"),
    tfoot = d.getElementById("tfoot");

  carritoCompras.forEach((p, index) => {
    const clone = templateBody.cloneNode(true);
    clone.querySelector(".id").textContent = index + 1;
    clone.querySelector(".item").textContent = p.nombre;
    clone.querySelector(".cantidad").textContent = p.cantidad;
    clone.querySelector(".precio").textContent = p.precio;
    fragment.appendChild(clone);
  });

  tbody.innerHTML = "";
  tbody.appendChild(fragment);

  const templateFooter = carritoCompras.length
    ? d.getElementById("templateFooterTotal").content
    : d.getElementById("templateFooterEmpty").content;

  const cloneFooter = templateFooter.cloneNode(true);

  if (carritoCompras.length) {
    const cantidadTotal = carritoCompras.reduce(
      (sum, { cantidad }) => sum + cantidad,
      0
    );

    const precioTotal = carritoCompras.reduce(
      (sum, { precio, cantidad }) => sum + precio * cantidad,
      0
    );

    cloneFooter.querySelector(".cantidadTotal").textContent = cantidadTotal;
    cloneFooter.querySelector(".precioTotal").textContent = precioTotal;
  }

  tfoot.innerHTML = "";
  tfoot.appendChild(cloneFooter);
};

d.addEventListener("click", (e) => {
  if (e.target.matches(".btn-dark")) {
    agregarProducto(e.target);
  }

  if (e.target.matches(".empty")) {
    carritoCompras = [];
    pintarCarrito();
  }
});
