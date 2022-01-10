/* ===================================================================
    Author          : ModinaTheme
    Template Name   : Spruce - Portfolio HTML5 Page Template
    Version         : 1.0
* ================================================================= */

(function($) {
    "use strict";

    $(document).on('ready', function() {


    $(window).on('load', function() {
        // Animate loader off screen
        $(".preloader").delay(500).fadeOut();                        
    });

    new WOW().init();            

   /* ==================================
     # Testimonial  carousel active
    ===================================== */
     $(".testimonial-carousel-active").owlCarousel({
        loop:true,
        margin: 30,      
        startPosition: 5,      
        dots: true,
        autoplayTimeout: 5000,
        autoplay:true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            480 : {
                items: 1
            },
            // breakpoint from 768 up
            768 : {
                items: 2
            },
            // breakpoint from 992 up
            992 : {
                items: 3
            }
        }
    });


    $(".blog-carousel-active").owlCarousel({        
        margin: 30,      
        dots: false,
        loop: true,
        autoplayTimeout: 8000,
        autoplay:true,
        nav: true,
        navText: ['<i class="far fa-chevron-left"></i>', '<i class="far fa-chevron-right"></i>'],  
        navContainer: '.blog-section .carousel_nav',   
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 992 up
            992 : {
                items: 2
            }
        }
    });

    $(".testimonial-box-active").owlCarousel({                   
        dots: false,
        items : 1,
        autoplayTimeout: 5000,
        autoplay:true,
        nav: true,
        navText: ['<i class="far fa-chevron-left"></i>', '<i class="far fa-chevron-right"></i>']
    });


        /* =============================================
            # Magnific popup init
         ===============================================*/
        $(".popup-link").magnificPopup({
            type: 'image',
            fixedContentPos: false
        });

        $(".popup-gallery").magnificPopup({
            type: 'image',
            fixedContentPos: false,
            gallery: {
                enabled: true
            },
            // other options
        });

        $(".popup-video, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        /*==========================
           Scroll To Up Init
        ============================*/
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '1110', // Distance from top before showing element (px)
            topSpeed: 2000, // Speed back to top (ms)
            animation: 'slide', // Fade, slide, none
            animationInSpeed: 300, // Animation in speed (ms)
            animationOutSpeed: 300, // Animation out speed (ms)
            scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });

        //# Smooth Scroll
        $('.main-menu a').on('click', function(event) {
            var $anchor = $(this);
            var headerH = '80';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });


        // Sticky Menu
        $(window).scroll(function() {
            var Width = $(document).width();

            if ($("body").scrollTop() > 100 || $("html").scrollTop() > 100) {
                if (Width > 767) {
                    $("header").addClass("sticky");
                }
            } else {
                $("header").removeClass("sticky");
            }
        });

        $('#bar1').barfiller({
            barColor:'#4d63dd',
        });

        $('#bar2').barfiller({
            barColor:'#4d63dd',
        });

        $('#bar3').barfiller({
            barColor:'#4d63dd',
        });

        $('#bar4').barfiller({
            barColor:'#4d63dd',
        });

        $('.circlechart').circlechart();

        $('.container').imagesLoaded(function() {
               $('.portfolio-filter').on('click', 'button', function() {
                  var filterValue = $(this).attr('data-filter');
                  $grid.isotope({ filter: filterValue });

                  $(".portfolio-filter button").removeClass("active");
                  $(this).addClass('active');
               });

               var $grid = $('.grid').isotope({
                  itemSelector: '.grid-item',
                  percentPosition: true,
               });
         });

        $('.single-count-up span, .digit span').counterUp({
            delay: 15,
            time: 1500,
        });

        $('#hamburger').on('click', function() {
            $(this).toggleClass('open');
            $('.mobile-nav').addClass('show');
        });

        $('.close-nav').on('click', function() {            
            $('.mobile-nav').removeClass('show');
            $('#hamburger').toggleClass('open');
        });

        $("#mobile-menu").metisMenu();


    }); // end document ready function
})(jQuery); // End jQuery