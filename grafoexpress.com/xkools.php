n  b<?php 
require_once("engine/redfunction.php");
error_reporting();
$schoolestructure = new redEScuelas();
$varpath = $schoolestructure->path =""; //url native three
include "engine/connect.php";
//mysql_set_charset("UTF8", $connection);

//=======================Variables==============//
$ciudad=(string) "cancun";
$ciudadfind= (int) 1;
$ciudadok="Cancún";
//=======================End Variabf$zles==============//
?>

<!DOCTYPE html >
<html xmlns="https://www.w3.org/1999/xhtml"><head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8, $connection" />
<title>Escuelas en Cancun, guarderias, kinders, preescolar, primaria, secundaria, preparatoria, universidad</title>
<meta name="description" value= "Escuelas [Educacion,colegios, escuelas Cancun] / Escuelas Primarias, Secundarias, Preparatorias y Universidades [Colegios institutos] en Cancun y Quintana Roo Mexico"/>
<meta name="keywords" content="Escuelas Primarias, Secundarias, Preparatorias, Universidades, Colegios, kinders, guarderias, preescolar,  institutos, Escuelas, Educacion,colegios, escuelas en cancun">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">

<?php
$schoolestructure->outlinks($varpath);// call method to links css
?>

<!-- FIN DE script aparece y desaparece el anuncio de cookies-->
<!-- inicio de estilo para anuncio de cookies-->



<style type="text/css">
  #barraaceptacion
  {
    display:block;
    left:-500px;
    bottom:0px;
    width:300px;
    text-align:center;
    background: rgba(0,0,0,0.6);
    color:#fff;
    z-index:99999;
   padding:20px;
   position: fixed;
   border-radius: 15px
 
}

    @media (max-width: 768px) {  
        #barraaceptacion{
            left: 100px !important;
        }
            
    }
    @media (min-width: 950px) {  
        #barraaceptacion{
            left: -5px !important;
        }
            
    }
    


@media (max-width: 1050px) 
{
     
  
    
  #barraaceptacion 
  {
    width:100%;
    bottom:15px;
    
 
  }
  
 
}

#barraaceptacion1
  {
    display:block;
    left:15px;
    bottom:30px;
    width:200px;
    text-align:center;
    background: rgba(0,0,0,0.6);
    color:#fff;
    z-index:99999;
   position: fixed;
   border-radius: 110px
 
}

    @media (max-width: 768px) {  
        #barraaceptacion1{
            left: 100px !important;
        }
            
    }
    @media (min-width: 950px) {  
        #barraaceptacion1{
            left: 1050px !important;
        }
            
    }
    


@media (max-width: 1000px) 
{
     
  

 
}
</style>
<!-- inicio de estilo para anuncio de cookies-->
<!--//FIN BLOQUE COOKIES-->
<body>
<!--Nav Menu-->

<nav class="navbar navbar-default navbar-fixed-top listado-de-escuelas-en-cancun-menu">

<!-- ------------------------------------------------------>
<div id="barraaceptacion">
  Esta web usa cookies propias para facilitar tu navegación y de terceros derivadas de su uso en nuestra web para mejorar la usabilidad y temática de la misma con Google Analytics. Los datos personales no son consultados. Si continúas navegando consideramos que aceptas su uso. <br/>
  <button class="btn btn-warning"  onclick="PonerCookie();"  style="color: #fff">Aceptar</button>
