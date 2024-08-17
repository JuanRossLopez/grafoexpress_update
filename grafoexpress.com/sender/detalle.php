<?php
require_once("../engine/redfunction.php");
error_reporting(0);
$schoolestructure = new redEScuelas();
 $ciudad="cancun";
 $ciudadfind= (int) 1;

$ciudadok="Cancún";
$estado="Quintana Roo";
$varpath = $schoolestructure->path ="/"; //url native three

//variable recibe
if(!empty($_REQUEST)){
  $id_recibido =(int) $_REQUEST["id"];
}


function cleanQuery($string){ 
           if(get_magic_quotes_gpc())  // prevents duplicate backslashes 
           { 
           $string = stripslashes($string); 
           } 
           $badWords = array("/delete/i", "/update/i","/union/i","/insert/i","/drop/i","/http/i","/--/i","/script/i","/.css/i"); 
           $string = preg_replace($badWords, "", $string); 

           
          $string = mysql_escape_string($string); 
          return $string; 
           } 

function truncate_str($str, $maxlen) {
if ( strlen($str) <= $maxlen ) return $str;

$newstr = substr($str, 0, $maxlen);
if ( substr($newstr,-1,1) != ' ' ) $newstr = utf8_encode(substr($newstr, 0, strrpos($newstr, " ")));

return $newstr;
}	

