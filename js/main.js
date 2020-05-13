

import "../css/bootstrap.min.css"
import "../css/owl.carousel.min.css"
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import "../css/font-awesome.min.css"
import "../css/themify-icons.css"
// import "../css/flaticon.css"
// import "../css/animate.css"
// import "../css/slicknav.css"
import "../css/style.css" // slick nav worked with this alone

import "./vendor/modernizr-3.5.0.min.js"
// import "./vendor/jquery-1.12.4.min.js"
import "jquery"
import "./popper.min.js"
import "./bootstrap.min.js"
// import "bootstrap";
import "./owl.carousel.min.js"
// import "./wow.min.js"
import "waypoints/lib/jquery.waypoints.js";
import counterUp from "counterup2";
// import "./jquery.slicknav.min.js"
// import "./jquery.validate.min.js"
// import "./contact.js"
// import "./waypoints.min.js";
// import "waypoints"
// import "./jquery.counterup.min.js"
// import "script-loader!owl.carousel/dist/owl.carousel.min.js";      
// require('waypoints/lib/noframework.waypoints.js')


(function ($) {
  "use strict";
  // TOP Menu Sticky
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 400) {
      $("#sticky-nav").removeClass("sticky");
      $('#back-top').fadeIn(500);
    } else {
      $("#sticky-nav").addClass("sticky");
      $('#back-top').fadeIn(500);
    }
  });

  $(window).on('load', function () {
    $('.slider_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: 300,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      nav: true,
      dots: false,
      autoplayHoverPause: false,
      autoplaySpeed: 600,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        767: {
          items: 1,
          nav: true,
        },
        992: {
          items: 1,
          nav: true
        },
        1200: {
          items: 1,
          nav: true
        },
        1600: {
          items: 1,
          nav: true
        }
      }
    });

    $('.portfolio-menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    $('.portfolio-menu button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });

    // wow js
    // new WOW().init();

    if (document.getElementById('default-select')) {
      $('select').niceSelect();
    }
  });

  // Search Toggle
  $("#search_input_box").hide();
  $("#search").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $('#search_input_box').slideUp(500);
  });
  // Search Toggle
  $("#search_input_box").hide();
  $("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });

})(jQuery);



document.addEventListener('DOMContentLoaded', function (event) {
  const elements = document.querySelectorAll('.counter')
  elements.forEach(el => {
    new Waypoint({
      element: el,
      handler: function () {
        counterUp(el)
        this.destroy()
      },
      offset: 'bottom-in-view',
    })
  })
})


//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//Mobile Navbar Logic(start)
var hamburger = document.querySelector('.nav__hamburger');
var cancel = document.querySelector('.cancel-icon');
var mobile_nav = document.querySelector('.nav__links');
var backdrop = document.querySelector('.backdrop');
var handleShowMobileNavbar = function () {
  mobile_nav.classList.add('show-nav')
  backdrop.style.transform = 'translateX(0px)';
};
var handleHideMobileNavbar = function () {
  mobile_nav.classList.remove('show-nav')
  backdrop.style.transform = 'translateX(100vw)';
};

// var handleOnClick = function (e) {
//   console.log(e.target)
// }
hamburger.addEventListener('click', handleShowMobileNavbar);
cancel.addEventListener('click', handleHideMobileNavbar);
backdrop.addEventListener('click', handleHideMobileNavbar);
// mobile_nav.addEventListener('click', handleOnClick);
//Mobile Navbar Logic(end)
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
// import '../about.html'
