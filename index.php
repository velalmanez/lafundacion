<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>

    <!-- favicon -->
    <link rel="shortcut icon" href="src/img/logo_fundacion_white.webp" type="image/x-icon">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Fuente de letra -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">

    <!-- hoja de estilos -->
    <link rel="stylesheet" href="src/css/main.css">
</head>
<body>

    <div class="backgroud"></div>

    <div class="content container-fliud">
        <!-- barra de navegacion -->
        <?php 
            include 'componentes/navbar.php'
        ?>

        <!-- contenedor central -->
        <div class="d-flex flex-column min-vh-100">
        <main class="flex-fill">
            <div id="main-container"  class="container"></div>
        </main>

        <!-- pie de pagina -->
        <?php
            include 'componentes/footer.php'
        ?>

        </div>
    </div>
     <!-- Bootstrap JS -->
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
     
     <!-- js principal de la app -->
     <script src="scripts/app.js"></script>
</body>
</html>

