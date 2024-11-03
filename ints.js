function mostrarDetalles(nombre, precio) {
    alert(`Detalles del producto:\n\nProducto: ${nombre}\nPrecio: $${precio}`);
}

function toggleDetails(id) {
    const element = document.getElementById(id);
    if (element.classList.contains('is-hidden')) {
        element.classList.remove('is-hidden');
        element.classList.add('animate__animated', 'animate__fadeIn'); // Agregar animación al mostrar
    } else {
        element.classList.add('animate__animated', 'animate__fadeOut'); // Agregar animación al ocultar
        element.addEventListener('animationend', () => {
            element.classList.add('is-hidden');
            element.classList.remove('animate__animated', 'animate__fadeOut');
        }, { once: true });
    }
}

function enviarReserva() {
    // Obtener los valores ingresados
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const fechaHora = document.getElementById("fechaHora").value;
    const esp_pedido = document.getElementById("esp_pedido").value;

    // Validar que todos los campos estén llenos
    if (!nombre || !telefono || !direccion || !fechaHora || !esp_pedido) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Formatear el mensaje para WhatsApp
    const mensaje = `Hola, soy ${nombre}. Me gustaría un pedido para el dia ${fechaHora}. Mi número de contacto es ${telefono} y la dirección de entrega es ${direccion} || Mi detalle del pedido es el siguiente: ${esp_pedido}.`;

    // Codificar el mensaje para la URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // URL de WhatsApp (incluye el número de contacto del restaurante)
    const numeroRestaurante = "973851366"; // Reemplaza con el número del restaurante
    const url = `https://wa.me/${numeroRestaurante}?text=${mensajeCodificado}`;

    // Redirigir a WhatsApp
    window.open(url, "_blank");
}


