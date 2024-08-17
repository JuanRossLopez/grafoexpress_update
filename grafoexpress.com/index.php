<?php
if (isset($_POST["submit"])) {
  $name = $_POST['nombre'];
  $name_company = $_POST['nombre_compa'];
  $email = $_POST['correo'];
  $message = $_POST['comentario'];
  $tel = $_POST['telefono'];
  $to = "contacto@grafoexpress.com";
  //$to="ulisesyrcun@gmail.com";
  $subject = "Mensaje desde prueba web grafoexpress";
  $body = "De: " . $name . "\n Correo:" . $email . "\n Comentarios: " . $message . " \n Compañia:" . $name_company . " \n Teléfono:" . $tel . " . ";
  $from = 'Forma de contacto web Grafoexpress';

  mail($to, $subject, $body, $from);

  if (mail($to, $subject, $body, $from)) {
    $result = '<div class="alert alert-success">Su mensaje a sido enviado con Éxito.</div>';
  } else {
    $result = '<div class="alert alert-danger">No enviado.</div>';
  }
}
?>


<?php

error_reporting(0);

function cleanQuery($string)
{
  if (get_magic_quotes_gpc())  // prevents duplicate backslashes 
  {
    $string = stripslashes($string);
  }
  $badWords = array("/delete/i", "/update/i", "/union/i", "/insert/i", "/drop/i", "/http/i", "/--/i", "/script/i", "/.css/i");
  $string = preg_replace($badWords, "", $string);


  $string = mysql_escape_string($string);
  return $string;
}
function truncate_str($str, $maxlen)
{
  if (strlen($str) <= $maxlen) return $str;

  $newstr = substr($str, 0, $maxlen);
  if (substr($newstr, -1, 1) != ' ') $newstr = utf8_encode(substr($newstr, 0, strrpos($newstr, " ")));

  return $newstr;
}

