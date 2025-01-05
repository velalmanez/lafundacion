<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>

    <!-- favicon -->
    <link rel="shortcut icon" href="/src/imagenes/logo_fundacion_black.png" type="image/x-icon">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Fuente de letra -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">

    <!-- hoja de estilos -->
    <link rel="stylesheet" href="/src/css/main.css">
</head>
<body>

    <!-- barra de navegacion -->
    <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand section-link" href="/index.php" data-pagina="/secciones/inicio.php"  onclick="onChangeSection('Inicio')"> 
                <img src="/src/imagenes/logo_fundacion_white.png" alt="logo_fundacion" id="logoNav" class="img-fluid" style="max-width: 100px;">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link section-link" aria-current="page" href="#" data-pagina="/secciones/inicio.php" onclick="onChangeSection('Inicio')">Inicio</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Laboratorios
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="nav-link section-link" href="#" data-pagina="/secciones/lab_cdmx.php" onclick="onChangeSection('Lab-CDMX')">CDMX</a></li>
                            <li><a class="nav-link section-link" href="#" data-pagina="/secciones/lab_iguala.php" onclick="onChangeSection('Lab-Iguala')">IGUALA</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link section-link" href="#" data-pagina="/secciones/contacto.php" onclick="onChangeSection('Contacto')">Contacto</a>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>


    <!-- contenedor central -->
    <div id="main-container" class="container text-center"></div>


    <!-- pie de pagina -->
    <footer class="bg-dark text-light text-center py-3 mt-4">
        <div class="container-fluid">
            <p class="mb-0">E PLVRIBVS VNVM</p>
            <p class="mb-0">&copy; 2025 Fundación Adrián Parra. Todos los derechos reservados.</p>
            <p>
            <a href="https://facebook.com" target="_blank" class="text-light me-3">Facebook</a>
            <a href="https://twitter.com" target="_blank" class="text-light me-3">Twitter</a>
            <a href="https://instagram.com" target="_blank" class="text-light">Instagram</a>
            </p>
        </div>
    </footer>

     <!-- Bootstrap JS -->
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
     
     <!-- js principal de la app -->
     <script src="/scripts/app.js"></script>
</body>
</html>

