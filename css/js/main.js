"use strict";
jQuery(document).on('ready', function() {
	/* MOBILE MENU*/
	function collapseMenu(){
		jQuery('.ps-navigation ul li.menu-item-has-children').prepend('<span class="ps-dropdowarrow"><i class="lnr lnr-chevron-right"></i></span>');
		if ($(window).width() < 992) {
		  jQuery('.ps-navigation ul li.menu-item-has-children a').on('click', function() {
			jQuery(this).parent('li').toggleClass('ps-open');
			jQuery(this).next().slideToggle(300);
		  });
		}
	}
	collapseMenu();

	/* SEARCH CHOSEN START*/
	var chosen = document.querySelector('.chosen-select')
	if (chosen !== null) {
	  var config = {
		'.chosen-select'           : {},
		'.chosen-select-deselect'  : {allow_single_deselect:true},
		'.chosen-select-no-single' : {disable_search_threshold:10},
		'.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
		'.chosen-select-width'     : {width:"95%"}
		}
		for (var selector in config) {
		  jQuery(selector).chosen(config[selector]);
	  }

	}
	/* SEARCH CHOSEN END */
	/* OWL CAROUSAL ONE START */
	var owlFirst = document.querySelector('#owl-first')
	if (owlFirst !== null){
	  $('#owl-first').owlCarousel({
		loop:true,
		autoplay:true,
		dots:false,
		items:1,
		autoplayTimeout: 5500,
		autoplaySpeed: 2000,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut'
	  })
	}

	var owlOne = document.querySelector('#owl-one')
	if (owlOne !== null) {
	  $('#owl-one').owlCarousel({
		loop:true,
		autoplay:true,
		dots:false,
		autoplayTimeout: 5500,
		autoplaySpeed: 2000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			610:{
				items:2
			},
			910:{
				items:3
			},
			1210:{
				items:4
			},
			1520:{
				items:5
			},
			1820:{
				items:6
			}
		}
	  })
	}
	/* OWL CAROUSAL ONE END */
	/* OWL CAROUSAL TWO START */
	var owlTwo = document.querySelector('#owl-two')
	if (owlTwo !== null) {
	  $('#owl-two').owlCarousel({
		  loop:true,
		  margin:30,
		  dots:true,
		  items: 4,
		  autoplay:false,
		  autoplayTimeout: 5500,
		  autoplaySpeed: 2000,
		  autoplayHoverPause:true,
		  responsive:{
			  0:{items:1},
			  480:{items:2},
			  768:{items:3},
			  1000:{items:4}
		  }
	  })
	}
	/* OWL CAROUSAL TWO END */
	/* OWL CAROUSAL THREE START */
	var owlThree = document.querySelector('#owl-three')
	if (owlThree !== null) {
	  $('#owl-three').owlCarousel({
		  loop:true,
		  dots:false,
		  center: true,
		  autoWidth: true,
		  autoHeight: true,
		  autoplay:false,
		  autoplayTimeout: 5500,
		  autoplaySpeed: 2000,
		  autoplayHoverPause:true,
	  })
	}
	/* OWL CAROUSAL THREE END */
	/* OWL CAROUSAL FOUR START */
	var owlFour = document.querySelector('#owl-fourr')
	if (owlFour !== null) {
	  $('#owl-four').owlCarousel({
		loop:true,
		autoplay:true,
		dots:false,
		items: 4,
		autoplayTimeout: 5500,
		autoplaySpeed: 2000,
		autoplayHoverPause:true,
		responsive:{
		  0:{items:1},
		  480:{items:2},
		  768:{items:3},
		  1000:{items:4}
	  }
	  })
	}
	/* OWL CAROUSAL FOUR END */
	/* OWL CAROUSAL FIVE START */
	var owlFive = document.querySelector('#owl-five')
	if (owlFive !== null) {
	  $('#owl-five').owlCarousel({
		loop:true,
		margin:30,
		dots:false,
		autoWidth: true,
		autoHeight: true,
		autoplay:true,
		autoplayTimeout: 5500,
		autoplaySpeed: 2000,
		autoplayHoverPause:true,
	  })
	}
	/* OWL CAROUSAL FIVE END */
	/* VIDEO POPUP START */
	/* AFTER CLOSE VIDEO STOP */
	var iframeModal = document.getElementById('exampleModal')
	if (iframeModal !== null) {
	  $("#exampleModal").on('hidden.bs.modal', function (e) {
		$("#exampleModal iframe").attr("src", $("#exampleModal iframe").attr("src"));
	});
	}
	/* VIDEO POPUP END */
	/* COUNTER START */
	var counter = document.getElementById('counter')
	if (counter !== null) {
	  var a = 0;
	$(window).scroll(function() {

	  var oTop = $(counter).offset().top - window.innerHeight;
	  if (a == 0 && $(window).scrollTop() > oTop) {
		$('.count').each(function() {
		  var $this = $(this),
			countTo = $this.attr('data-count');
		  $({
			countNum: $this.text()
		  }).animate({
			  countNum: countTo.toLocaleString()
			},

			{

			  duration: 2000,
			  easing: 'swing',
			  step: function() {
				$this.text(Math.floor(this.countNum));
			  },
			  complete: function() {
				$this.text(this.countNum);
			  }

			});
		});
		a = 1;
	  }

	});
	}
	/* COUNTER END */
	/* SLIDER RANGE START */
	var sliderRange = document.getElementById('slider-range')
	if (sliderRange !== null) {
	  $( function() {
		$( "#slider-range" ).slider({
		  range: true,
		  min: 0,
		  max: 2500,
		  values: [ 600, 1900 ],
		  slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		  }
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	  } );
	}
	/* SLIDER RANGE END */
	/* SLIDER RANGE TWO START */
	var sliderRangeTwo = document.getElementById('slider-rangeTwo')
	if (sliderRangeTwo !== null) {
	  $( function() {
		$( "#slider-rangeTwo" ).slider({
		  range: true,
		  min: 0,
		  max: 2500,
		  values: [ 600, 1900 ],
		  slide: function( event, ui ) {
			$( "#amount2" ).val(ui.values[ 0 ] + " sq ft' - " + ui.values[ 1 ] + " sq ft'");
		  }
		});
		$( "#amount2" ).val( $( "#slider-rangeTwo" ).slider( "values", 0 ) + " sq ft' - " +
		 $( "#slider-rangeTwo" ).slider( "values", 1 )+ " sq ft'" );
	  } );
	}
	/* SLIDER RANGE TWO END */
	/* SLIDER RANGE THREE START */
	var sliderRangeThree = document.getElementById('slider-rangeThree')
	if (sliderRangeThree !== null) {
	  $( function() {
		$( "#slider-rangeThree" ).slider({
		  range: true,
		  min: 0,
		  max: 4000,
		  values: [ 1200, 2900 ],
		  slide: function( event, ui ) {
			$( "#amountThree" ).val(ui.values[ 0 ] + " km - " + ui.values[ 1 ] + " km");
		  }
		});
		$( "#amountThree" ).val( $( "#slider-rangeThree" ).slider( "values", 0 ) + " km - " +
		 $( "#slider-rangeThree" ).slider( "values", 1 )+ " km" );
	  } );
	}
	/* SLIDER RANGE THREE END */
	/* SLIDER RANGE MIN START */
	var sliderRangeMin = document.getElementById('slider-range-min')
	if (sliderRangeMin !== null) {
	  $( function() {
		$( "#slider-range-min" ).slider({
		  range: "min",
		  value: 70,
		  min: 1,
		  max: 700,
		  slide: function( event, ui ) {
			$( "#amountfour" ).val(ui.value + " km");
		  }
		});
		$( "#amountfour" ).val($( "#slider-range-min" ).slider( "value" ) + " km" );
	  } );
	}
	/* SLIDER RANGE MIN END */
	/* SLIDER RANGE MIN TWO START */
	var sliderRangeMinTwo = document.getElementById('slider-range-minTwo')
	if (sliderRangeMinTwo !== null) {
	  $( function() {
		$( "#slider-range-minTwo" ).slider({
		  range: "min",
		  value: 37,
		  min: 1,
		  max: 700,
		  slide: function( event, ui ) {
			$( "#amountfive" ).val(ui.value + " km");
		  }
		});
		$( "#amountfive" ).val($( "#slider-range-min" ).slider( "value" ) + " km" );
	  } );
	}
	/* SLIDER RANGE MIN TWO END */
	/* DATEPICKER START */
	var datepicker = document.querySelector('.datepicker')
	if (datepicker !== null) {
	  $('.datepicker').datepicker({
		format: 'mm/dd/yyyy',
		startDate: '-3d'
	  });
	}
	/* DATEPICKER END */
	/* ADD AND REMOVE CLASS START */
	$('.ps-form-btn button').on('click', function(){
	  $('.ps-navbar__header').addClass('ps-navbar-btn')
	})
	$('.ps-form--cancel a').on('click', function(){
	  $('.ps-navbar__header').removeClass('ps-navbar-btn')
	})
	/* ADD AND REMOVE CLASS END */
	/* GOOGLE MAP START*/
	var googleMap = document.querySelector('#ps-locationmap');
	if (googleMap !== null) {
	  if(jQuery('#ps-locationmap').length > 0){
		var _ps_locationmap = jQuery('#ps-locationmap');
		_ps_locationmap.gmap3({
		  marker: {
			address: '1600 Elizabeth St, Melbourne, Victoria, Australia',
			options: {
			  title: 'Robert Frost Elementary School',
			  icon: '../images/profile-setting/img-01.png',
			}
		  },
		  map: {
			options: {
			  zoom: 16,
			  scrollwheel: false,
			  disableDoubleClickZoom: true,
			}
		  }
		});
	  }
	} 
	var googleMap2 = document.querySelector('#ps-locationmap2');
	if (googleMap2 !== null) {
	  if(jQuery('#ps-locationmap2').length > 0){
		var _ps_locationmap2 = jQuery('#ps-locationmap2');
		_ps_locationmap2.gmap3({
		  marker: {
			address: '1600 Elizabeth St, Melbourne, Victoria, Australia',
			options: {
			  title: 'Robert Frost Elementary School'
			}
		  },
		  map: {
			options: {
			  zoom: 16,
			  scrollwheel: false,
			  disableDoubleClickZoom: true,
			}
		  }
		});
	  }
	}
	/* GOOGLE MAP END*/

	/* LISTING MAP CLOSE START*/
	$('.ps-map_dropdown h5 span i').on('click', function(){
	  $('.collapse').collapse('hide');
	});

	/* LISTING MAP CLOSE END*/

	$('.ps-map_dropdown > ul > li >a').on('click', function(){
	  $(this).find('i').toggleClass('ti-plus ti-minus');
	  $(this).closest('li').toggleClass('ps-toggle');
	  $(this).parent('li').siblings().find('i.ti-minus').removeClass('ti-minus').addClass('ti-plus');
	  $(this).closest('li').siblings().removeClass('ps-toggle');
	});

	$('.ps-seller .ps-seller__btn .ps-btngreen').on('click', function(){
	  $('.ps-seller .ps-seller__btn .ps-btngreen span:first-child .ps-seller__hidden').css('display', 'none')
	  $('.ps-seller .ps-seller__btn .ps-btngreen span:first-child .ps-seller__visible').css('display', 'block')
	  $(this).find('i').removeClass('ti-lock');
	  $(this).find('i').addClass('ti-unlock');
	});

	$('.ps-seller .ps-seller__btn .ps-btnorange').on('click', function(){
	  $('.ps-seller .ps-seller__btn .ps-btnorange span:first-child .ps-seller__hidden').css('display', 'none')
	  $('.ps-seller .ps-seller__btn .ps-btnorange span:first-child .ps-seller__visible').css('display', 'block')
	});

	$('.ps-dashboard-sidebar li a').on('click', function(){
	  $(this).find('span i').toggleClass('ti-angle-right ti-angle-down');
	});
	/* PRETTY PHOTO START*/
	var prettyOne = document.querySelector(".ps-img1")
	if (prettyOne !== null) {
	  jQuery(".ps-img1").prettyPhoto({
		animation_speed: 'normal',
		theme: 'dark_square',
		allow_resize: true,
		slideshow: 3000,
		autoplay_slideshow: false,	
		social_tools: false,
		show_title: true
	  });
	}

	var prettyTwo = document.querySelector('.ps-video__img')
	if (prettyTwo !== null) {
	  jQuery(".ps-video__img").prettyPhoto({
		allow_resize: true,
		theme: 'dark_square',
		autoplay: true,
		iframe_markup: "<iframe src='{path}' width='{width}' height='{height}' frameborder='no' allowfullscreen='true'></iframe>"
	  });
	}
	/* PRETTY PHOTO END*/
	/* MESSAGE PRODUCT START*/
	jQuery(document).on('click', '.ps-message-product label', function(e){
	  e.preventDefault();
		var title = jQuery(this).find('.ps-messages__text span').text();
		var price = jQuery(this).find('em').text();
		var img = jQuery(this).find('img').attr('src');

		jQuery('.ps-product-collapse .ps-messages__text span').html(title);
		jQuery('.ps-product-collapse .ps-messages__text em').html(price);
		jQuery('.ps-product-collapse img').attr('src', img);
		$('#collapsenew1').collapse('toggle');
	});
	/* MESSAGE PRODUCT END*/
	/* DHB USER LOGO START*/
	jQuery(document).on('click', '#collapseUser a', function(e){
	  e.preventDefault();
	  var usertext = jQuery(this).find('em').text();
	  var circlecolor = jQuery(this).find('span').attr('class');

	  jQuery('.ps-seller__description .ps-h5 > a > span + em').html(usertext)
	  jQuery('.ps-seller__description .ps-h5 > a > span em').removeClass().addClass(circlecolor);
	  $('#collapseUser').collapse('toggle');
	});
	/* DHB USER LOGO END*/
	/* MAIN HEADER LOCATION DISTANCE START*/
	$('.ps-arrow-icon').on('click',function(){
	  $(this).siblings(".ps-distance").slideToggle( "fast" );
	})
	/* MAIN HEADER LOCATION DISTANCE END*/
	jQuery(document).on('click', '.ps-messages__content ul a', function(){
	  jQuery('.ps-messages__content').addClass('ps-message-user')
	});
	jQuery(document).on('click', '.ps-message-user .ps-messages__user__heading a:first-child', function(){
	  jQuery('.ps-messages__content').removeClass('ps-message-user')
	});

	/** CLOSE MAIN NAVIGATION WHEN CLICKING OUTSIDE THE MAIN NAVIGATION AREA START**/
	$(document).on('click', function (e){
	  /* bootstrap collapse js adds "in" class to your collapsible element*/
	  var product_collapse = $('.ps-message-product').hasClass('show');
	  var user_collapse = $('#collapseUser').hasClass('show');

	  if(!$(e.target).closest('.ps-message-product').length &&
		  !$(e.target).is('.ps-message-product') &&
		  product_collapse === true){
			  $('.ps-message-product').collapse('toggle');
	  }
	  if(!$(e.target).closest('#collapseUser').length &&
		  !$(e.target).is('#collapseUser') &&
		  user_collapse === true){
			  $('#collapseUser').collapse('toggle');
	  }
	});
	/** CLOSE MAIN NAVIGATION WHEN CLICKING OUTSIDE THE MAIN NAVIGATION AREA END**/
	/** COUNT DOWN START**/
	// Set the date we're counting down to
	var countDownDate = new Date("2020-04-22 09:13:50").getTime();
	var countDownPackage = new Date("2020-09-13 09:13:50").getTime();

	// Update the count down every 1 second
	var x = setInterval(function() {

	  // Get today's date and time
	  var present = new Date().getTime();

	  // Find the distance between present and the count down date
	  var distance = countDownDate - present;
	  var distancePackage = countDownPackage - present;

	  // Time calculations for days, hours, minutes and seconds
	  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	  var days2 = Math.floor(distancePackage / (1000 * 60 * 60 * 24));
	  var hours2 = Math.floor((distancePackage % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	  var minutes2 = Math.floor((distancePackage % (1000 * 60 * 60)) / (1000 * 60));
	  var seconds2 = Math.floor((distancePackage % (1000 * 60)) / 1000);

	  $('.ps-days h1').html(days)
	  $('.ps-hours h1').html(hours)
	  $('.ps-minutes h1').html(minutes)
	  $('.ps-seconds h1').html(seconds)

	  $('.ps-package .ps-days h5').html(days2)
	  $('.ps-package .ps-hours h5').html(hours2)
	  $('.ps-package .ps-minutes h5').html(minutes2)
	  $('.ps-package .ps-seconds h5').html(seconds2)
	});
	/** COUNT DOWN END**/
	/** SMOOTH SCROLL START**/
	$('.smoothscroll').on('mousewheel', function(e){
	  wheel(e.originalEvent, this)
	})
	function wheel(event, elm) {
		var delta = 0;
		if (event.wheelDelta) delta = event.wheelDelta / 100;
		else if (event.detail) delta = -event.detail / 3;

		handle(delta, elm);
		if (event.preventDefault) event.preventDefault();
		event.returnValue = false;
	}
	function handle(delta, elm) {
		var time = 700;
		  var distance = 100;

		$(elm).stop().animate({
			scrollTop: $(elm).scrollTop() - (distance * delta)
		}, time );
	}
	/** SMOOTH SCROLL END**/
	/** LINKIFY START**/
	var link = document.querySelector('.ps-messages__area__right')
	if (link !== null) {
	  $('.ps-messages__area__right p').linkify();
	  $('#sidebar').linkify({
		  target: "_blank"
	  });

	}
	/** LINKIFY END**/
	/** mCustomScrollbar START**/
	var yAxis = document.querySelector('.ps-y-axis')
	if (yAxis !== null) {
	  $(".ps-y-axis").mCustomScrollbar({
	  })
	}
	var xAxis = document.querySelector('.ps-x-axis')
	if (xAxis !== null) {
	  $(".ps-x-axis").mCustomScrollbar({
		axis:"x" // horizontal scrollbar
	  })  
	}
	/** mCustomScrollbar END**/
	var masonry = document.querySelector('.ps-item-mesonry')
	if (masonry !== null) {

	  $('.ps-item-mesonry').masonry({
		// options
		itemSelector: '.ps-ms-item'
	  });
	}

	//PRELOADER
	jQuery(window).on('load', function() { 
		jQuery(".preloader-outer").delay().fadeOut();
		jQuery(".preloader-outer figure").delay().fadeOut("fast");
	});

	jQuery(".ps-banner__icon a").on('click', function() {
		var offset = 0;
		jQuery('html, body').animate({
			scrollTop: jQuery(".ps-intro").offset().top + offset
		}, 2000);
	});
});
