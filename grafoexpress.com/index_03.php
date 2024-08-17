<?php
require_once("redfunction.php");
error_reporting(0);

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
  date_default_timezone_set('UTC');
$date = date("Y-m-d");
$time = date("H:i:s");
$details = json_decode(file_get_contents("http://ipinfo.io/{$ip}/json"));
$country = utf8_decode($details->region);
$city = utf8_decode($details->city); // -> "Mountain View"


$query = mysql_query("insert into `tracker_clientes` (`country`,`city`,`date`, `time`, `ip`, `query_string`, `http_referer`, `http_user_agent`, `request_uri`, `isbot`, `views`) 
values ('$country','$city','$date', '$time', '$ip', '$query_string', '$http_referer' ,'$http_user_agent' , '$request_uri', $isbot, 1)")or die(mysql_error());


// ============== End Trakcer =============//
 
} 
?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
    <link rel="shortcut icon" href="imagenes/icono.jpg">
		<title>Grafoexpress</title>
		<meta name="generator" content="Bootply" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<!--[if lt IE 9]>
			<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
		<link href="css/styles.css" rel="stylesheet">
	</head>
	<body>

<!-- Wrap all page content here -->
<div id="wrap" >

 
<header class="masthead">

  	<!-- Carousel
    ================================================== -->
    <div id="myCarousel" class="carousel slide">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="item active">
          <img src="imagenes/portada1.jpg">
          
<!--<img src="imagenes/slidee.jpg">-->
          <div class="container">
            <div class="carousel-caption">
              <h2> Impresión</h2>
              <p></p>
            </div>
          </div>
        </div>
        <div class="item">
        <!--  <img src="imagenes/slide12.jpg">-->
         <img src="imagenes/portada2.jpg">
          <div class="container">
            <div class="carousel-caption">
              <h2> Diseño </h2>
              <p></p>
            </div>
          </div>
        </div>
        <div class="item">
           <img src="imagenes/portada3.jpg">
         <!--<img src="imagenes/slide2.jpg"> -->
          <div class="container">
            <div class="carousel-caption">
              <h2> Y más.. </h2>
              <p></p>
            </div>
          </div>
        </div>    
        <!--
        <div class="item">
         <img src="imagenes/slide3.jpg">
          <div class="container">
            <div class="carousel-caption">
              <h2>Renovations &amp; Adaptive Re-use</h2>
              <p></p>
            </div>
          </div>
        </div>-->

      </div>
      <!-- /.carousel-inner 
      <div class="logo">Grafoexpress ~ Soluciones graficas, es nuestra pasión. </div> -->
      <!-- Controls -->
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
      </a>  
    </div>
    <!-- /.carousel -->
  
</header>
  
  
<!-- Fixed navbar -->
<div class="navbar navbar-custom navbar-inverse navbar-static-top" id="nav">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav nav-justified">
           <li><a data-toggle="collapse" data-target=".navbar-collapse" href="#section2"> <img class="logobarra" src="imagenes/LogoGraf2.png"></a></li>
           <li><a data-toggle="collapse" data-target=".navbar-collapse" href="#section2">Perfil</a></li>
          

          <li class="dropdown">
            <a href="#section3" data-target=".navbar-collapse" data-toggle="collapse">Productos<b></b></a>
                              
            </li>
           <li><a data-toggle="collapse" data-target=".navbar-collapse" href="#section4">Encuentranos</a></li>
            <li><a data-toggle="collapse" data-target=".navbar-collapse" href="#section5">Contáctanos</a></li>
         
        </ul>
      </div><!--/.nav-collapse -->
    </div><!--/.container -->

</div><!--/.navbar -->
  
<!-- Begin page content -->
<!--<div class="divider" id="section1"></div>-->
 <div class="divider" id="section2"></div> 
<div class="container">

  <div class="col-sm-11 col-sm-offset-1">
    
     
     <div class="page-header text-center">
     <h1 class="logo">Grafoexpress ~ Soluciones gráficas, es nuestra pasión. </h1>
    </div>
   
   
    <!--
<div class="divider"></div>
-->
    
  </div>
</div>
    <!--
<div class="divider"></div>
-->
  
<section class="bg-1">
  <div class="col-sm-6 col-sm-offset-3 text-center"></div>