?>
<?php if (is_numeric($id_recibido)){  //get detalle*************************
$cliente= (int) cleanQuery($id_recibido);
include "../engine/connect.php";

// ===============TRacker=================//
function is_bot(){
  $botlist = array("Teoma", "alexa", "froogle", "Gigabot", "inktomi",
    "looksmart", "URL_Spider_SQL", "Firefly", "NationalDirectory",
    "Ask Jeeves", "TECNOSEEK", "InfoSeek", "WebFindBot", "girafabot",
    "crawler", "www.galaxy.com", "Googlebot", "Scooter", "Slurp",
    "msnbot", "appie", "FAST", "WebBug", "Spade", "ZyBorg", "rabaz",
    "Baiduspider", "Feedfetcher-Google", "TechnoratiSnoop", "Rankivabot",
    "Mediapartners-Google", "Sogou web spider", "WebAlta Crawler","TweetmemeBot",
    "Butterfly","Twitturls","Me.dium","Twiceler","Purebot","facebookexternalhit",
    "Yandex","CatchBot","W3C_Validator","Jigsaw","PostRank","Purebot","Twitterbot",
    "Voyager","zelist");

  foreach($botlist as $bot){
    if(strpos($_SERVER['HTTP_USER_AGENT'],$bot)!==false)
    return true;  // Is a bot
  }
  return false; // Not a bot
}

// get ip
$ip = $_SERVER['REMOTE_ADDR'];
$query_string = $_SERVER['QUERY_STRING'];
$http_referer = $_SERVER['HTTP_REFERER'];
$http_user_agent = $_SERVER['HTTP_USER_AGENT'];
$request_uri = $_SERVER['REQUEST_URI'];

// check if it's a bot
if (is_bot())
  $isbot = 1;
else
  $isbot = 0;

// get country and city
/*

include('../engine/tracker/ip2locationlite.class.php');
//Load the class
$ipLite = new ip2location_lite;
$ipLite->setKey('ADD_API_KEY_HERE');
 
//Get errors and locations
$locations = $ipLite->getCity($ip);
$errors = $ipLite->getError();
 
//Getting the result
if (!empty($locations) && is_array($locations)) {
  foreach ($locations as $field => $val) {
    if ($field == 'countryName')
      $country = $val;
    if ($field == 'cityName')
      $city = $val;
  }
}
*/
// insert into db
date_default_timezone_set('UTC');
$date = date("Y-m-d");
$time = date("H:i:s");
$details = json_decode(file_get_contents("http://ipinfo.io/{$ip}/json"));
$country = utf8_decode($details->region);
$city = utf8_decode($details->city); // -> "Mountain View"


$query = mysql_query("insert into `tracker_clientes` (`country`,`city`,`date`, `time`, `ip`, `query_string`, `http_referer`, `http_user_agent`, `request_uri`, `isbot`, `views`) 
values ('$country','$city','$date', '$time', '$ip', '$query_string', '$http_referer' ,'$http_user_agent' , '$request_uri', $isbot, 1)")or die(mysql_error());


// ============== End Trakcer =============//
?> 
<?php
$count=0;
$query="select * from redescuelas_clientes where idc=$cliente";
$result = mysql_query($query);
while($row = mysql_fetch_array($result)){ 


 //dame la seccion
$query2="SELECT * FROM enlace WHERE idcliente=$cliente and idcat in (select idc from categorias where subcategoria='proveedores')";
$result2 = mysql_query($query2);
$row2 = mysql_fetch_array($result2);
if ($row2){
$seccion="proveedores";
 }
$query2="SELECT * FROM enlace WHERE idcliente=$cliente and idcat in (select idc from categorias where subcategoria='eventos')";
$result2 = mysql_query($query2);
$row2 = mysql_fetch_array($result2);
if ($row2){
$seccion="eventos";
 } 
$query2="SELECT * FROM enlace WHERE idcliente=$cliente and idcat in (select idc from categorias where subcategoria='salud')";
$result2 = mysql_query($query2);
$row2 = mysql_fetch_array($result2);
if ($row2){
$seccion="salud";
 } 
$query2="SELECT * FROM enlace WHERE idcliente=$cliente and idcat in (select idc from categorias where subcategoria='deportivas')";
$result2 = mysql_query($query2);
$row2 = mysql_fetch_array($result2);
if ($row2){
$seccion="deportivas";
 } 
$query2="SELECT * FROM enlace WHERE idcliente=$cliente and idcat in (select idc from categorias where subcategoria='especialidad')";
$result2 = mysql_query($query2);
$row2 = mysql_fetch_array($result2);
if ($row2){
$seccion="especialidad";
 } 
$query2="SELECT * FROM enlace WHERE idcliente=$cliente and idcat in (select idc from categorias where subcategoria='niveles')";
$result2 = mysql_query($query2);
$row2 = mysql_fetch_array($result2);
if ($row2){
$seccion="niveles";
 } 
if (!$seccion){ $seccion="$niveles";} 
 

if ($row["Logotipo"]!=""){
	
	$logo=$row["Logotipo"];
}else{
	$logo="generico.png";
	}
if ($row["Guarderia"]==1){	
$refi=$refi."Guardería, ";
}
if ($row["Maternal"]==1){	
$refi=$refi."Maternal, ";
}
if ($row["Prescolar"]==1){	
$refi=$refi."Preescolar, ";
}
if ($row["Primaria"]==1){	
$refi=$refi."Primaria, ";
}
if ($row["Secundaria"]==1){	
$refi=$refi."Secundaria, ";
}
if ($row["Preparatoria"]==1){	
$refi=$refi."Preparatoria, ";
}
if ($row["Universidad"]==1){	
$refi=$refi."Universidad, ";
}
if ($row["Postgrado"]==1){	
$refi=$refi."Posgrado, ";
}

	
?>
 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml"><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Escuelas en <?php print($ciudadok);?>, guarderias, kinders, preescolar, primaria, secundaria, preparatoria, universidad</title>

<meta name="description" value= "Escuelas [Educacion,colegios, escuelas Cancun] / Escuelas Primarias, Secundarias, Preparatorias y Universidades [Colegios institutos] en Cancun y Quintana Roo Mexico"/>
<meta name="keywords" content="Escuelas Primarias, Secundarias, Preparatorias, Universidades, Colegios, kinders, guarderias, preescolar,  institutos, Escuelas, Educacion,colegios, escuelas en cancun">


<script language="javascript">
function cambiaurl(param){
  var pagina=param;
  if(pagina=='cancun') { window.location.href = "/"; }
  if(pagina=='xalapa') { window.location.href = "/xalapa/"; }
  if(pagina=='playadelcarmen') { window.location.href = "/playadelcarmen/"; }
  if(pagina=='merida') { window.location.href = "/merida/"; }
  if(pagina=='valladolid') { window.location.href = "/valladolid/"; }
  }
</script>
<script type="text/javascript">
function NewWindow(mypage,myname,w,h,scroll){var winl=(screen.width-w)/2;var wint=50;winprops='height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars='+scroll+',resizable'
win=window.open(mypage,myname,winprops)
if(parseInt(navigator.appVersion)>=4){win.window.focus();}}
</script>
<!--
<link rel="stylesheet" href="themes/default/default.css" type="text/css" media="screen" />
<link rel="stylesheet" href="nivo-slider.css" type="text/css" media="screen" />-->
<?php
$schoolestructure->outlinks($varpath);// call method to links css
?>


</head>
<body>

<!--Nav Menu-->
<nav class="navbar navbar-default navbar-fixed-top listado-de-escuelas-en-cancun-menu">
  <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="http://1erd.com"><i class="glyphicon glyphicon-home"></i> Inicio</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="/registro.php"><i  class="glyphicon glyphicon-pencil education"></i> Registra tu escuela</a></li>
            <li>
              <a href="/anuncios/busco-empleo.php"><i class="glyphicon glyphicon-briefcase"></i> Ofertas de trabajo</a>
            </li>
            <li>
              <a href="/puntos-de-distribucion.php"><i class="glyphicon glyphicon-map-marker"></i> Puntos de distribución</a>
            </li>
            <li><a href="http://1erdirectorioescolar.com/contacto.php"><i class="glyphicon glyphicon-envelope"></i> Contactanos</a></li>
            <li>
              <a class="btn btn-default btn-outline btn-circle"  data-toggle="collapse" href="#nav-collapse1" aria-expanded="false" aria-controls="nav-collapse1"><i class="glyphicon glyphicon-education education"></i> Categorias</a>
            </li>
          </ul>
          <ul class="collapse nav navbar-nav nav-collapse" id="nav-collapse1">
            <li><a href="/<?php echo $ciudad;?>/niveles<?php echo $ciudad;?>/"><img src="/imagenes/icon-niveles.png" width="30"> Escuelas por niveles</a></li>
            <li><a href="/<?php echo $ciudad;?>/especialidad<?php echo $ciudad;?>/"><img src="/imagenes/icon-especialidad.png" width="30"  border="0" /> Escuelas por especialidad</a></li>
            <li><a href="/<?php echo $ciudad;?>/deportivas<?php echo $ciudad;?>/"><img src="/imagenes/icon-deportivas.png" width="30"  border="0" /> Escuelas Deportivas</a></li>
            <li><a href="/<?php echo $ciudad;?>/salud<?php echo $ciudad;?>/"><img src="/imagenes/icon-salud.png" width="30"  border="0" / >Escuelas para la salud</a></li>
            <li><a href="/<?php echo $ciudad;?>/graduaciones<?php echo $ciudad;?>/"><img src="/imagenes/icon-eventos.png" width="30"  border="0" /> Graduaciones y Eventos</a></li>
            <li><a href="/<?php echo $ciudad;?>/proveedores<?php echo $ciudad;?>/"><img src="/imagenes/icon-proveedores.png" width="30"  border="0" / >Proveedores Escolares</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->  
  </div>
</nav>
<!--=============================Banner =======================================-->
<div class="container directorio-cancun-banner">
 <!-- start finder-->
 <div class="container">
 <div class="row">
 <!--logo-->
  <div class="col-md-3 col-xs-12 logo-directorio-escolar-cancun">
    <img src="/imagenes/directorio-escolar-cancun.png" width="300" height="130" alt="Escuelas en Cancun, [universidades en cancun]">
  </div>
  <!--End logo-->
  <!--Finder design -->
  <div class="col-md-8 col-xs-12 directorio-cancun">
  <form id="form1" name="form1" method="get" action="buscador.php">

    <div class="col-md-8 col-xs-13 escuelas-en-cancun-finder">
     <input type="text" name="termino"  class="form-control" id="termino" placeholder="Buscar Escuelas" />
    </div>
    <div class="col-md-3 col-xs-12 universidades-en-cancun-lista">
    <select name="ciudad" class="form-control" id="ciudad" onchange="cambiaurl(this.value);">
      <option value="cancun" selected="selected" >Cancún</option>
      <option value="xalapa">Xalapa</option>
      <option value="merida">Mérida</option>
      <option value="playadelcarmen">Playa de Carmen</option>
      <option value="valladolid">Valladolid</option>
      </select>     
    </div>
    <div class="col-md-2 col-xs-12 escuelas-en-cancun-buscador">
      <input name="lupa" type="submit" class="findbutton" id="lupa" value=" ">
    </div>
    </form>
    <!-- citys-->
    <div class="col-md-12 col-xs-12 municipios-de-mexico-div desktopmenustates">
      <ul class="lista-de-escuela-en-ciudades-ul">
       <?php
          $schoolestructure->showcitysurl(); // call states actives
       ?>
      </ul>

    </div>
    <!--end citys-->
    <!--Citys Responsive-->
    <!-- citys-->
    <div  class="col-md-12 col-xs-12 responsivemenustates">
    <div class="col-md-12 col-xs-12 municipios-de-mexico-div estados-de-mexico-div-responsive">
      <ul class="lista-de-escuela-en-ciudades-ul">
        <li>
        <a href="#" class="dropdown" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        <i class="glyphicon glyphicon-map-marker"></i> Busca tu estado <span class="caret"></span>
        </a>
            <ul class="dropdown-menu citysulresp" aria-labelledby="dropdownMenu2">
                 <?php
                    $schoolestructure->showurlresponsive();
                 ?>
            </ul>

        </li>
      </ul>
    </div>
    </div>
    <!--end citys-->

    <!--End Citys  Responsive-->
  </div>
  <!--End finder design -->
  </div>
  </div>
 <!-- End Finder-->
</div>
<!--=============================End Banner =======================================-->

<!--Directorio Escolar Cancun Contacto-->
<div class="container directorio-en-cancun">
  <!-- Contain contacto-->
  <div class="container desktopcontact">
    <div class="col-md-5 col-xs-12">
      <div class="col-md-2 col-xs-3"> 
        <img  class="img-responsive img img-rounded directorio-en-cancun-numeros"src="/assets/img/telefono-de-escuelas-en-cancun.png" width="30">
      </div>
      <div class="col-md-4 col-xs-8 contacto-cancun-div">
      <p class="telefono-de-escuelas-en-cancun"><a href="9988807441"><b>(998) 880-74-41</b></a></p>
      </div>
      <div class="col-md-5 col-xs-8">
        <p class="telefonos-de-escuelas-en-cancun-div"><a href="018005708609"><b>01-800-57-08-609</b></a></p>
      </div>
    </div>
    <!--Social-->
    <div class="col-md-5 col-xs-12 redes-sociales-div">
      <!--Icons-->
        <div class="col-md-2 col-xs-3 facebook-icon">
          <a href="http://1erdirectorioescolar.com/contacto.php" target="_blank"><img  class="img-responsive" src="/assets/img/informacion-de-escuelas-correo.png" width="30"></a>
        </div>      
        <div class="col-md-2 col-xs-3 facebook-icon">
          <a href="https://www.facebook.com/1erDirectorioEscolar" target="_blank"><img  class="img-responsive" src="/assets/img/escuelas-en-cancun-facebook.png" width="30"></a>
        </div>
        <div class="col-md-2 col-xs-3 facebook-icon">
          <a href="https://twitter.com/1erDirectorio" target="_blank"><img  class="img-responsive" src="/assets/img/escuelas-en-cancun-twitter.png" width="30"></a>
        </div>        
        <div class="col-md-2 col-xs-3 facebook-icon">
          <a href="https://www.youtube.com/channel/UCOsbkQf68XJFxB_zLf24tuQ" target="_blank"><img  class="img-responsive" src="/assets/img/escuelas-en-cancun-youtube.png" width="30"></a>
        </div>         
      <!--end Icons-->
    </div>
    <!--End Social-->
  </div>
  <!-- End contain Contacto-->
  <!-- Contain contacto-->
  <div class="container responsivepcontact">
    <div class="col-md-5 col-xs-12">
      <div class="col-md-2 col-xs-2"> 
        <img  class="img-responsive img img-rounded directorio-en-cancun-numeros"src="/assets/img/telefono-de-escuelas-en-cancun.png" width="30">
      </div>
      <div class="col-md-4 col-xs-3 contacto-cancun-div">
      <p class="telefono-de-escuelas-en-cancun"><a href="9988807441"><b>(998) 880-74-41</b></a></p>
      </div>
      <div class="col-md-5 col-xs-3">
        <p class="telefonos-de-escuelas-en-cancun-div"><a href="018005708609"><b>01-800-57-08-609</b></a></p>
      </div>
    </div>
    <!--Social-->
    <div class="col-md-5 col-xs-5 redes-sociales-div">
      <!--Icons-->
        <div class="col-md-2 col-xs-3 facebook-icon">
          <a href="http://1erdirectorioescolar.com/contacto.php" target="_blank"><img  class="img-responsive" src="/assets/img/informacion-de-escuelas-correo.png" width="30"></a>
        </div>      
        <div class="col-md-2 col-xs-3 facebook-icon">
          <a href="https://www.facebook.com/1erDirectorioEscolar" target="_blank"><img  class="img-responsive" src="/assets/img/escuelas-en-cancun-facebook.png" width="30"></a>
        </div>
        <div class="col-md-2 col-xs-3 facebook-icon">
          <a href="https://twitter.com/1erDirectorio" target="_blank"><img  class="img-responsive" src="/assets/img/escuelas-en-cancun-twitter.png" width="30"></a>
        </div>        
        <div class="col-md-2 col-xs-3 facebook-icon">
          <a href="https://www.youtube.com/channel/UCOsbkQf68XJFxB_zLf24tuQ" target="_blank"><img  class="img-responsive" src="/assets/img/escuelas-en-cancun-youtube.png" width="30"></a>
        </div>         
      <!--end Icons-->
    </div>
    <!--End Social-->
  </div>
  <!-- End contain Contacto-->  
</div>
<!--End-Directorio Escolar Cancun Contacto-->
<!--Image banner-->
<div class="container playas-en-cancun-img" style="background-image:url('/assets/img/escuelas-en-cancun.jpg'); background-size:cover;padding-bottom:20%; border-bottom-style: solid;border-bottom-color: rgb(201, 207, 208);border-bottom-width: 4px; box-shadow:0px 3px 8px 0px rgb(168, 168, 168);-moz-box-shadow:0px 3px 8px 0px rgb(168, 168, 168); -o-box-shadow:0px 3px 8px 0px rgb(168, 168, 168);" >
 <br>

</div>
<!-- End image banner-->

       <?php
          $schoolestructure->footerjs($varpath);
       ?> 

  <div style="clear:both">
  </div>
<!--================================Content======================-->
<div  class="container" >

  <div class="col-md-4 col-xs-12 locacion">
   <h1 style="margin-bottom:10px"><?php $schoolestructure->findercitys($ciudadfind);?></h1>
   <span class="minicities"><a href="/index.php"><strong>Cancún</strong></a></span> <span class="minicities"><a href="/merida/">Mérida</a></span> <span class="minicities"><a href="/playadelcarmen/">Playa del Carmen</a></span>  <span class="minicities"><a href="/xalapa/">Xalapa</a></span> <span class="minicities"><a href="/valladolid/">Valladolid</a></span>
  </div>
  <?php
   $schoolestructure->categories($ciudad, $ciudadfind);
   $cadena= $row['Telefono']; 
   $cadenamovil= $row['Celular'];
   $cadenalada= $row["Lada"];
   for ($i=0; $i<strlen($cadena); $i++) {
      if (is_numeric($cadena[$i])) {$telefono.=$cadena[$i];}
   }
   //Lada
    for ($i=0; $i<strlen($cadenalada); $i++) {
      if (is_numeric($cadenalada[$i])) {$lada.=$cadenalada[$i];}
   }
   //Movil
    for ($i=0; $i<strlen($cadenamovil); $i++) {
      if (is_numeric($cadenamovil[$i])) {$movil.=$cadenamovil[$i];}
   }

  ?>
</div>   
  <div style="clear:both"></div>
 <!--Start detail-->
<div class="container que-escuelas-son-las-mejores-en-cancun-detalle">
<!-- Detalle-->
<div class="col-md-8 col-xs-12">
  <!-- Detalle next-->
   <div id="detalle" class="col-md-12 col-xs-12 detalle-de-proveedores">
   <!--Mini Module-->
    <?php if ($row["Imagen"]){?>
     <?php if (!$row["hires"]){?>
         <img src="http://1erdirectorioescolar.com/appdirectorio/fotos/<?php echo $row["Imagen"];?>" class="img-responsive" id="mainimage"  alt="<?php echo $row["Cliente"];?>">
     <?php 
     }
     ?>
    <?php if ($row["hires"]!=""){?>
         <img src="http://1erdirectorioescolar.com/appdirectorio/hires/<?php echo $row["hires"];?>" class="img-responsive" id="mainimage"  alt="<?php echo $row["Cliente"];?>">
    <?php 
    }
    ?> 
   <?php 
    }
   ?> 
   <div class="textcliente col-md-12 col-xs-12"><h1 class="lead" align="center"><?php echo stripslashes($row["Cliente"]);?></h1></div>
   <!--module-->
   <div class="sinopsis">
            <p><?php echo nl2br(utf8_decode($row["Sinopsis"]));?></p>
   </div> 
   <?php if ($row["micrositio"]!=""){?> 
   <!--module--> 
   <div class="direccion"><br />
      <a href="<?php echo $row["micrositio"];?>"><img src="http://1erdirectorioescolar.com/imagenes/boton_micrositio.png" width="155" height="33" border="0" /></a>
   </div>
   <?php 
   }
   ?>
   <?php if ($row["Direccion"]!=""){?> 
   <!--module--> 
   <div class="direccion">
    <strong>Dirección:</strong><br />
    <span class="datosescuela"><?php echo nl2br(utf8_decode($row["Direccion"]));?></span>
   </div>
  <?php 
   }
   ?>
   <?php if ($row["Telefono"]!=""){?>
   <!--module-->
   <div class="direccion">
    <strong><i class="glyphicon glyphicon-phone-alt"></i> Teléfono / Fax:</strong><br />
    <span class="datosescuela"><a href="tel:<?php echo $telefono;?>"> <?php echo $row['Telefono']; ?></a></span>
  </div>
  <?php 
   }
  ?>
  <?php if ($row["Lada"]!=""){?>
  <!--module-->
  <div class="direccion">
    <strong>Lada:</strong><br />
    <span class="datosescuela"><a href="tel:<?php echo $lada; ?>"><?php echo $row["Lada"];?></a></span>
  </div>
  <?php 
  }
  ?>
  <?php if ($row["Celular"]!=""){?>
  <!--module-->
  <div class="direccion">
    <strong><i class="glyphicon glyphicon-phone"></i> Móvil:</strong><br />
   <span class="datosescuela"><a href="tel:<?php echo $movil; ?>"><?php $row["Celular"];?></a></span>
  </div>
  <?php 
  }
  ?>
  <?php if ($row["Correo"]!=""){
    ?>
  <!--module-->
  <div class="direccion">
    <strong><i class="glyphicon glyphicon-envelope"></i> Correo electrónico:</strong><br />
  <a href="mailto:<?php echo $row["Correo"];?>"><?php echo $row["Correo"];?></a>
  </div>
  <?php 
  }
  ?> 
  <?php if ($row["Sitio"]!=""){
  $sitio=trim($row["Sitio"]);
  if (substr($sitio, 0, 7)!="http://"){  // abcd
  $sitio="http://".trim($row["Sitio"]);
  }
  ?> 
  <!--module-->  
  <div class="direccion">    
    <strong><i class="glyphicon glyphicon-globe"></i> Sitio web</strong><br />
    <a href="<?php echo $sitio;?>" target="_blank"><?php echo $row["Sitio"];?></a>
  </div>
  <?php 
  }
  ?> 
  <?php if ($row["cfacebook"]!="" || $row["ctwitter"]!=""){?>
  <!--module-->
  <div class="direccion">
<?php if ($row["cfacebook"]!=""){
  $facebook=trim($row["cfacebook"]);
  if (substr($facebook, 0, 8)!="https://"){  // abcd
  $facebook="https://".trim($row["cfacebook"]);
  }
  ?>
    <a href="<?php echo $facebook;?>"><img src="http://1erdirectorioescolar.com/appdirectorio/images/followfacebook.png" border="0" style="margin-right:20px" target="_blank"/></a>
<?php 
}
?>
<?php if ($row["ctwitter"]!=""){
  $twitter=trim($row["ctwitter"]);
  if (substr($twitter, 0, 8)!="https://"){  // abcd
  $twitter="https://".trim($row["ctwitter"]);
  }
  ?>   
<a href="<?php echo $twitter;?>"><img src="http://1erdirectorioescolar.com/appdirectorio/images/followtwitter.png" border="0" style="margin-right:20px" target="_blank"/></a>
    <?php 
    }
  ?> 
  <!--Contactar-->
  <a href="#formulario_escolar"><img src="/appdirectorio/images/contactar.png" border="0" style="margin-right:20px" ></a>
  <!--Termina Contactar-->
</div>
<?php 
}
?> 
<?php if (strlen($refi)>5){?>
<!--module-->
<div class="direccion">
    <strong>Niveles:</strong><br />
    <span class="datosescuela"><?php echo $refi;?></span>
</div>
<?php 
}
?>
<?php if ($row["coordenadas"]!=""){?>
<script>
function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(<?php echo $row["coordenadas"];?>),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);

  var image = '../imagenes/icono.png';
  var myLatLng = new google.maps.LatLng(<?php echo $row["coordenadas"];?>);
  var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
<?php

//Call autoscroll
$schoolestructure->autoscroll(".que-escuelas-son-las-mejores-en-cancun-detalle");
?>
</script>
<!--module-->
 <!--module-->
 <div id="map-canvas" class="col-md-12 col-xs-12" style="height:300px;">
</div>
 <?php 
 }
 ?> 
  <?php if ($row["video"]!=""){?>
<div class="botonmapa"><a href="<?php echo $row["video"];?>" target="_blank"><img src="http://1erdirectorioescolar.com/appdirectorio/images/nbotonvideo.png" width="181" height="50" border="0" /></a>
</div>
 <?php 
 }
 ?>  
   <!--End Mini Module-->
  <!-- Formulario-->
<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
<hr>

<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 titulo-contacto-escuela">
<h4 align="center">Contactar con anunciante</h4>
</div>

<div class="col-lg-8 col-md-12 col-sm-12 col-xs-12" style="margin: 0 auto;float: none;">
  <form action="#" method="post" id="formulario_escolar">
    <div class="form-group" >
    <br>
    <p align="left"><b>Nombre Completo</b></p>
     <input type="text" name="nombre_contacto" class="form-control general-inputs nombre_ver" value="" placeholder="Ingresa nombre completo" required>
    </div>
    <div class="form-group">
    <p align="left"><b>Correo Eléctronico</b></p>
     <input type="text" name="correo_contacto" class="form-control general-inputs correo_ver" value="" placeholder="Ingresa Correo Eléctronico">
    </div>    
    <div class="form-group">
    <p align="left"><b>Telefono</b></p>
     <input type="text" name="telefono_contacto" class="form-control general-inputs telefono_ver" value="" placeholder="Ingresa telefono (solo números)">
    </div> 
    <div class="form-group">   
    <p align="left"><b>Interesad@ en conocer</b></p>
    <select class="form-control" name="interes">
      <option value="Necesito que se pongan en contacto contigo">Necesito que se pongan en contacto contigo</option>
      <option value="Quiero trabajar aqui">Quiero trabajar aqui</option>
      <option value="Ofrezco mis servicios">Ofrezco mis servicios</option>
      <option value="Otro Motivo">Otro Motivo</option>
    </select>
    </div>    
    <div class="form-group">   
    <p align="left"><b>Ciudad</b></p>
    <select class="form-control lista-ciudades" name="ciudade_envia">
    <?php
    $busca_ciudad= mysql_query("SELECT cityrelative FROM ciudades WHERE activo=1") or die(mysql_error());
    while($fila_ciudades= mysql_fetch_array($busca_ciudad)){
      print('
              <option value="'.$fila_ciudades['cityrelative'].'">'.$fila_ciudades['cityrelative'].'</option>

        ');
      }
      ?>
      <option value="otro">Otro ciudad</option>
    </select>
    </div>  
    <div class="form-group">
    <p align="left"><b>Mensaje</b></p>
    <textarea class="form-control comentario_ver" rows="5" cols="30" name="comentario_envia"  placeholder="Describanos su duda o comentario (Solo letras y números)"></textarea>
    </div>
    <input type="hidden" name="ou-enterprise" value="<?php print($cliente);?>">
    <div class="form-group">
    <input type ="button" value="Enviar" class="btn btn-success enviar-form">
    </div>
    <!-- status-->
    <div class="form-group">
     <p class="status"></p>
    </div>
    <!-- end status-->
  </form>
</div>
</div>
  <!-- termina Formulario-->
</div>
  <!--Detalle next end-->


</div>
<!-- end detalle-->
<div class="col-md-3 col-xs-12" id="indices">
     <?php include "../inc-listas-detalle.php";
include "../findercitys.php";

     ?> 
</div>
</div>
    
 <?php
 unset($refi);
}
?>


 <!-- end detail-->
   <div style="clear:both"></div>
  <!--End list of schoos-->
  <div class="container">
    <div class="container footer-cun">
    <div id="plecahome"></div>
     <?php include "../inc-footer.php";?>
     <div style="clear:both; height:50px"></div>
     </div>
  </div> 
<?php 
 mysql_close ($connection);
  } //cierro detalle ************************** 
include "../cancun-numeros-de-escuelas-footer.php";  
?>
</body>
</html>