</div>
<!--whatsapp-->

   
<div id="barraaceptacion1" class"col-lg-6" >     
          <a href="https://api.whatsapp.com/send?phone=529993870040&text=Necesito%20que%20se%20pongan%20en%20contacto%20conmigo"
          target="_blank"><img  class="responsive"  src="/assets/img/boton-whatsapp.png"  width="180"></a>
    </div>
    
    
    
    


  <div class="container" >
          <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header" style="vertical-align: center;">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/"><i class="glyphicon glyphicon-home"></i> Inicio</a>
          <a class="navbar-brand" href="tel:9988807441" style="color: #006699;font-size: 10pt"><i class="glyphicon glyphicon-phone"></i> (998) 880 7441</a>
          
          

        </div>
   
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
        <!--  <li></li>-->
            <li><a href="/registro.php"><i  class="glyphicon glyphicon-pencil education"></i> Registra tu escuela</a></li>
            <li>
              <a href="/anuncios/busco-empleo.php"><i class="glyphicon glyphicon-briefcase"></i> Ofertas de trabajo</a>
            </li>
            <li>
              <a href="/puntos-de-distribucion.php"><i class="glyphicon glyphicon-map-marker"></i> Puntos de distribución</a>
            </li>
            <li><a href="https://1erdirectorioescolar.com/contacto.php"><i class="glyphicon glyphicon-envelope"></i> Contactanos</a></li>

            <li>
              <a class="btn btn-default btn-outline btn-circle"  data-toggle="collapse" href="#nav-collapse1" aria-expanded="false" aria-controls="nav-collapse1"><i class="glyphicon glyphicon-education education"></i> Categorias</a>
            </li>
          </ul>
          <ul class="collapse nav navbar-nav nav-collapse" id="nav-collapse1">
            <li><a href="<?php echo $ciudad;?>/niveles<?php echo $ciudad;?>/"><img src="/imagenes/icon-niveles.png" width="30"> Escuelas por niveles</a></li>
            <li><a href="<?php echo $ciudad;?>/especialidad<?php echo $ciudad;?>/"><img src="/imagenes/icon-especialidad.png" width="30"  border="0" /> Escuelas por especialidad</a></li>
            <li><a href="<?php echo $ciudad;?>/deportivas<?php echo $ciudad;?>/"><img src="/imagenes/icon-deportivas.png" width="30"  border="0" /> Escuelas Deportivas</a></li>
            <li><a href="<?php echo $ciudad;?>/salud<?php echo $ciudad;?>/"><img src="/imagenes/icon-salud.png" width="30"  border="0" / >Escuelas para la salud</a></li>
            <li><a href="<?php echo $ciudad;?>/graduaciones<?php echo $ciudad;?>/"><img src="/imagenes/icon-eventos.png" width="30"  border="0" /> Graduaciones y Eventos</a></li>
            <li><a href="<?php echo $ciudad;?>/proveedores<?php echo $ciudad;?>/"><img src="/imagenes/icon-proveedores.png" width="30"  border="0" / >Proveedores Escolares</a></li>
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
    <a href="/index.php"><img src="/imagenes/directorio-escolar-cancun.png" width="270" height="100" alt="Escuelas en Cancun, [universidades en cancun]"></a>
  </div>
  <!--End logo-->
  <!--Finder design -->
  <div class="col-md-8 col-xs-12 directorio-cancun">
  <form id="form1" name="form1" method="get" action="cancun/buscador.php">

    <div class="col-md-8 col-xs-13 escuelas-en-cancun-finder">
     <input type="text" name="termino"  class="form-control" id="termino" placeholder="Buscar" />
    </div>
    <div class="col-md-2 col-xs-12 escuelas-en-cancun-buscador">
      <input name="lupa" type="submit" class="findbutton" id="lupa" value=" ">
    </div>
    <div class="col-md-3 col-xs-12 universidades-en-cancun-lista">
    <select name="ciudad" class="form-control" id="ciudad" onchange="cambiaurl(this.value);">
      <option value="/xkools.php" selected="selected">Cancún</option>
      <option value="xalapa">Xalapa</option>
      <option value="merida">Mérida</option>
      <option value="playadelcarmen">Playa de Carmen</option>
      <option value="valladolid">Valladolid</option>
      <option value="campeche">Campeche</option>
      <option value="tulum">Tulum</option>
      <option value="puertomorelos">Puerto Morelos</option>
      <option value="islamujeres">Isla Mujeres</option>
      <option value="cozumel">Cozumel</option>
       <option value="tuxtla">Tuxtla Gutiérrez</option>
        <option value="villahermosa">Villahermosa</option>
      </select>     
      
    </div>

    </form>
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
<div style="background: #fff" align="center">
<div class="container" align="center" style="background: #fff">
    <style type="text/css">
  .port
  { 
    padding: 0px;
  }
  .contenedor:hover .imagen {-webkit-transform:scale(1.0);transform:scale(1.1);transition: .3s ease-in-out;}
