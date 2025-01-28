<?php
   require '../vendor/autoload.php'; // Autoload de PHPMailer

   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;
   use Dotenv\Dotenv;
   
   // Carga las variables de entorno
    $dotenv = Dotenv::createImmutable(__DIR__ . '../.env');
    $dotenv->load();

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        //datos del formulario
        $remitente = $_POST['remitente'];
        $nombre = $_POST['nombre'];
        $apellido = $_POST['apellido'];
        $mensaje = $_POST['mensaje'];

        if (empty($remitente) || empty($nombre) || empty($apellido) || empty($mensaje)) {
            echo json_encode(['success' => false, 'message' => 'Todos los campos son obligatorios.']);
            exit;
        }

        // ConfiguraCION PHPMailer
        $mail = new PHPMailer(true);
        try {
            // Configuración del servidor
            $mail->SMTPDebug = SMTP::DEBUG_SERVER; // Comenta esto en producción
            $mail->isSMTP();
            $mail->Host = $_ENV['SMP_HOST']; 
            $mail->SMTPAuth = true;
            $mail->Username = $_ENV['SMTP_USERNAME'];
            $mail->Password = $_ENV['SMTP_PASSWORD'];
            $mail->SMTPSecure = ;
            $mail->Port = $_ENV['SMP_PORT'];

            // Configuración del correo
            $mail->setFrom($remitente, $nombre . ' ' . $apellido);
            $mail->addAddress($_ENV['FOR_EMAIL'], 'Ivan Velazquez');
            $mail->isHTML(false);
            $mail->Subject = "Nuevo mensaje de la web, del contacto: $nombre $apellido";
            $mail->Body = "Nombre: $nombre\n" .
            "Apellido: $apellido\n" .
            "Correo: $remitente\n\n" .
            "Mensaje:\n$mensaje";


            // Enviar el correo
            $mail->send();
            echo json_encode(['success' => true, 'message' => 'Correo enviado con éxito.']);
        } catch (Exception $e) {
            echo json_encode(['success' => false, 'message' => 'Error al enviar el correo: ' . $mail->ErrorInfo]);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Método no permitido.']);
    }
?>