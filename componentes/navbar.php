<nav class="navbar navbar-expand-lg bg-dark border-bottom border-body w-100" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand section-link" href="/index.php" data-pagina="/secciones/inicio.php"  onclick="onChangeSection('Inicio')"> 
                    <img src="/src/imagenes/logo_fundacion_white.webp" alt="logo_fundacion" id="logoNav" class="img-fluid" style="max-width: 100px;">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link section-link" aria-current="page" href="#" data-pagina="/secciones/inicio.php" onclick="onChangeSection('Inicio')">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link section-link" href="#" data-pagina="/secciones/about.php" onclick="onChangeSection('Conocenos')">Conocenos</a>
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