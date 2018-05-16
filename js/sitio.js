//wow.min y animate.css para inciar
    new WOW().init();
//owlcarousel2.github.io, Iniciamos el carusel
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav: true,
    stagePadding: 0,
    autoWidth: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText:['<i class="fa fa-arrow-circle-left" title="Anterior"></i>',
                '<i class="fa fa-arrow-circle-right title="Siguente"></i>'],
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2,
            margin: 20
        },
        800:{
            items: 3,
            margin: 20
        },
        1000:{
            items: 4,
            margin: 20        
        }
    }
  })

//Iniciamos smooth-scroll
    var scroll = new SmoothScroll('a[href*="#"]', {
    // Selectors
    ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
    header: null, // Selector for fixed headers (must be a valid CSS selector)
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    offset: 119, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
    easing: 'easeInOutCubic', // Easing pattern to use
    customEasing: function (time) {
        // Function. Custom easing pattern
        // If this is set to anything other than null, will override the easing option above
        // return <your formulate with time as a multiplier>
        // Example: easeInOut Quad
        return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
    },
    // Callback API
    before: function (anchor, toggle) {}, // Callback to run before scroll
    after: function (anchor, toggle) {} // Callback to run after scroll
    });

//Mostrar y coultar icono al hacer scroll
  $(function(){
    $(window).scroll(function(){
       var scrolltop = $(this).scrollTop();
       if (scrolltop >= 400){
          $(".ir-arriba").fadeIn();
        } else {
            $(".ir-arriba").fadeOut();
        }                
    });
  });

//CABECERA ANIMADA
$(window).scroll(function(){
    var nav= $('.encabezado');
    var scroll = $(window).scrollTop();
    if (scroll >= 100){        
        nav.addClass("fondo-menu");
        if(scroll >=400){
            $('#mymodal').modal('show')                // initializes and invokes show immediatel
        }
    }else {
        nav.removeClass("fondo-menu");
    }
});