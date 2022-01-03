
(function ($) {
"use strict";
$(document).ready(function () {
// mixitup
  var mixer = mixitup('.gallery');
  
// wow animation 
new WOW().init();

// owl-carousel 
$('.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    autoplay:true,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1,
            nav:false,
      },
      500: {
        items: 2,
        navbar:false,
      },
      1199: {
        items: 3,
        nav:false,
      },
      1300: {
        items: 4,
        nav: false,
      },
      1301: {
        items: 5,
        nav: false,
      },
      }
})

// nice scroll 
// $("html").niceScroll({
//     cursorwidth: "10px",
// });

// menu active class adding jquery
$('.navbar-nav li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});

// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

  // sticky mneubar 
  $(window).scroll(function(){
    var navFixed = $(window).scrollTop();
    if(navFixed > 200){
      $(".navbar").addClass("fixed-top nav-border animated faster");
    }else{
      $(".navbar").removeClass("fixed-top nav-border animated fadeInDown faster");
    }
  });

  // smooth scrolling to section 
  $('.navbar-nav a[href^="#"]').click(function (e) {
    e.preventDefault();

    var target = this.hash;

    $('html, body').animate({
      scrollTop:  $(target).offset().top
    }, 1000);
  });
    
});
})(jQuery);