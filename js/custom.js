/**
*
* -----------------------------------------------------------------------------
*
* Template : Oscar Business | Responsive Business HTML5 Template 
* Author : Oscarthemes
*
* -----------------------------------------------------------------------------
*
**/
(function($) {
    "use strict";
    /*=========================== DOCUMENT READY FUNCTION */
    $(document).on ('ready', function (){

        /*=========================== GALLERY SLIDER SCRIPT */
        if($('.testimonial-slider').length){
          $('.testimonial-slider').slick({
            slidesToShow: 2,
            dots: true,
            autoplay: true,
            centerMode: false,
            arrows: true,
            centerPadding: "0px",
            responsive: [
            {
              breakpoint: 992,
              settings: {
                  arrows: false,
                  slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                  arrows: false,
                  slidesToShow: 1
              }
            }, 
            {
              breakpoint: 670,
              settings: {
                  arrows: false,
                  centerMode: false,
                  slidesToShow: 1
              }
            }]
          });
        }
        /*=========================== GALLERY SLIDER SCRIPT */
        if($('.brand-slider').length){
          $('.brand-slider').slick({
            slidesToShow: 5,
            dots: false,
            autoplay: true,
            centerMode: false,
            arrows: false,
            centerPadding: "0px",
            responsive: [
            {
              breakpoint: 992,
              settings: {
                  arrows: false,
                  slidesToShow: 4
              }
            },
            {
              breakpoint: 768,
              settings: {
                  arrows: false,
                  slidesToShow: 3
              }
            }, 
            {
              breakpoint: 670,
              settings: {
                  arrows: false,
                  centerMode: false,
                  slidesToShow: 2
              }
            }]
          });
        }
        
    });
    $(document).on('click', '.smooth-btn a[href^="#"]', function (event) {
      event.preventDefault();
  
      $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
  });
})(jQuery);