.contenedor {overflow:hidden;}
  #framebanner{ width: 100%;height: 253px }

  @media (max-width: 1662px)
  {
    #framebanner{ width: 100%;height: 240px }
  }
    @media (max-width: 1024px)
  {
    #framebanner{ width: 100%;height: 170px }
  }
      @media (max-width: 768px)
  {
    #framebanner{ width:100%;height: 400px }
  }
          @media (max-width:414px)
  {
    #framebanner{ width: 100%;height: 450px }
  }
        @media (max-width:375px)
  {
    #framebanner{ width: 100%;height: 320px }
    <div
  }
          @media (max-width:320px)
  {
    #framebanner{ width: 100%;height: 320px }
  }
</style>
 
</div>
</div>
<!--Directorio Escolar Cancun Contacto-->
<div class="container directorio-en-cancun">
  <!-- Contain contacto-->
  <div class="container desktopcontact">
    <?php
      $schoolestructure->redessocialestop();
     ?>

  </div>
  <!-- End contain Contacto-->
  <!-- Contain contacto-->
 <!--   <div class="container responsivepcontact">
    <div class="col-md-5 col-xs-12">
      <div class="col-md-2 col-xs-2"> 
        <img  class="img-responsive img img-rounded directorio-en-cancun-numeros" src="/assets/img/telefono-de-escuelas-en-cancun.png" width="30">
      </div>
      <div class="col-md-4 col-xs-3 contacto-cancun-div">
      <p class="telefono-de-escuelas-en-cancun"><a href="tel:9988807441"><b>(998) 880-74-41</b></a></p>
      </div>
      <div class="col-md-5 col-xs-3">
        <p class="telefonos-de-escuelas-en-cancun-div"><a href="tel:018005708609"><b>01-800-57-08-609</b></a></p>
      </div>
    </div>

    <div class="col-md-5 col-xs-5 redes-sociales-div">
     
        <div class="col-md-2 col-xs-3 facebook-icon">
          <a href="https://1erdirectorioescolar.com/contacto.php" target="_blank"><img  class="img-responsive" src="/assets/img/informacion-de-escuelas-correo.png" width="30"></a>
        </div>      
        <div class="col-md-2 col-xs-3 facebook-icon">
          <a href="https://www.facebook.com/1erDirectorioEscolar" target="_blank"><img  class="img-responsive" src="/assets/img/escuelas-en-ccebook.png" width="30"></a>
        </div>
        <div class="col-md-2 col-xs-3 facebook-icon">
          <a href="https://twitter.com/Descuelas" target="_blank"><img  class="img-responsive" src="/assets/img/escuelas-en-cancun-twitter.png" width="30"></a>
        </div>        
        <div class="col-md-2 col-xs-3 facebook-icon">
          <a href="https://www.youtube.com/channel/UCOsbkQf68XJFxB_zLf24tuQ" target="_blank"><img  class="img-responsive" src="/assets/img/escuelas-en-cancun-youtube.png" width="30"></a>
        </div>         
 
    </div>

  </div>
 End contain Contacto-->  
</div>

       <?php
          $schoolestructure->portadas($ciudad);
          $schoolestructure->footerjs($varpath);
          include "findercitys.php";
       ?> 


