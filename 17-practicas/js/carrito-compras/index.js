const d = document;

const carritoCompras = [];

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
    const producto = carritoCompras.find((p) => p.nombre === productName);
    producto.cantidad++;
  } else {
    const productPrice = Number(
      card.previousElementSibling.textContent.slice(2)
    );

    carritoCompras.push({
      nombre: productName,
      precio: productPrice,
      cantidad: 1,
    });
  }
};

d.addEventListener("click", (e) => {
  if (e.target.matches(".btn-dark")) {
    agregarProducto(e.target);
    console.log(carritoCompras);
  }
});
