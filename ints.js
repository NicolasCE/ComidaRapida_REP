function mostrarDetalles(nombre, precio) {
    alert(`Detalles del producto:\n\nProducto: ${nombre}\nPrecio: $${precio}`);
}

function toggleDetails(id) {
    const element = document.getElementById(id);
    element.classList.toggle('is-hidden');
}
