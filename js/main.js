

import "../css/bootstrap.min.css"
import "../css/owl.carousel.min.css"
import "../css/font-awesome.min.css"
import "../css/themify-icons.css"
import "../css/flaticon.css"
import "../css/animate.css"
import "../css/slicknav.css"
import "../css/style.css"

import "./vendor/modernizr-3.5.0.min.js"
import "./vendor/jquery-1.12.4.min.js"
import "./popper.min.js"
import "./bootstrap.min.js"
import "./owl.carousel.min.js"
import "./waypoints.min.js"
import "./jquery.counterup.min.js"
import "./wow.min.js"
import "./jquery.slicknav.min.js"
import "./jquery.validate.min.js"

// import '../about.html'



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





  $(document).ready(function () {
    // window.history.scrollRestoration = 'manual';

    // mobile_menu
    var menu = $('ul#navigation');
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol: '-'
      });
    };
    // blog-menu
    // $('ul#blog-menu').slicknav({
    //   prependTo: ".blog_menu"
    // });

    // review-active
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

    // review-active
    $('.testmonial_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          dots: false,
          nav: false,
        },
        767: {
          items: 1,
          dots: false,
          nav: false,
        },
        992: {
          items: 1,
          nav: false
        },
        1200: {
          items: 1,
          nav: false
        },
        1500: {
          items: 1
        }
      }
    });

    // review-active
    $('.financial_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      autoplay: true,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,

      responsive: {
        0: {
          items: 1,
          nav: false
        },
        767: {
          items: 1,
          nav: false
        },
        992: {
          items: 1
        },
        1200: {
          items: 1
        },
        1500: {
          items: 1
        }
      }
    });

    // review-active
    $('.case_active').owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      autoplay: false,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      nav: true,
      dots: true,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      // dotsData: true,
      center: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        767: {
          items: 3,
          nav: false
        },
        992: {
          items: 3,
          nav: false
        },
        1200: {
          items: 3,
          nav: false
        },
        1500: {
          items: 3,
          nav: true
        }
      }
    });


    // filter items on button click
    $('.portfolio-menu').on('click', 'button', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    //for menu active class
    $('.portfolio-menu button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });

    // wow js
    new WOW().init();

    // counter 
    $('.counter').counterUp({
      delay: 10,
      time: 10000
    });






    // blog-page

    //brand-active
    $('.brand-active').owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      autoplay: true,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false

        },
        767: {
          items: 4
        },
        992: {
          items: 7
        }
      }
    });

    // blog-dtails-page

    //project-active
    $('.project-active').owlCarousel({
      loop: true,
      margin: 30,
      items: 1,
      // autoplay:true,
      navText: ['<i class="Flaticon flaticon-left-arrow"></i>', '<i class="Flaticon flaticon-right-arrow"></i>'],
      nav: true,
      dots: false,
      // autoplayHoverPause: true,
      // autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false

        },
        767: {
          items: 1,
          nav: false
        },
        992: {
          items: 2,
          nav: false
        },
        1200: {
          items: 1,
        },
        1501: {
          items: 2,
        }
      }
    });

    if (document.getElementById('default-select')) {
      $('select').niceSelect();
    }

    //about-pro-active
    $('.details_active').owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      // autoplay:true,
      navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
      nav: true,
      dots: false,
      // autoplayHoverPause: true,
      // autoplaySpeed: 800,
      responsive: {
        0: {
          items: 1,
          nav: false

        },
        767: {
          items: 1,
          nav: false
        },
        992: {
          items: 1,
          nav: false
        },
        1200: {
          items: 1,
        }
      }
    });

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