function is_bot()
{
  $botlist = array(
    "Teoma",
    "alexa",
    "froogle",
    "Gigabot",
    "inktomi",
    "looksmart",
    "URL_Spider_SQL",
    "Firefly",
    "NationalDirectory",
    "Ask Jeeves",
    "TECNOSEEK",
    "InfoSeek",
    "WebFindBot",
    "girafabot",
    "crawler",
    "www.galaxy.com",
    "Googlebot",
    "Scooter",
    "Slurp",
    "msnbot",
    "appie",
    "FAST",
    "WebBug",
    "Spade",
    "ZyBorg",
    "rabaz",
    "Baiduspider",
    "Feedfetcher-Google",
    "TechnoratiSnoop",
    "Rankivabot",
    "Mediapartners-Google",
    "Sogou web spider",
    "WebAlta Crawler",
    "TweetmemeBot",
    "Butterfly",
    "Twitturls",
    "Me.dium",
    "Twiceler",
    "Purebot",
    "facebookexternalhit",
    "Yandex",
    "CatchBot",
    "W3C_Validator",
    "Jigsaw",
    "PostRank",
    "Purebot",
    "Twitterbot",
    "Voyager",
    "zelist"
  );

  foreach ($botlist as $bot) {
    if (strpos($_SERVER['HTTP_USER_AGENT'], $bot) !== false)
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
values ('$country','$city','$date', '$time', '$ip', '$query_string', '$http_referer' ,'$http_user_agent' , '$request_uri', $isbot, 1)") or die(mysql_error());


  // ============== End Trakcer =============//

}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="imagenes/icono.jpg">
  <meta name="description" content="Somos un grupo de profesionales expertos en impresión, marketing, producción y comunicación creativa, cuyo compromiso es lograr la total satisfacción de nuestros clientes mediante la oferta de un servicio competitivo.">
  <meta name="keywords" content="imprentas en cancún, servicios de impresión, impresión de alta calidad, impresión digital, imprentas profesionales">
  <meta name="robots" content="index, follow">
  <title>Imprentas en Cancún | Grafoexpress 2024</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="css/styles.css" rel="stylesheet">

</head>

<body>

  <!-- Wrap all page content here -->
  <div id="wrap">

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
            <img src="imagenes/banner-1.png">

            <!--<img src="imagenes/slidee.jpg">-->
            <div class="container">
              <div class="carousel-caption">

                <p></p>
              </div>
            </div>
          </div>
          <div class="item">
            <!--  <img src="imagenes/slide12.jpg">-->
            <img src="imagenes/banner-2.png">
            <div class="container">
              <div class="carousel-caption">

                <p></p>
              </div>
            </div>
          </div>
          <div class="item">
            <img src="imagenes/banner-3.png">
            <!--<img src="imagenes/slide2.jpg"> -->
            <div class="container">
              <div class="carousel-caption">

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
            <li><a data-toggle="collapse" data-target=".navbar-collapse" href="http://grafoexpress.com/puertas_abiertas_360_int/">Proyectos Especiales</a></li>

            <li><a data-toggle="collapse" data-target=".navbar-collapse" href="#section5">Contáctanos</a></li>

          </ul>
        </div><!--/.nav-collapse -->
      </div><!--/.container -->

    </div><!--/.navbar -->
    <style>
      #barraaceptacion1 {
        display: block;
        left: 15px;
        bottom: 30px;
        width: 200px;
        text-align: center;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        z-index: 99999;
        position: fixed;
        border-radius: 110px
      }

      @media (max-width: 768px) {
        #barraaceptacion1 {
          left: 100px !important;
        }

      }

      @media (min-width: 950px) {
        #barraaceptacion1 {
          left: 1050px !important;
        }

      }



      @media (max-width: 1050px) {
    </style>

    <!-- Begin page content -->
    <!--<div class="divider" id="section1"></div>-->
    <div class="divider" id="section2"></div>
    <div class="container">

      <div class="col-sm-11 col-sm-offset-1">
        <div id="barraaceptacion1" class"col-lg-6">
          <a href="https://api.whatsapp.com/send?phone=529993870040&text=Necesito%20que%20se%20pongan%20en%20contacto%20conmigo"
            target="_blank"><img class="responsive" src="imagenes/boton-whatsapp.png" width="180"></a>
        </div>



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
          Somos una de las mejores imprentas en Cancún, un grupo de profesionales expertos en impresión, marketing, producción y comunicación creativa, cuyo compromiso es lograr la total satisfacción de
          nuestros clientes mediante la oferta de un servicio competitivo.
          <br>
          <br>
          GrafoExpress: Donde la Excelencia en Impresión, Creatividad y Soluciones Gráficas se Fusionan para Impulsar tu Éxito

          En un mundo donde la primera impresión es crucial, ¿por qué conformarse con menos que lo extraordinario? En GrafoExpress, no solo entendemos la importancia de destacar en un mercado saturado de información, sino que también nos apasiona brindarte las herramientas necesarias para alcanzar tus metas con éxito. Somos más que un servicio de impresión; somos tu socio estratégico en marketing, producción y comunicación creativa, con un enfoque apasionado en soluciones gráficas. Permítenos llevarte en un viaje donde la calidad excepcional se une a la innovación, donde tu visión toma forma y donde la satisfacción del cliente es nuestro estandarte.
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
        <h2 style="padding:20px;background-color:rgba(5,5,5,.5)">Productos<!Clientes &amp; Socios!>
        </h2>
      </div>
    </section>

    <div class="divider"></div>

    <style>
      .panel-thumbnail img {
        width: 100%;
        /* Establece el ancho de la imagen al 100% del contenedor */
        height: auto;
        /* Mantiene la proporción de la imagen */
      }
    </style>
    </head>

    <body>

      <div class="bg-4">
        <div class="container ">
          <div class="row ">
            <div class="col-sm-3 col-xs-12 ">
              <div class="panel panel-default">
                <div class="panel-thumbnail"><a href="#" title="Publicidad"><img src="imagenes/servicio-1.png"></a></div>
                <div class="panel-body">
                  <p></p>
                </div>
              </div><!--/panel-->
            </div><!--/col-->

            <div class="col-sm-3 col-xs-12">
              <div class="panel panel-default">
                <div class="panel-thumbnail"><a href="#" title="Diseño"><img src="imagenes/servicio-2.png"></a></div>
                <div class="panel-body">
                  <p></p>
                </div>
              </div><!--/panel-->
            </div><!--/col-->

            <div class="col-sm-3 col-xs-12">
              <div class="panel panel-default">
                <div class="panel-thumbnail"><a href="#" title="Social Media"><img src="imagenes/servicio-4.png"></a></div>
                <div class="panel-body">
                </div>
              </div><!--/panel-->
            </div><!--/col-->

            <div class="col-sm-3 col-xs-12">
              <div class="panel panel-default">
                <div class="panel-thumbnail"><a href="#" title="Mercadotecnia"><img src="imagenes/servicio-3.png"></a></div>
                <div class="panel-body">
                </div>
              </div><!--/panel-->
            </div><!--/col-->
          </div><!--/row-->
        </div><!--/container-->
      </div><!--/bg-4-->


  </div><!--/row-->
  </div><!--/container-->
  </div>

  <div class="divider" id="section4"></div>

  <div class="row">
    <div class="col-md-8 col-md-offset-1">
    </div>
  </div>

  <div class="row abajo ">

    <div class="col-sm-10 col-sm-offset-1">
      <h1>Localización</h1>
    </div>

    <div id="map-canvas" class="col-sm-offset-2"></div>

    <hr>




    <div class="col-sm-12 col-xs-12">
      <div class="col-sm-6 col-xs-12 pull-right" style="margin-top: 15%;">

        <address>
          <div class="tant letrinas">
            <ul style="list-style-type:none ">
              <br>
              <br>
              <li>Super-Manzana:46&nbsp /&nbsp Manzana:9&nbsp /&nbsp Lote:4 &nbsp;<br> Cancún, Q. Roo.</li>
              <li> Teléfono: <a style="color: #FFFFFF" href="tel:998 880 7441">998 880 7441 </a></li>
              <li> WhatsApp: <a style="color: #FFFFFF" href="tel:999 387 0040">999 387 0040,</a></li>
              <a style="color: #FFFFFF" href="tel:998 200 6912">998 200 6912</a> </li>
              <!-- <li> Correo: <a style="color: #FFFFFF" href="mailto:contacto@grafoexpress.com">contacto@grafoexpress.com</a> </li> -->
            </ul>

          </div>
        </address>


      </div>
      <div class="col-sm-6 col-xs-12 pull-left fbp" style="    padding-bottom: 1%;">

        <div class="fb-page  " data-href="https://www.facebook.com/Grafoexpress-102434868256937" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="true">
          <div class="fb-xfbml-parse-ignore">
            <blockquote cite="https://www.facebook.com/grafoexpress/"><a href="https://www.facebook.com/grafoexpress/">Grafoexpress</a></blockquote>
          </div>
        </div>
      </div>





    </div>
    <div class="divider" id="section4"></div>
  </div><!--/row-->


  <div class="row contactArea">
    <div class="divider" id="section5"></div>
    <!-- status-->
    <div class="form-group">
      <p class="status" style="font-size:30px;"></p>
    </div>
    <!-- end status-->
    <div class="col-sm-9 col-sm-offset-1">
      <form role="form" action="index.php" method="post">
        <div class="row form-group">
          <div class="col-md-12">
            <h1 style="color: white">Contáctanos</h1>
          </div>
          <div class="col-xs-4">
            <input type="text" class="form-control" value="<?php echo htmlspecialchars($_POST['name']); ?>" name="nombre" placeholder="Nombre">
            <?php echo "<p class='text-danger'>$errName</p>"; ?>
          </div>
          <div class="col-xs-6">
            <input type="text" class="form-control" value="<?php echo htmlspecialchars($_POST['name_company']); ?>" name="nombre_compa" placeholder="Compañia">
          </div>
        </div>
        <div class="row form-group">
          <div class="col-xs-5">
            <input type="email" class="form-control" value="<?php echo htmlspecialchars($_POST['email']); ?>" name="correo" id="correo" placeholder="Correo">
            <?php echo "<p class='text-danger'>$errEmail</p>"; ?>
          </div>
          <div class="col-xs-5">
            <input type="text" class="form-control" value="<?php echo htmlspecialchars($_POST['tel']); ?>" id="telefono" name="telefono" placeholder="Teléfono">
          </div>
        </div>
        <div class="row form-group">
          <div class="col-xs-10">
            <textarea class="form-control" rows="2" name="comentario" id="comentario" value="" placeholder="Comentario"><?php echo htmlspecialchars($_POST['message']); ?></textarea>
            <?php echo "<p class='text-danger'>$errMessage</p>"; ?>
          </div>
        </div>
        <div class="row form-group">
          <div class="row col-xs-10">
            <div class="g-recaptcha" data-sitekey="6LdkrG4nAAAAAEEYgCFPCa9M5da_tSme9dibNurZ"></div>
          </div>
        </div>
        <div class="row form-group">
          <div class="row col-xs-10">
            <input id="submit" name="submit" type="submit" value="Enviar" class="btn btn-primary">
          </div>
        </div>

        <?php
        if (isset($_POST["submit"])) {
          // Verificar si se resolvió el captcha
          $recaptcha_secret = "6LdkrG4nAAAAAPxkc3J-BUi8XTYPVcuHC-JguFXE"; // Clave secreta de reCAPTCHA
          $response = $_POST["g-recaptcha-response"];
          $url = "https://www.google.com/recaptcha/api/siteverify";
          $data = array(
            "secret" => $recaptcha_secret,
            "response" => $response
          );
          $options = array(
            "http" => array(
              "header" => "Content-type: application/x-www-form-urlencoded\r\n",
              "method" => "POST",
              "content" => http_build_query($data)
            )
          );
          $context = stream_context_create($options);
          $result = file_get_contents($url, false, $context);
          $result_json = json_decode($result, true);

          // Si la verificación del captcha fue exitosa, procesar el formulario y enviar el correo
          if ($result_json["success"]) {
            // ... (Tu código existente para enviar el correo)
            // Si se envía el correo con éxito, muestras un mensaje de éxito
            $result = '<div class="alert alert-success">Su mensaje ha sido enviado con Éxito.</div>';
          } else {
            // Si la verificación del captcha falló, mostrar un mensaje de error
            $result = '<div class="alert alert-danger">Error. Por favor, verifica que no eres un robot.</div>';
          }
        }
        ?>

        <div class="form-group">
          <div class="col-sm-10 col-sm-offset-2">
            <?php echo $result; ?>
          </div>
        </div>
      </form>
    </div>
  </div>




  </div><!--/row-->

  </div><!--/wrap-->

  <div id="footer">
    <div class="container  ">

      <div class="col-sm-6 col-xs-12 pull-left ">
        <p class="text-muted">Copyright ©2024 Grafoexpress.</p>
      </div>
      <div class="col-md- col-xs-1 ">
        <a href="https://www.facebook.com/Grafoexpress-102434868256937" target="_blank"><img class="img-responsive" src="imagenes/escuelas-en-cancun-facebook.png" width="30"></a>

      </div>
      <div class="col-md- col-xs-1">

        <a href="https://www.instagram.com/grafoexpresss/" target="_blank"><img class="img-responsive" src="imagenes/instagram.png" width="30"></a>

      </div>
    </div>



  </div>
  </div>
  <!--boton arriba-->
  <!--<ul class="nav pull-right scroll-top">
  <li><a href="#" title="Scroll to top"><i class="glyphicon glyphicon-chevron-up"></i></a></li>
</ul>-->


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

  <script src="js/bootstrap.min.js"></script>
  <script src="https://maps.google.com/maps/api/js?key=AIzaSyCF91Ih0YjgPumalQbzNseDspCDtK8Iw98&sensor=true" type="text/javascript"></script>
  <script src="assets/plugins/gmaps/gmaps.js" type="text/javascript"></script>
  <script>
    function initialize() {
      var mapCanvas = document.getElementById('map-canvas');
      var mapOptions = {
        center: new google.maps.LatLng(21.1443802, -86.8475844),
        zoom: 19,
        mapTypeId: google.maps.MapTypeId.TERRAIN
      }
      var map = new google.maps.Map(mapCanvas, mapOptions)
      var image = 'imagenes/icono.png';
      var myLatLng = new google.maps.LatLng(21.1443802, -86.8475844);
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
  <div id="fb-root"></div>
  <script>
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.5";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  </script>



  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>





  <!-- POPUP DE TARJETA NAVIDEÑA -->
  <!--
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
 <div class="modal fade in" id="miModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: block;background: rgba(0,0,0,0.6);">
  <div class="modal-dialog" role="document">
    <div class="modal-content" style="width: 100%;" > <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="cerar()" >
          <span aria-hidden="true">×</span>
        </button>
      <div class="modal-header">
       <img src="imagenes/GRAFOEXPRESS.gif" width="100%">
      </div>

    </div>
  </div>
</div>

<script type="text/javascript">
  function cerar()
  {
//document.getElementById('miModal').style.display = 'none';
 
        //  $('#miModal').toggle(2000);
        // $('#miModal').toggle("linear");
        $("#miModal").fadeOut(1000);
       
       
  }
</script>
    <script type="text/javascript">
    $(document).ready(function() {

    setTimeout(function() {
        $("#miModal").fadeIn(1500);
            $("#miModal").fadeOut(3000);
    },5000);

    });
  </script>
POPUP DE TARJETA NAVIDEÑA -->
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</body>


<script>
  $('.carousel').carousel({
    interval: 3000 //changes the speed
  })
</script>

</html>