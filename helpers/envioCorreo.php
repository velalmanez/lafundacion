<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
use Dotenv\Dotenv;

//autoload de composerr
require '../libs/vendor/autoload.php';

// Carga variables de entorno
$dotenv = Dotenv::createImmutable(__DIR__ . '/../');
$dotenv->load();

if($_POST){
    $remitente=$_POST['remitente'];
    $nombre=$_POST['nombre'];
    $apellido=$_POST['apellido'];
    $mensaje=$_POST['mensaje'];
}

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Configuracion del servidor
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                     
    $mail->isSMTP();                                           
    $mail->Host       = $_ENV['SMTP_HOST'];;                    
    $mail->SMTPAuth   = true;                                   
    $mail->Username   = $_ENV['SMTP_USERNAME'];                   
    $mail->Password   = $_ENV['SMTP_PASS'];                             
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            
    $mail->Port       = $_ENV['SMTP_PORT'];   
    
 

    //Recipients
    // Corrección: Usar un correo del dominio como remitente
    $mail->setFrom($_ENV['SMTP_EMAIL'],); 

    // Corrección: Permitir respuesta al usuario real
    $mail->addReplyTo($remitente, "$nombre $apellido"); 
    $mail->addAddress($_ENV['SMTP_EMAIL'], 'Fundacion Adrian Parra');

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Mensaje desde la Pagina Web';
    $mail->Body    = $mensaje;
    

    $mail->send();
    header("Location: ../index.php");
    echo"correo enviado";

} catch (Exception $e) {
    echo "Error en el envio: {$mail->ErrorInfo}";
}