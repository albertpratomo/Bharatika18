;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Full height
	var fullHeight = function() {
		if ( !isiPhone() || !isiPad() ) {
			$('.js-full-height').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-full-height').css('height', $(window).height());
			});
		}
	};

	var fullHeight1 = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};

	var sliderMain = function() {
		
	  	$('div.flexslider').flexslider({
			animation: "slide",
			slideshowSpeed: 5000,
			directionNav: false,
			controlNav: false,
			touch: false,
			animationSpeed:800,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	$('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
	  	$(window).resize(function(){
	  		$('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
	  	});
	};

	// Scroll Next
	var ScrollNext = function() {
		$('body').on('click', '.scroll-btn', function(e){
			e.preventDefault();

			$('html, body').animate({
				scrollTop: $( $(this).closest('[data-next="yes"]').next()).offset().top
			}, 1000, 'easeInOutExpo');
			return false;
		});
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	// Counter
	var counter = function() {
		$('.fh5co-counter-style-1').waypoint( function( direction ) {
			var el = $(this.element).attr('class');
			if( direction === 'down' && !$(this.element).hasClass('animated')) {
				setTimeout( function(){
					// console.log($(this.element));
					$('.'+el).find('.js-counter').countTo({
						 formatter: function (value, options) {
				      	return value.toFixed(options.decimals);
				   	},
					});
				} , 200);
				
				$(this.element).addClass('animated');
					
			}
		} , { offset: '75%' } );


		$('.fh5co-counter-style-2').waypoint( function( direction ) {
			var el = $(this.element).attr('class');
			if( direction === 'down' && !$(this.element).hasClass('animated')) {
				setTimeout( function(){
					$('.'+el).find('.js-counter').countTo({
						 formatter: function (value, options) {
				      	return value.toFixed(options.decimals);
				   	},
					});
				} , 200);
				
				$(this.element).addClass('animated');
					
			}
		} , { offset: '75%' } );
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    }
		});

	};

	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};

	// Off Canvass
	var offCanvass = function() {

		if ( $('#fh5co-offcanvass').length == 0 ) {
			if ( $('.fh5co-nav-style-1').length > 0 ) {
				$('body').prepend('<div id="fh5co-offcanvass" />');

				$('.fh5co-link-wrap').each(function(){
					$('#fh5co-offcanvass').append($(this).find('[data-offcanvass="yes"]').clone());	
				})
				$('#fh5co-offcanvass').find('.js-fh5co-mobile-toggle').remove();
				$('#fh5co-offcanvass, #fh5co-page').addClass($('.fh5co-nav-style-1').data('offcanvass-position'));
				$('#fh5co-offcanvass').addClass('offcanvass-nav-style-1');
			}		
			
			if ( $('.fh5co-nav-style-2').length > 0 ) {
				$('body').prepend('<div id="fh5co-offcanvass" />');

				$('.fh5co-link-wrap').each(function(){
					$('#fh5co-offcanvass').append($(this).find('[data-offcanvass="yes"]').clone());	
				})
				$('#fh5co-offcanvass').find('.js-fh5co-mobile-toggle').remove();
				$('#fh5co-offcanvass, #fh5co-page').addClass($('.fh5co-nav-style-2').data('offcanvass-position'));
				$('#fh5co-offcanvass').addClass('offcanvass-nav-style-2');
			}			
		}

		$('body').on('click', '.js-fh5co-mobile-toggle', function(e){
			var $this = $(this);
			$this.toggleClass('active');
			$('html').toggleClass('mobile-menu-expanded');

		});

		if ( $(window).width() < 769 ) {
			$('body, html').addClass('fh5co-overflow');
		}

		$(window).resize(function(){
			if ( $(window).width() < 769 ) {
				$('body, html').addClass('fh5co-overflow');
			}
			if ( $(window).width() > 767 ) {
				if ( $('html').hasClass('mobile-menu-expanded')) {
					$('.js-fh5co-mobile-toggle').removeClass('active');
					$('html').removeClass('mobile-menu-expanded');
				}
			}
		});

	};


	// Magnific Popup
	var imagePopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 10,
			titleSrc: 'title',
			gallery:{
				enabled:false
			}
		});
	};
	
	
	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#fh5co-header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top fh5co-animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
					}, 100 );
				}
			} 
			
		});
	};

	//Navigation
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var scrollNavBar = function() {

		$(window).scroll(function(){
			if ( $(window).scrollTop() > 50)  {
				$('body').addClass('scrolled');
				$('.js-fh5co-nav-toggle').removeClass('fh5co-nav-white');
			} else {
				$('body').removeClass('scrolled');
				$('.js-fh5co-nav-toggle').addClass('fh5co-nav-white');
			}
		});


	};

	var offcanvasMenu = function() {

		$('#fh5co-page').prepend('<div id="fh5co-offcanvas" />');
		$('#fh5co-page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		$('.active.offcanvas-has-dropdown > ul').css("display","block");		
				
		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').click(function(){
			var $this = $(this);

			if ( $this.hasClass('active') ) {
				$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');
			} else if (true){
				$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');		
			}		
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};

	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};
		var owlj = $('.car-judges');
		owlj.on('initialized.owl.carousel', function( event ){
		   hoverEffects();
		});
		owlj.owlCarousel({
		    loop: true,
		    margin: 100,
		    autoplay: true,
		    responsiveClass: true,
		    nav: true,
		    dots: true,
		    autoheight: true,
		    items: 3,
		    smartSpeed: 300,
		    navText: [
		      "<i class='ti-angle-left owl-direction'></i>",
		      "<i class='ti-angle-right owl-direction'></i>"
	      	],
	      	responsive: {
		        0: {
		          items: 1,
		          nav: true,
		          margin: 0
		        },
		        768: {
		          items: 3,
		          nav: true,
		          margin: 50
		        },
		        1000: {
		          items: 3,
		          nav: true,
		        }
	    	}
		});
		owlj.on('changed.owl.carousel', function(event) {
			hoverEffects();
		});

		var owls = $('.car-store');
		owls.on('initialized.owl.carousel', function( event ){
		   hoverEffects();
		});
		owls.owlCarousel({
		    loop: true,
		    margin: 100,
		    autoplay: true,
		    responsiveClass: true,
		    nav: true,
		    dots: true,
		    autoheight: true,
		    items: 4,
		    smartSpeed: 300,
		    navText: [
		      "<i class='ti-angle-left owl-direction'></i>",
		      "<i class='ti-angle-right owl-direction'></i>"
	      	],
	      	responsive: {
		        0: {
		          items: 1,
		          nav: true,
		          margin: 50
		        },
		        768: {
		          items: 2,
		          nav: true,
		          margin: 150
		        },
		        1000: {
		          items: 4,
		          nav: true
		        }
	    	}
		});
		owls.on('changed.owl.carousel', function(event) {
			hoverEffects();
		});

		var owlnom = $('.car-nom');
		owlnom.on('initialized.owl.carousel', function( event ){
		   hoverEffects();
		});
		owlnom.owlCarousel({
		    loop: true,
		    margin: 15,
		    autoplay: true,
		    responsiveClass: true,
		    nav: true,
		    dots: true,
		    autoheight: true,
		    items: 5,
		    smartSpeed: 300,
		    navText: [
		      "<i class='ti-angle-left owl-direction'></i>",
		      "<i class='ti-angle-right owl-direction'></i>"
	      	],
	      	responsive: {
		        0: {
		          items: 1,
		          nav: true,
		          margin: 50
		        },
		        768: {
		          items: 2,
		          nav: true,
		          margin: 150
		        },
		        1000: {
		        	loop: false,
		        	autoplay: false,
		          items: 5,
		          nav: false,
		          dots: false
		        }
	    	}
		});
		owlnom.on('changed.owl.carousel', function(event) {
			hoverEffects();
		});

		var owlsd = $('.car-sdet');
		owlsd.on('initialized.owl.carousel', function( event ){
		   hoverEffects();
		});
		owlsd.owlCarousel({
		    loop: true,
		    margin: 0,
		    autoplay: true,
		    responsiveClass: true,
		    nav: true,
		    dots: true,
		    autoheight: true,
		    items: 1,
		    smartSpeed: 300,
		    navText: [
		      "<i class='ti-angle-left owl-direction'></i>",
		      "<i class='ti-angle-right owl-direction'></i>"
	      	]
		});
		owlsd.on('changed.owl.carousel', function(event) {
			hoverEffects();
		});
			/* 
		Owl Carousel 
		Carousel Project
		______________________________________
		*/
		var owl = $('.owl-carousel-judges');
		owl.on('initialized.owl.carousel', function( event ){
		   hoverEffects();
		});
		owl.owlCarousel({
		    loop: true,
		    margin: 100,
		    autoplay: true,
		    responsiveClass: true,
		    nav: false,
		    dots: false,
		    autoheight: true,
		    items: 1,
		    smartSpeed: 300,
		    navText: [
		      "<i class='ti-angle-left owl-direction'></i>",
		      "<i class='ti-angle-right owl-direction'></i>"
	      	],
	      	responsive: {
		        0: {
		          items: 1,
		          nav: true
		        },
		        600: {
		          items: 3,
		          nav: true,
		        },
		        1000: {
		          items: 3,
		          nav: true,
		        }
	    	}
		});
		owl.on('changed.owl.carousel', function(event) {
			hoverEffects();
		});
		


		/* 
		Owl Carousel 
		Carousel Posts
		______________________________________
		*/
		var owl2 = $('.owl-carousel-posts');
		owl2.on('initialized.owl.carousel', function( event ){
		   hoverEffects();
		});
		owl2.owlCarousel({
		    loop: true,
		    margin: 20,
		    lazyLoad: true,
		    responsiveClass: true,
		    dots: true,
		    nav: true,
		    smartSpeed: 500,
		    navText: [
		      "<i class='ti-angle-left owl-direction'></i>",
		      "<i class='ti-angle-right owl-direction'></i>"
	     	],
		    responsive: {
		        0: {
		          items: 1,
		          nav: true
		        },
		        600: {
		          items: 2,
		          nav: true,
		        },
		        1000: {
		          items: 3,
		          nav: true,
		        }
	    	}
		});
		owl2.on('changed.owl.carousel', function(event) {
			hoverEffects();
		});


		/* 
		Owl Carousel 
		Carousel Twitter or Carousel Testimony
		______________________________________
		*/
		var owl3 = $('.owl-carousel-fullwidth');
		owl3.owlCarousel({
		    loop: true,
		    margin: 20,
		    autoplay: true,
		    responsiveClass: true,
		    nav: false,
		    dots: false,
		    autoheight: true,
		    items: 1,
		    smartSpeed: 500,
		    navText: [
		      "<i class='ti-angle-left owl-direction'></i>",
		      "<i class='ti-angle-right owl-direction'></i>"
	      	],
	      	responsive: {
		        0: {
		          items: 1,
		          nav: true
		        },
		        600: {
		          items: 1,
		          nav: true,
		        },
		        1000: {
		          items: 1,
		          nav: true,
		        }
	    	}
		    
		});

		var owl4 = $('.owl-carousel-sponsor');
		owl4.owlCarousel({
		    loop: true,
		    margin: 20,
		    autoplay: true,    
		    responsiveClass: true,
		    autoplayTimeout: 50,
		    dots: false,
		    smartSpeed: 2000,
		    navRewind: false,
		    responsive: {
		        0: {
		          items: 5
		        },
		        600: {
		          items: 7
		        },
		        1000: {
		          items: 10
		        }
	    	}
		});

		var owl5 = $('.owl-carousel-sponsor1');
		owl5.owlCarousel({
		    loop: true,
		    margin: 20,
		    autoplay: true,    
		    responsiveClass: true,
		    autoplayTimeout: 50,
		    dots: false,
		    smartSpeed: 2000,
		    navRewind: false,
		    responsive: {
		        0: {
		          items: 4
		        },
		        600: {
		          items: 4
		        },
		        1000: {
		          items: 4
		        }
	    	}
		});

	function hoverEffects(){
			$('.hover-img').mouseenter(function(){
				$(this).addClass('hovered');
			}).mouseleave(function(){
				$(this).removeClass('hovered');
			});
		}
		hoverEffects();

	// Loading page
	var loaderPage = function() {
		$("div#bhara-load").fadeOut("slow");
	};

	// Document on load.
	$(function(){
		fullHeight1();
		fullHeight();
		ScrollNext();
		parallax();
		counter();
		mobileMenuOutsideClick();
		scrollNavBar();
		offcanvasMenu();
		burgerMenu();
		dropdown();
		imagePopup();
		offCanvass();
		sliderMain();
		loaderPage();
	});
}());