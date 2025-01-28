let formEmail= document.getElementById('contactForm');


    if (formEmail) {
        formEmail.addEventListener('submit', async (event) => {
            event.preventDefault();

            // Crear un objeto con los datos del formulario
            const formData = new FormData(formEmail);
    
            try {
                // Enviar los datos al servidor
                const response = await fetch('/helpers/envioCorreo.php', {
                    method: 'POST',
                    body: formData,
                });
    
                const result = await response.json();
    
                // Mostrar el mensaje de éxito o error
                responseMessage.style.display = 'block';
                responseMessage.textContent = result.message;
    
                if (result.success) {
                    responseMessage.style.color = 'green';
                    form.reset(); // Limpia el formulario después de enviarlo
                } else {
                    responseMessage.style.color = 'red';
                }
            } catch (error) {
                responseMessage.style.display = 'block';
                responseMessage.textContent = 'Ocurrió un error al enviar el correo.';
                responseMessage.style.color = 'red';
            }
        });
    } else {
        console.error("Formulario no encontrado");
    }
