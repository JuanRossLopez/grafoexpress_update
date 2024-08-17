<?php
require_once('../PHPMailer-master/PHPMailerAutoload.php');
include "../connect.php";
function envia_email($nombre, $email, $telefono, $compa, $comentario, $fecha){

$body ="
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<!--<div style=\"width: 40%;\">
<img src=\"http://1erdirectorioescolar.com/imagenes/directorio-escolar-cancun.png\">
<hr>
</div>-->
<div  style=\"width: 40%;\">
<h4 style=\"background-color: orange; color:white; padding:5px;\">Te han contactado mediante tu anuncio en el <b>1erdirectorioescolar.com</b></h4>
<p>
	Datos del contactante
	<br>
	<p><b>Se comunican desde:</b> ".$compa."</p>
	<b>Nombre: </b> ".$nombre."
	<br>
	<b>Correo Eléctronico:</b> <a href=\"mailto:".$email."\"> ".$email."</a>
	<br>
	<b>Número Telefonico:</b> <a href=\"tel:".$telefono."\"> ".$telefono."</a>
	
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

  $mail->SetFrom('noreply@grafoexpress.com', 'GrafoExpress');

 $email_empresa="ulisesyrcun@gmail.com"
  $address = $email;
  if(!empty($email_empresa)){
  	//si no esta vacia la variable que pueda mandar a estos destinatarios
  $mail->AddAddress($email_empresa, "GrafoExpress - Escuelas a tu alcance");
 // $mail->AddCC('clientes@1erd.com ', 'Copia de mensaje');
  }else{
  $mail->AddAddress('ulises.redes.software@gmail.com', 'Copia de mensaje Contacto GrafoExpress');

  }

  $mail->Subject    = "GrafoExpress - Han visitado tu anuncio";

  $mail->AltBody    = "GrafoExpress - Han visitado tu anuncio!"; // optional, comment out and test

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
	$interes_persona = $_POST['interes'];
	$ciudad_persona = $_POST['nombre_compa'];
	$comentario_persona = $_POST['comentario_envia'];
	$id_empresa =(int) $_POST['ou-enterprise'];
	$ip = $_SERVER['REMOTE_ADDR'];
	date_default_timezone_set("America/Mexico_City");

	$busca = mysql_query("SELECT Correo, Cliente
		                  FROM redescuelas_clientes 
		                  WHERE idc=$id_empresa")or die(mysql_error());
	if($busca == true){
		$correo_devuelto_con = mysql_fetch_array($busca);
		$coreo_devuelto = $correo_devuelto_con['Correo'];
		$nombre_empresa = $correo_devuelto_con['Cliente'];
	}
	//INSERT
	$inserta_contacto_escolar= mysql_query("INSERT INTO contacto_escuelas(nombre_completo, correo_electronico,telefono, interesados_en_conocer, ciudad, mensaje, id_empresa, fecha_de_pregunta, ip_persona) 
		VALUES('$nombre_persona', '$correo_persona', '$telefono_persona', '$interes_persona', '$ciudad_persona', '$comentario_persona', '$id_empresa', NOW(), '$ip')") or die(mysql_error());
	if($inserta_contacto_escolar == true){
		envia_email($nombre_persona, $correo_persona, $telefono_persona, $interes_persona, $ciudad_persona, $comentario_persona, date("Y-m-d H:i:s"), $coreo_devuelto, $nombre_empresa);
		$status[]= array(
			'status' => "1"
			);
	}else{
		$status[]= array(
			'status' =>"0"
			);
	}
	print(json_encode($status));
}
?>