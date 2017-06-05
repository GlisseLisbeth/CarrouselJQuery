$(()=>{
  var interval;
  //Al dar click muestra una imagen diferente
  $('.slider-circle ul li').on('click', function(e){
      var linkImg = $('.active');
      var thisImg = $(this).attr('class');
      var allClassImg = $('.'+thisImg);
      linkImg.removeClass('active').css('z-index', -10);
      allClassImg.addClass('active').css('z-index', 10);
  });
  //Siguiente imagen al hacer click
  $('.next').on('click', function(){
      movN();
      clearInterval(interval);
      automatic();
  });
  //Anterior imagen al hacer click
  $('.prev').on('click', function(){
      movP();
      clearInterval(interval);
      automatic();
  });
  //Función Siguiente
  function movN(){
    var currentImg = $('.active');
    var nextImg = currentImg.next();
      
    if(nextImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    }
    else{
        $('.img-5').removeClass('active').css('z-index', -10);
        $('.img-1').addClass('active').css('z-index', 10);
    }  
  }
  //Función Anterior
  function movP(){
    var currentImg = $('.active');
    var prevImg = currentImg.prev();

    if(prevImg.length){
      currentImg.removeClass('active').css('z-index', -10);
      prevImg.addClass('active').css('z-index', 10);
    }
    else{
        $('.img-1').removeClass('active').css('z-index', -10);
        $('.img-5').addClass('active').css('z-index', 10);
    }
  }
  //Cambia cada 5 segundos automáticamente cuando no se presenta algún evento
  function automatic() {
	interval = window.setInterval(function(){
      movN();
    }, 5000);
  }
  automatic();
});