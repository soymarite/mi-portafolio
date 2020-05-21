$(function() {
  // métodos de jQuery... Document Ready Event para que se cargue de último y no genere errrores y conflictos

  $("a").click(function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 2000, function(){
        window.location.hash = gato;
      });
      }
  });

  $('[data-toggle="popover"]').popover()

  $('carousel-inner').carousel({
  interval: 2000
  })

});