<!--================================Content======================-->
<div  class="container" >
    <div class="row">
      <div class="col-md-6 col-sm-6 col-xs-12" ><br/>
        <img src="assets/img/portadas/cancun.png" width="100%">
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12" ><br/>
        <img src="assets/img/portadas/que-escuela-buscas.png" width="100%">
      </div>
    </div>
 <!--  <div class="col-lg-3 col-md-3 col-xs-12 locacion">
   <h1 style="margin-bottom:10px"><?php //$schoolestructure->findercitys($ciudadfind);?></h1>
  <span class="minicities"><a href="/xkools.php"><strong>Cancún</strong></a></span>
   <span class="minicities"><a href="/merida/">Mérida</a></span> 
   <span class="minicities"><a href="/playadelcarmen/">Playa del Carmen</a></span>  
   <span class="minicities"><a href="/xalapa/">Xalapa</a></span> 
   <span class="minicities"><a href="/valladolid/">Valladolid</a></span> 
   <span class="minicities"><a href="/campeche/">Campeche</a></span><span class="minicities"><a href="/tulum/">Tulum</a></span>
  </div>-->
  <?php
   $schoolestructure->categories($ciudad, $ciudadfind);
  ?>

</div> 


<br/>



<!--Star Containt-->
<div class="container " style="background: #fff"><br/>
  <div class="row">
    <div class="col-md-6 col-sm-12">
      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                  <!-- Indicators -->
                  <?php
                  //===================================================Count the images================================================//
                  $findcarousel= mysql_query(sprintf("SELECT * FROM homerotator
                                                      WHERE borrado=%d AND activo =%d AND plaza='%s' AND interes=0 ORDER BY posicion", 0,1,"Cancun")
                                                      )or die(mysql_error()); 
                  $rows= mysql_num_rows($findcarousel);
                  print('<ol class="carousel-indicators bullets-cun">');
                  for($i=0; $i<=$rows ; $i++){
                    if($i == 0){
                      print('<li data-target="#carousel-example-generic" data-slide-to="'.$i.'" class="active"></li>');
                    }else{
                      if($i !=0){
                      print('<li data-target="#carousel-example-generic" data-slide-to="'.$i.'"></li>');       
                      }
                    } 

                  }

                  print('</ol>'); 
                  ?>

                  <!-- Wrapper for slides -->
                  <div class="carousel-inner preescolares-en-cancun-slide" role="listbox" align="center">
                  <?php
                  //===================================================Show images===========================================//
                  $findcarousel= mysql_query(sprintf("SELECT * FROM homerotator
                                                      WHERE borrado=%d AND activo =%d AND plaza='%s' AND interes=0 ORDER BY posicion", 0,1,"Cancun")
                                                      )or die(mysql_error()); 
                  $countimages= 0;
                  while($row= mysql_fetch_array($findcarousel)){

                    $fileimg= array(
                      "idr"=>$countimages++,
                      "url"=>$row["url"],
                      "archivo"=>$row["archivo"],
                      "cliente"=>stripslashes($row["cliente"])
                      );
                    if($fileimg['idr'] == 0){
                    print('<div class="item active" >');
                    print('
                               <a href="'.$fileimg["url"].'"><img class="img-responsive"src="/appdirectorio/portada/'.$fileimg["archivo"].'" width="100%"  border="0" alt="'.$fileimg['cliente'].'" /></a>
                          ');
                    print('</div>');
                    }
                    if($fileimg['idr']>0){
                    print('<div class="item" >');
                    print('
                               <a href="'.$fileimg["url"].'"><img class="img-responsive"src="/appdirectorio/portada/'.$fileimg["archivo"].'" width="100%"  border="0" alt="'.$fileimg['cliente'].'" /></a>
                          ');
                    print('</div>');      
                    }


                  }
                  ?>
                  </div>

                  <!-- Controls -->
                  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true" ></span>
                    <span class="sr-only">Next</span>
                  </a>
      </div> 
    </div>
    <div class="col-md-3 col-sm-6" style="padding: 0px"><div style="background: #61AE24;color: #fff;padding-top: 3px;padding-bottom: 3px;font-weight: bold;">
      <h4 align="center" ><i class="glyphicon glyphicon-flag"></i> <p></p>Te puede interesar</p> Escuelas en cancún</h4></div>
      
     
      <?php //
                        $query=mysql_query(sprintf("SELECT * FROM homerotator 
                        WHERE borrado=0 and plaza='Cancun' and interes=1 ORDER BY posicion limit 9")
                        )or die(mysql_error());
                        while($row= mysql_fetch_array($query)){
                         /* echo "<div class=''>

                          </div>";
                          */print('
                            <div class="col-md-4  col-xs-4 " style="padding:2px">
                              <div style="border:1px solid #000;border-radius:7px">
                               <a href="'.$row["url"].'"><img  src="appdirectorio/interes/'.$row["archivo"].'" width="100%" height="100px" border="0" style="border-radius:7px" /></a>
                               </div>
                               </div>
                            
                            ');
                        }

                        ?>
                          
       
    </div>
    <div class="col-md-3 col-sm-6" align="center">
      <div class="fb-page" data-href="https://www.facebook.com/1erDirectorioEscolar" data-width="250" data-height="427" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/1erDirectorioEscolar"><a href="https://www.facebook.com/1erDirectorioEscolar">1er Directorio Escolar</a></blockquote></div></div>
    </div>
   
                
                 
                

               
  </div>
</div>
<div class="container">
  <?php include "inc-footer.php";?>
</div>


<!--========================================End Contenido=========================-->


<!--Footer-->
<?php
include "cancun-numeros-de-escuelas-footer.php";

?>





<!--Popup que aparece al inicio de carga  -->
<style type="text/css">
  #modalito
  {
    top: 0%;
    left: -5%;
    width:70%;
  }
  .modal-content
  {
    width: 60%;
  }
 @media (max-width: 540px) {
  .btn-subir {
    margin-top: -25px !important;
margin-left: auto;
font-size: 10px;
  }
}

.btn-subir {
    margin-top: -48px;
    margin-left:auto;
}

.btn-ver {
    margin-top: -100px;
    margin-right:auto;
}
  



</style>
  <div class="modal fade in" id="miModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style=" background: rgba(0,0,0,0.5);">
        <div class="modal-dialog"   id="modalito">
          <div  style="background:transparent;border-color:transparent" > 

          <a href="javascript:cerar()"  style="float:right;position:fixed">
                <img src="../assets/img/cerrar2.png" />
              </a>
              <p></p>
               <a href="http://promoxiononline.com/" target="_blank"><img  class="img-responsive" src="../assets/img/banner-navidad-promoxion.png" width="60%"  height="240"></a></p>
             
      
           <a onclick="goPromo('ver')" 
            style="width:95%;color:#FFD700" class="btn btn-secondary btn-subir">
           </a>
           
           <!--<a onclick="goPromo('subir')" 
            style="width:48%;color:transparent;background:transparent;border:none" class="btn btn-secondary btn-subir">
            subir<br>Promoción
           </a>-->
            <div id="modalito">
          <div  style="background:transparent;border-color:transparent" > 

           
           <a href="javascript:cerar()"  style="float:right;position:fixed">
                <img src="../assets/img/cerrar2.png" />
              </a>
           
             <!--  <a href="https://redescuelas.com/perfil-de-cliente.php?idCliente=83&idCiudad=1&idioma=es&tp=2" target="_blank"><img  class="img-responsive" src="../assets/img/buen-fin-uvy.jpeg" width="86%"></a>-->
             
               <a >
                  <a href="https://universoxxi.com/" target="_blank"><img  class="img-responsive" src="/assets/img/UNIVERSO-XXI-BANNER.png" width="86%" ></a>
     
    </a>-->
           <a onclick="goPromo2('ver')" 
            style="width:85%;color:#FFD700" class="btn btn-secondary btn-subir">
             ¡Ver promoción!
           </a>
             <!-<a >
                  <a href="https://www.uvy.edu.mx" target="_blank"><img  class="img-responsive" src="/assets/img/buen-fin-uvy.jpeg" style="margin-top:-80%; margin-left:88%;width:83%; "></a>
     
    </a>-->
   
            </div>
          </div>
        </div>
      </div>
      
      
      
      <script type="text/javascript">
            function cerar()
            {
                    $("#miModal").fadeOut(1000);
                   $("#barraaceptacion").fadeIn(3000);
            }
            function verPromocion()
            {
                  $("#miModal").fadeIn();
            }
            function goPromo(url){
                if(url == 'ver'){
                    window.open("https://www.uvy.edu.mx","_blank");
                }else{
                    window.open("https://1erdirectorioescolar.com/promociones/","_blank");
                }
            }
             function goPromo2(url){
                if(url == 'ver'){
                    window.open("https://redescuelas.com/perfil-de-cliente.php?idCliente=83&idCiudad=1&idioma=es&tp=2","_blank");
                }else{
                    window.open("https://1erdirectorioescolar.com/promociones/","_blank");
                }
            }
          </script>
<!-- fin de popup que aparece al inicio de carga-->

<script type="text/javascript" src="/assets/js/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="/assets/js/bootstrap.js"></script>
<script type="text/javascript" src="scripts/jquery.nivo.slider.pack.js"></script>

    <script type="text/javascript">
    $(document).ready(function() {
     setTimeout(function() {
        $("#miModal").fadeIn();
            $("#barraaceptacion").fadeIn(3000);
    },5000);
    setTimeout(function() {
        $('#miModal').fadeOut('fast');
}, 10000);
    });
  </script>

<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v2.4";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>
<script language="javascript">
function cambiaurl(param){
  var pagina=param;
  if(pagina=='xkools.php') { window.location.href = "/xkools.php"; }
  if(pagina=='xalapa') { window.location.href = "/xalapa/"; }
  if(pagina=='playadelcarmen') { window.location.href = "/playadelcarmen/"; }
  if(pagina=='merida') { window.location.href = "/merida/"; }
  if(pagina=='valladolid') { window.location.href = "/valladolid/"; }
  if(pagina=='campeche') { window.location.href = "/campeche/"; }
  if(pagina=='tulum') { window.location.href = "/tulum/"; }
  if(pagina=='puertomorelos') { window.location.href = "/puertomorelos/"; }
  if(pagina=='islamujeres') { window.location.href = "/islamujeres/"; }
  if(pagina=='cozumel') { window.location.href = "/cozumel/"; }
  if(pagina=='tuxtla') { window.location.href = "/tuxtla/"; }
  if(pagina=='villahermosa') { window.location.href = "/villahermosa/"; }

  }
</script>


<script language="javascript"> 

  function formulario()
  {
    $("#formulario").modal("show");
  }
   function mostrarespecificaciones()
  {
     $("#especificaciones").show();
  }
    function ocultarespecificaciones()
  {
     $("#especificaciones").hide();
  }

</script>

</head>
<!--//BLOQUE COOKIES-->
 
<script>
function getCookie(c_name){
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1){
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1){
        c_value = null;
    }else{
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1){
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start,c_end));
    }
    return c_value;
}
 
function setCookie(c_name,value,exdays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}
 
if(getCookie('tiendaaviso')!="1"){
    document.getElementById("barraaceptacion").style.display="block";
}
function PonerCookie()
{
    setCookie('tiendaaviso','1',365);
    $("#barraaceptacion").remove();
   // document.getElementById("barraaceptacion").style.display="none";
}
</script>
<!-- Este script aparece y desaparece el anuncio de cookies-->
<script>
$(function(){
$(window).scroll(function(){
if ($(window).scrollTop() > 30)
{
$("#barraaceptacion").fadeOut();
}
else
{
$("#barraaceptacion").fadeIn();
}
});
});
</script>

</body>
</html>
<?php 
mysql_close ($connection);

?>