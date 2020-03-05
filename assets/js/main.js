(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    $('#owl-demo').owlCarousel({
      stagePadding: 50,
      lazyLoad: true,
      center: true,
      loop: true,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
          loop: true,
          stagePadding: 50
        }
      }
    });

  });


  jQuery(window).load(function () {});

}(jQuery));