</section>
  

   
<div class="row">
  <div class="col-sm-10 col-sm-offset-1">
    <hr>
   <p class="lead text-center" style="  vertical-align: 50%;  text-align: justify !important;"> 
      Somos un grupo de profesionales expertos en impresión, marketing, producción y comunicación creativa, cuyo compromiso es lograr la total satisfacción de
      nuestros clientes mediante la oferta de un servicio competitivo.
    </p> 
    <!--
    <div class="divider"></div> -->
    
    </div>
  	<!--<div class="col-sm-10 col-sm-offset-1">
      <h1>asdasd</h1>
      
      <hr>
     
      <p>
	  The Firm has had a great deal of experience and is highly regarded for its expertise in the areas of design, construction administration, construction management, tight cost control and scheduling.
	  </p> 
      <p>
	  We have been involved in a wide range of building projects, including college facilities, banks, schools, nursing homes, office buildings, churches, industrial buildings and major urban development projects.
      </p> 
      <p>
	  The various projects have included new construction, renovation and adaptive re-use as a way of providing new space for the various clients. Tessier Associates provides in-house programming, master planning, architectural design, construction documentation, project administration and interior design services. Sustainable design, as appropriate for each client, is incorporated in cost effective ways to benefit the long term value of the buildings created by the firm.
	  </p> 
      <p>
	  Together with selected consultants, The Firm provides complete professional services including landscape architecture, structural engineering, electrical and mechanical engineering and site planning.
	  </p> 
      
      <hr>
      
      <div class="divider"></div>
      
  	</div>-->  
    <!--/col-->
</div><!--/container-->
<div class="divider" id="section3"></div>

  
<section class="bg-3">
  <div class="col-sm-6 col-sm-offset-3 text-center">
  <h2 style="padding:20px;background-color:rgba(5,5,5,.8)">Productos<!Clientes &amp; Socios!></h2>
  </div>
</section>
  
<div class="divider"></div>
  
<div class="bg-4">
  <div class="container ">
	<div class="row ">
	   <div class="col-sm-4 col-xs-12 ">
      
        <div class="panel panel-default">
          <div class="panel-thumbnail"><a href="#" title="Publicidad"><img src="imagenes/Diseño_cancun.jpg" class="img-responsive"></a></div>
          <div class="panel-body">
            <p>Publicidad</p>
            <p></p>

          </div>
        </div><!--/panel-->
      </div><!--/col-->
      
      <div class="col-sm-4 col-xs-12">
      
      	<div class="panel panel-default">
          <div class="panel-thumbnail"><a href="#" title="Impresiones"><img src="imagenes/Impresiones_cancun.jpg" class="img-responsive"></a></div>
          <div class="panel-body">
            <p>Social Media</p>
            <p></p>
            
          </div>
        </div><!--/panel--> 
      </div><!--/col-->
      
      <div class="col-sm-4 col-xs-12">
      
      	<div class="panel panel-default">
          <div class="panel-thumbnail"><a href="#" title="Diseño"><img src="imagenes/Mercadotecnia_cancun.jpg" class="img-responsive"></a></div>
          <div class="panel-body">
            <p>Diseño</p>
            <p></p>
            
          </div>
        </div><!--/panel--> 

      </div><!--/col--> 
      
      <div class="col-sm-4 col-xs-12">
      
      	<div class="panel panel-default">
          <div class="panel-thumbnail"><a href="#" title="Social Media"><img src="imagenes/Publicidad_cancun.jpg" class="img-responsive"></a></div>
          <div class="panel-body">
            <p>Mercadotecnia</p>
            <p></p>
            
          </div>
        </div><!--/panel--> 

      </div><!--/col--> 
      
      <div class="col-sm-4 col-xs-12">
      
      	<div class="panel panel-default">
          <div class="panel-thumbnail"><a href="#" title="Mercadotecnia"><img src="imagenes/Socialmedia_cancun.jpg" class="img-responsive"></a></div>
          <div class="panel-body">
            <p>Impresión</p>
            <p></p>
            
          </div>
        </div><!--/panel--> 

      </div><!--/col--> 
    
      
	</div><!--/row-->
  </div><!--/container-->
</div>

<div class="divider" id="section4"></div>

<div class="row">
  <div class="col-md-8 col-md-offset-1">
  </div>
</div>
  
<div class="row abajo " >
  
  <div class="col-sm-10 col-sm-offset-1">
      <h1>Localización</h1>
  </div>   
       
  <div id="map-canvas"  class="col-sm-offset-2"></div>
  
  <hr>



  
 <div class="col-sm-12 col-xs-12">
   <div class="col-sm-6 col-xs-12 pull-right" style="margin-top: 15%;">

      <address>
<div class="tant letrinas">
    <ul style="list-style-type:none "> 
    <li>Super-Manzana: 46&nbsp /&nbsp Manzana: 9&nbsp /&nbsp    Lote: 4 &nbsp;<br> Cancún, Q. Roo.</li> 
    <li> Teléfono: <a href="tel:9982061575">(998) 206  15  75 </a></li> 
    <li> Celular: <a href="tel:9981010001">99 81 01 00 01</a>  </li> 
    <li> Correo: <a href="mailto:contacto@grafoexpress.com">contacto@grafoexpress.com</a> </li> 
    </ul>
