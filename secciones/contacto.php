<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto</title>

    <!-- hoja de estilos -->
    <link rel="stylesheet" href="/src/css/secciones.css">
</head>
<body>
    <div class="container-fuid">
        <div class="row align-items-center">
            <div class="col d-flex justify-content-center">
                <h1>¡CONTACTANOS!</h1>
            </div>
        </div>
        <div class="row">

        <?php
            // se usa el requiere para si psi se necesita el archivo conexion
            require "../config/conexion.php";
            mysqli_set_charset($conexion,'utf8');

            //genear el query
            $consulta_sql="SELECT nombre, email FROM sis_atletas";

            //mandar el query por medio de la conexion y almacenaremos el resultado en una variable
            $resultado = $conexion->query($consulta_sql);

            // Retorna el numero de filas del resultado. Si encuentra mas de uno lo usamos para imprimir el resultado en nuestra tabla
            $count = mysqli_num_rows($resultado); 
            if ( $count>0 ){
                //aqui se pintarian los registro de la DB
                while( $row = mysqli_fetch_assoc($resultado)  ){
                    
                 echo " <div class='col-12 col-sm-6 col-md-4 d-flex justify-content-center w-40'>";
                    echo " <div class='card mt-3' style='width: 25rem;'>";
                        echo"<img src='/src/imagenes/logo_fundacion_black.webp' class='car-img-top img-fluid w-70 h-70' alt='...'>";
                        echo"<div class='card-body text-center'>";
                            echo" <p class='card-title'>". $row['nombre'] ."</p>";
                            echo"<p class='card-text'>". $row['email'] ."</p>";
                        echo"</div>";
                        echo"<div class='card-body d-flex justify-content-center'>";
                            echo"<a href='#' class='btn btn-success mt-3'><i class='bi bi-envelope'></i>  Enviar Correo</a>";
                        echo"</div>";
                    echo "</div>"; 
                echo "</div>"; 
                }
            }
            else
            {  
                echo"<h1>SIN NINGUN REGISTRO</h1>";
            }
            ?>
        </div>
    </div>
</body>
