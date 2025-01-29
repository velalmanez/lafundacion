<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto</title>
    <!-- hoja de estilos -->
    <link rel="stylesheet" href="src/css/secciones.css">
</head>
<body>
    <div class="container-fuid">
        <div class="row align-items-center">
            <div class="col d-flex justify-content-center">
                <h1>¡CONTACTANOS!</h1>
            </div>
        </div>
        <div class="row align-items-center">
            <form id="contactForm" action="helpers/envioCorreo.php" method="POST">
                <div class="mb-3">
                    <label for="remitente" class="form-label">Tu correo:</label>
                    <input type="email" class="form-control" id="remitente" name="remitente" required>
                </div>
                <div class="row g-2 mb-3">
                    <div class="col-md-6">
                        <label for="nombre" class="form-label">Nombre(s):</label>
                        <input type="text" class="form-control" id="nombre" name="nombre" required>
                    </div>
                    <div class="col-md-6">
                        <label for="apellido" class="form-label">Primer Apellido:</label>
                        <input type="text" class="form-control" id="apellido" name="apellido" required>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="mensaje" class="form-label">Mensaje:</label>
                    <textarea class="form-control" id="mensaje" name="mensaje" rows="4" required></textarea>
                </div>
                <div class="mb-3 text-center">
                    <button type="submit" class="btn btn-success w-100">Enviar</button>
                </div>                
            </form>

                <!-- Mensaje de respuesta -->
                <?php if (isset($_GET['success']) && $_GET['success'] == "true"): ?>
                    <p class="text-success text-center">Correo enviado con éxito.</p>
                <?php elseif (isset($_GET['success']) && $_GET['success'] == "false"): ?>
                    <p class="text-danger text-center">Error al enviar el correo.</p>
                <?php endif; ?>
        </div>
    </div>

</body>
</html>
