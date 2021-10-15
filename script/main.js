$(".calc-open").click(function() {
    $(".calc-tech").addClass('calc-tech-open');
    $(".tech-pur2").addClass('tech-pur2-close');
  });


  $(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
            return false;
    });
  });
  $(".menu-btn").click(function(){
    $(".nav-page").toggleClass('nav-page-open');
    $(this).toggleClass('menu-btn-close');
  });


 
  $(document).ready(function() {
    var owl = $('.people-contacts-slider');
    owl.owlCarousel({
      nav: true,
      loop: true,
      center:true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })
  }); 

  

 
  $(document).ready(function() {
    var owl = $('.blockchain-slider-content');
    owl.owlCarousel({
      nav: true,
      loop: true,
      center:true,
      autoHeight: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })
  }); 