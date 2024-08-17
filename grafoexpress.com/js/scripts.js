
$(document).ready(function(){$('.carousel').carousel({interval:false});

/* affix the navbar after scroll below header */
$('#nav').affix({
      offset: {
        top: $('header').height()-$('#nav').height()
      }
});	

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(){
  $('body,html').animate({scrollTop:0},1000);
})

/* smooth scrolling for nav sections */
$('#nav .navbar-nav li>a').click(function(){
  var link = $(this).attr('href');
  var posi = $(link).offset().top;
  $('body,html').animate({scrollTop:posi},700);
});


/* copy loaded thumbnails into carousel */
$('.panel .img-responsive').on('load', function() {
  
}).each(function(i) {
  if(this.complete) {
  	var item = $('<div class="item"></div>');
    var itemDiv = $(this).parent('a');
    var title = $(this).parent('a').attr("title");
    
    item.attr("title",title);
  	$(itemDiv.html()).appendTo(item);
  	item.appendTo('#modalCarousel .carousel-inner'); 
    if (i==0){ // set first item active
     item.addClass('active');
    }
  }
});

/* activate the carousel */
$('#modalCarousel').carousel({interval:false});

/* change modal title when slide changes */
$('#modalCarousel').on('slid.bs.carousel', function () {
  $('.modal-title').html($(this).find('.active').attr("title"));
})

/* when clicking a thumbnail */
$('.panel-thumbnail>a').click(function(e){
  
    e.preventDefault();
    var idx = $(this).parents('.panel').parent().index();
  	var id = parseInt(idx);
  	
  	$('#myModal').modal('show'); // show the modal
    $('#modalCarousel').carousel(id); // slide carousel to selected
  	return false;
});





/* google maps */
google.maps.visualRefresh = true;

var map;
function initialize() {
	var geocoder = new google.maps.Geocoder();
	var address = $('#map-input').text(); /* change the map-input to your address */
	var mapOptions = {
    	zoom: 15,
    	mapTypeId: google.maps.MapTypeId.ROADMAP,
     	scrollwheel: false
	};
	map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
	
  	if (geocoder) {
      geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
          map.setCenter(results[0].geometry.location);

            var infowindow = new google.maps.InfoWindow(
                {
                  content: address,
                  map: map,
                  position: results[0].geometry.location,
                });

            var marker = new google.maps.Marker({
                position: results[0].geometry.location,
                map: map, 
                title:address
            }); 

          } else {
          	alert("No results found");
          }
        }
      });
	}
}
google.maps.event.addDomListener(window, 'load', initialize);

/* end google maps */


});


//==============AJX=========================///
$(".enviar-form").click(function(e){
  var nombre = $(".nombre_ver").val();
  var regexNombre = /[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]+$/;
  var correo = $(".correo_ver").val();
  var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  var telefono = $(".telefono_ver").val();
  var regexTelefono = /[0-9\s]+$/;
  var comentario = $(".comentario_ver").val();
  var regexComentario =/[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]+$/;
  var url ="/engine/mails/envia_comentario.php";
//-> veri nombre
if(nombre != "" && regexNombre.test(nombre)){
//-> veri email
if(regexEmail.test(correo)){
//-->veri telefono
if(telefono != "" && regexTelefono.test(telefono)){
//-> comentario
if(comentario !="" && regexComentario.test(comentario)){


$.ajax({
           type: "POST",
           url: url,
           data: $("#formulario_escolar").serialize(), // serializes the form's elements.
           success: function(data)
           {
             lista= JSON.parse(data);
             for(var i=0; i<lista.length; i++){
              ////start condition
              if(lista[i].status==1){
                $(".status").css("color", "green");
                $(".status").append("Mensaje Enviado");
                $(".nombre_ver, .correo_ver,.telefono_ver,.comentario_ver ").val("");

              }
              else if(lista[i].status==0){
                $(".status").css("color", "red");
                $(".status").append("Mensaje no Enviado por favor verifique sus datos");
                e.preventDefault();
              }
              ////end condition
             }
          }
      });
//-> Else Comentario
}else{
   $(".comentario_ver").val("");
   $(".comentario_ver").attr("placeholder", "Solo se admiten letras, números");
     $('html, body').animate({
      scrollTop: $(".comentario_ver").offset().top
      },500);

}
//-> Else Telefono

}else{
   $(".telefono_ver").val("");
   $(".telefono_ver").attr("placeholder", "Verifica tu número telefonico");
     $('html, body').animate({
      scrollTop: $(".telefono_ver").offset().top
      },500);
}
//-->else correo
}else{
   $(".correo_ver").val("");
   $(".correo_ver").attr("placeholder", "Verifica tu correo eléctronico");
     $('html, body').animate({
      scrollTop: $(".correo_ver").offset().top
      },500);
}
//->else nombre
}else{
   $(".nombre_ver").val("");
   $(".nombre_ver").attr("placeholder", "Ingresa correctamente tu nombre(Letras, y números)");
     $('html, body').animate({
      scrollTop: $(".nombre_ver").offset().top
      },500); 
}
//-> end

});
//->termina