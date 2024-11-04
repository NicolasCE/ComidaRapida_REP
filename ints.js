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
    const fechaEntrega = new Date(document.getElementById("fechaEntrega").value);
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const detallePedido = document.getElementById("detallePedido").value;

    // Formato de fecha en DD/MM/YYYY
    const fechaFormateada = fechaEntrega.toLocaleDateString("es-CL");

    // Mensaje estructurado
    const mensaje = `Hola, soy ${nombre}. Me gustaría hacer un pedido para el día ${fechaFormateada}.\n\n` +
                    `📞 Número de contacto: ${telefono}\n` +
                    `📍 Dirección de entrega: ${direccion}\n\n` +
                    `📝 Detalle del pedido:\n${detallePedido}`;

    const whatsappURL = `https://wa.me/+56973851366?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappURL, "_blank");
}


/*PRUEBA DE CHATBOX IA*/ 

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




