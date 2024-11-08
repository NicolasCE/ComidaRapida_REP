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

function enviarPedido() {
    const nombre = document.getElementById("nombre").value;
    const fechaEntrega = document.getElementById("fechaEntrega").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const detallePedido = document.getElementById("detallePedido").value;

    if (!nombre || !fechaEntrega || !telefono || !direccion || !detallePedido) {
        Swal.fire({
            icon: 'warning',
            title: 'Datos incompletos',
            text: 'Por favor, complete todos los campos para continuar con el pedido.',
            confirmButtonText: 'Entendido'
        });
        return;
    }

    const fechaFormateada = new Date(fechaEntrega).toLocaleDateString("es-CL");
    const mensaje = `Hola, soy ${nombre}. Me gustaría hacer un pedido para el día ${fechaFormateada}.\n\n` +
                    `📞 Número de contacto: ${telefono}\n` +
                    `📍 Dirección de entrega: ${direccion}\n\n` +
                    `📝 Detalle del pedido:\n${detallePedido}`;

    const whatsappURL = `https://wa.me/+56973851366?text=${encodeURIComponent(mensaje)}`;

    Swal.fire({
        icon: 'success',
        title: '¡Pedido listo para enviar!',
        text: 'Serás redirigido a WhatsApp para completar tu pedido.',
        confirmButtonText: 'Enviar',
        showCancelButton: true,
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            window.open(whatsappURL, "_blank");
        } else if (result.isDismissed) {
            Swal.fire({
                icon: 'warning',
                title: '¿Seguro que deseas cancelar?',
                text: 'Si cancelas, se limpiarán los campos y se eliminará el pedido.',
                showCancelButton: true,
                confirmButtonText: 'Sí, cancelar',
                cancelButtonText: 'No, mantener'
            }).then((confirmResult) => {
                if (confirmResult.isConfirmed) {
                    // Limpiar los campos del formulario
                    document.getElementById("nombre").value = '';
                    document.getElementById("fechaEntrega").value = '';
                    document.getElementById("telefono").value = '';
                    document.getElementById("direccion").value = '';
                    document.getElementById("detallePedido").value = '';
                    Swal.fire('Campos limpiados', 'El pedido ha sido eliminado.', 'info');
                }
            });
        }
    });
}

/*carrusel*/
// JavaScript para mover el carrusel automáticamente
document.addEventListener('DOMContentLoaded', () => {
    const carouselTrack = document.querySelector('.carousel-track');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    let currentIndex = 0;
  
    function moveCarousel() {
      // Mueve el carrusel a la siguiente imagen
      currentIndex++;
      if (currentIndex >= totalItems) {
        currentIndex = 0; // Vuelve al inicio
      }
      const offset = -currentIndex * 100; // Desplazamiento en porcentaje
      carouselTrack.style.transform = `translateX(${offset}%)`; // Aplica el desplazamiento
    }
  
    // Configura el carrusel para que se mueva automáticamente cada 5 segundos
    setInterval(moveCarousel, 5000); // 5000 ms = 5 segundos
  });
  



/* 

function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput) return;

    // Añadir mensaje del usuario
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = userInput;
    document.getElementById("chat-content").appendChild(userMessage);

    // Respuesta del bot
    const botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");
    botMessage.textContent = getBotResponse(userInput);
    document.getElementById("chat-content").appendChild(botMessage);

    // Limpiar entrada de usuario
    document.getElementById("user-input").value = "";
}

function getBotResponse(message) {
    if (message.toLowerCase().includes("churrasco")) {
        return "El churrasco lleva carne de res, pan, tomate, lechuga y mayonesa.";
    } else if (message.toLowerCase().includes("completo")) {
        return "El completo lleva salchicha, pan, tomate, palta y mayonesa.";
    } else if (message.toLowerCase().includes("barros luco")) {
        return "El Barros Luco lleva carne de res y queso en pan.";
    } else {
        return "Lo siento, no tengo información sobre eso. Intenta preguntar sobre churrasco, completo o Barros Luco.";
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function toggleChatbot() {
    const chatbot = document.getElementById("chatbot");
    if (chatbot.style.display === "none") {
        chatbot.style.display = "flex"; // Mostrar el chatbot
        document.getElementById("chatbot-toggle").innerText = "Cerrar Chat"; // Cambiar texto del botón
    } else {
        chatbot.style.display = "none"; // Ocultar el chatbot
        document.getElementById("chatbot-toggle").innerText = "Abrir Chat"; // Cambiar texto del botón
    }
}
PRUEBA DE CHATBOX IA*/
