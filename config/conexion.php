<?php
    $host_db = "localhost:3306";
    $user_db = "root";
    $pass_db = "123456";
    $db_name = "bd_lafundacion";

    $conexion = new mysqli($host_db, $user_db, $pass_db, $db_name);

    if ($conexion->connect_error) {
    die("La conexion falló: " . $conexion->connect_error);
    }
?>