</div>
      </address>
    
            
  </div>
  <div class="col-sm-6 col-xs-12 pull-left fbp" style="    padding-bottom: 1%;">

     <div class="fb-page  " data-href="https://www.facebook.com/grafoexpress/" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/grafoexpress/"><a href="https://www.facebook.com/grafoexpress/">Grafoexpress</a></blockquote>
    </div>
    </div>
    </div>





</div>
  <div class="divider" id="section4"></div>
</div><!--/row-->
  
  

<div class="row contactArea">
<div class="divider" id="section5"></div>
  <hr>
  
  <div class="col-sm-9 col-sm-offset-1">
      <form action="#" method="post" id="formulario_escolar">
      <div class="row form-group">
        <div class="col-md-12">
        <h1 style=" color: white">Contactanos</h1>        
        </div>
        <!-- status-->
    <div class="form-group">
     <p class="status" style="font-size:30px;"></p>
    </div>
    <!-- end status-->
        <div class="col-xs-4">
          <input type="text" class="form-control nombre_ver" value="" name="nombre_contacto" placeholder="Nombre">
        </div>
        <div class="col-xs-6">
          <input type="text" class="form-control nombre_compa"   value="" name="nombre_compa" placeholder="Compañia">
        </div>
      </div>
      <div class="row form-group">
          <div class="col-xs-5">
          <input type="text" class="form-control correo_ver"  value="" name="correo_contacto" placeholder="Correo">
          </div>
          <div class="col-xs-5">
          <input type="text" class="form-control telefono_ver"  value="" name="telefono_contacto" placeholder="Teléfono">
          </div>
      </div>
      <div class="row form-group">
          <div class="col-xs-10">
            <textarea class="form-control comentario_ver"   value="" name="comentario_envia" placeholder="Comentario"></textarea>
          </div>
      </div>
      <div class="row form-group">
          
          <!--<div class="col-xs-10">
            <input type ="button" value="Enviar" class="btn btn-success enviar-form">
          </div>
-->
      </div>
    </form>
  </div>
  
</div><!--/row-->

</div><!--/wrap-->

<div id="footer">
  <div class="container  ">
  
        <div class="col-sm-6 col-xs-12 pull-left " >
    <p class="text-muted">Copyright ©2016 Grafoexpress.</p>
    </div> 

  
</div>
</div>
<ul class="nav pull-right scroll-top">
  <li><a href="#" title="Scroll to top"><i class="glyphicon glyphicon-chevron-up"></i></a></li>
</ul>


<div class="modal" id="myModal" role="dialog">
  <div class="modal-dialog">
  <div class="modal-content">
	<div class="modal-header">
		<button class="close" type="button" data-dismiss="modal">×</button>
		<h3 class="modal-title"></h3>
	</div>
	<div class="modal-body">
		<div id="modalCarousel" class="carousel">
 
          <div class="carousel-inner">
           
          </div>
          
          <a class=" carousel-control left" href="#modaCarousel" data-slide="prev"><i class="glyphicon glyphicon-chevron-left"></i></a>
          <a class="carousel-control right" href="#modalCarousel" data-slide="next"><i class="glyphicon glyphicon-chevron-right"></i></a>
          
        </div>
	</div>
	<div class="modal-footer">
		<button class="btn btn-default" data-dismiss="modal">Cerrar</button>
	</div>
   </div>
  </div>
</div>


	<!-- script references -->
	 <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		 <script src="https://maps.googleapis.com/maps/api/js"></script>
    <script>
            function initialize() {
            var mapCanvas = document.getElementById('map-canvas');
            var mapOptions = {
            center: new google.maps.LatLng(21.1449179,-86.8472752),
            zoom: 19,
            mapTypeId: google.maps.MapTypeId.TERRAIN
            }
            var map = new google.maps.Map(mapCanvas, mapOptions)
            var image = 'imagenes/icono.png';
            var myLatLng = new google.maps.LatLng(21.1449179,-86.8472752);
            var beachMarker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image
            });
            }
            google.maps.event.addDomListener(window, 'load', initialize);

    </script>
  
		<script src="js/scripts.js"></script>
    <script src="js/directorio-escolar-eventos.js"></script>
    <script type="text/javascript" src="../assets/js/jquery-1.11.3.min.js"></script>
      <script type="text/javascript" src="../assets/js/bootstrap.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
        <script type="text/javascript" src="../assets/efectos/js/jquery-1.9.1.js"></script>     
        <script src="../assets/efectos/js/jquery-ui-1.10.3.custom.min.js"></script> 



    <div id="fb-root" ></div>
<script>(function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0];
if (d.getElementById(id)) return;
js = d.createElement(s); js.id = id;
js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.5";
fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>

	</body>



<script>
$('.carousel').carousel({
interval: 3000 //changes the speed
})
</script>

</html>