<?php
require_once('../PHPMailer-master/PHPMailerAutoload.php');

function envia_email($nombre, $email, $telefono, $comentario, $fecha){

$body ="
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<div style=\"width: 40%;\">
<img src=\"http://1erdirectorioescolar.com/imagenes/directorio-escolar-cancun.png\">
<hr>
</div>
<div  style=\"width: 40%;\">
<h4 style=\"background-color: orange; color:white; padding:5px;\">Te han contactado mediante tu anuncio en el <b>1erdirectorioescolar.com</b></h4>
<p>
	Datos del contactante
	<br>
	<b>Nombre: </b> ".$nombre."
	<br>
	<b>Correo Eléctronico:</b> <a href=\"mailto:".$email."\"> ".$email."</a>
	<br>
	<b>Número Telefonico:</b> <a href=\"tel:".$telefono."\"> ".$telefono."</a>
	<br>
	
	<b>Comentario:</b> ".$comentario."
	<br>
	<br>
	Puedes responder este correo eléctronico, será enviado al contactante.
	<br>
	Fecha de registro: ".$fecha."

<hr>
</p>
<p>Te invitamos a visitar nuestro sitio web <a href=\"http://1erdirectorioescolar.com\" target=\"_blank\">1erdirectorioescolar.com</a></p>
<p>\"Todas las escuelas a tu alcance\"</p>
</div>
<div style=\"width: 40%;\">
<p align=\"center\" style=\"font-style: italic;\">Nuestra información es autentica, y esta basada en un senso sobre consultas a cada proveedor, en el cual los datos son respaldados y protegidos por derechos de privacidad de cada usuario, sólo otorgando información de conocimiento general.
 </p>
</div>
</div>
</body>
</html>
";
  $mail             = new PHPMailer(); // defaults to using php "mail()"

  $mail->IsSendmail(); // telling the class to use SendMail transport


  $mail->AddReplyTo($email,"Grafoexpress - Haz recibido respuesta"); //contactante

  $mail->SetFrom('noreply@1erdirectorioescolar.com', '1erDirectorio Escolar');


  $address = $email;
  
  	//si no esta vacia la variable que pueda mandar a estos destinatarios
  
  $mail->AddCC('1erdirectoriocancunapp@gmail.com ', 'Un nuevo cliente quiere ponerse en contacto');
  



  $mail->Subject    = "1erDirectorio Escolar - Han visitado tu anuncio";

  $mail->AltBody    = "1erDirectorio Escolar - Han visitado tu anuncio!"; // optional, comment out and test

  $mail->MsgHTML(utf8_decode($body));
  $mail->isHTML(true);
  $mail->AddAttachment("images/phpmailer.gif");      // attachment
  $mail->AddAttachment("images/phpmailer_mini.gif"); // attachment

  if(!$mail->Send()) {
   echo "Mailer Error: " . $mail->ErrorInfo;


  } else {
  	return 1;
  }
  
	} 

if(!empty($_POST)){
	$nombre_persona =$_POST['nombre_contacto'];
	$correo_persona = $_POST['correo_contacto'];
	$telefono_persona = $_POST['telefono_contacto'];
	
	$comentario_persona = $_POST['comentario_envia'];
	
	$ip = $_SERVER['REMOTE_ADDR'];
	date_default_timezone_set("America/Mexico_City");

	$status[]= array(
			'status' => "1"
			);
	
	
	print(json_encode($status));
}
?>