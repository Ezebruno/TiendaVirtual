function buscarProductosCategoria(categoria) {
    const input = document.getElementById(`buscador-${categoria}`);
    const filtro = input.value.toLowerCase();
    const productos = document.querySelectorAll(`#productos-${categoria} .producto`);
    let encontrado = false;

    productos.forEach(producto => {
        const nombre = producto.dataset.nombre.toLowerCase();
        if (nombre.includes(filtro)) {
            producto.style.display = "";
            encontrado = true;
        } else {
            producto.style.display = "none";
        }
    });

    const mensaje = document.getElementById(`mensaje-${categoria}`);
    if (encontrado) {
        mensaje.style.display = "none";
    } else {
        mensaje.style.display = "block";
    }
}

function irAPago(producto, precio) {
    const url = `pago.html?producto=${encodeURIComponent(producto)}&precio=${encodeURIComponent(precio)}`;
    window.location.href = url;
}
