const d = document;

let carritoCompras = [];

const existeProducto = (nombre) => {
  if (carritoCompras.length) {
    return carritoCompras.some((p) => p.nombre === nombre);
  }

  return false;
};

const incrementar = (productName) => {
  // const producto = carritoCompras.find((p) => p.nombre === productName);
  // producto.cantidad++;
  carritoCompras = carritoCompras.map((p) => {
    if (p.nombre === productName) {
      p.cantidad = p.cantidad + 1;
    }
    return p;
  });
};

const decrementar = (productName) => {
  const producto = carritoCompras.find((p) => p.nombre === productName);
  producto.cantidad--;

  if (producto.cantidad === 0) {
    carritoCompras = carritoCompras.filter((p) => p.nombre !== productName);
  }

  pintarCarrito();
};

const agregarProducto = (card) => {
  const productName =
    card.previousElementSibling.previousElementSibling.textContent;

  if (existeProducto(productName)) {
    incrementar(productName);
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
    clone.querySelector(".increment").dataset.name = p.nombre;
    clone.querySelector(".decrement").dataset.name = p.nombre;
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
    cloneFooter.querySelector(".precioTotal").textContent = `$ ${precioTotal}`;
  }

  tfoot.innerHTML = "";
  tfoot.appendChild(cloneFooter);
};

d.addEventListener("click", ({ target }) => {
  if (target.matches(".btn-dark")) {
    agregarProducto(target);
  }

  if (target.matches(".empty")) {
    carritoCompras = [];
    pintarCarrito();
  }

  if (target.matches(".increment")) {
    incrementar(target.dataset.name);
    pintarCarrito();
  }

  if (target.matches(".decrement")) {
    decrementar(target.dataset.name);
    pintarCarrito();
  }
});
