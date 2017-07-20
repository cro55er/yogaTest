	$(document).ready(function() {
		
		$('.menu-item').click( function() { 

			var scroll_el = $(this).attr('href'); 
			
			if ($(scroll_el).length != 0) { 
			
			$('html, body').animate({ scrollTop: ( $(scroll_el).offset().top ) - 150 }, 500);
			
			}
			
			return false; // выключаем стандартное действие
		});

		$(window).scroll(function(e){

			var $sections = $('section');

			$sections.each(function(i,el){
				var top	= $(el).offset().top-($(window).height()/2);
				var bottom = top + $(el).height();
				var scroll = $(window).scrollTop();
				var id = $(el).attr('id');
				if( scroll > top && scroll < bottom){
					$('li.menu-active').removeClass('menu-active');

					$('a[href="#'+id+'"]').parent('li').addClass('menu-active');

				}
			})
		});

		(function( $ ) {
			$.fn.heightResize = function() {
				$(this).css({ 'height' : $(this).parent().height() + 'px' });
			};
		})(jQuery);

		$(window).resize(function() {

			$('.bg-features').heightResize();

		});

		$('.bg-features').heightResize();
 
	// ---------------------------------------------------------------------------- FORM VALID

	$( 'input#name, input#phone, select#yogaClass' ).unbind().blur( function(){

		var id = $(this).attr( 'id' );
		var	val = $(this).val();


		switch(id) {

		case 'name' : 
				var rv_name = /^[a-zA-Zа-яА-Я]+$/;

				if (val.length > 2 && val != '' && rv_name.test(val)) {

					$(this).removeClass('empty invalid').addClass( 'valid' );

				} else {

					$(this).removeClass('valid').addClass( 'invalid' );

					} 

				break;

		case 'phone' :

				var rv_phone = /^((8|\+1)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

				if (val != '' && rv_phone.test(val)){

					$(this).removeClass('empty invalid').addClass( 'valid' );

				} else {

					$(this).removeClass('valid').addClass( 'invalid' );

					} 

				break;

		case 'yogaClass' : 

				if ( val > 0 ) {

					$('selectBox-label').removeClass('empty');

					$('.selectBox-label').removeClass('invalid').addClass( 'valid' );

				} else {

					$('.selectBox-label').removeClass('valid').addClass( 'invalid' );

					} 

				break;

		} // END SWITCH()
	}); // END BLUR()

	$('form#trialClass').submit(function(e){

		e.preventDefault();

		if ($('.valid').length == 3) {

			alert ('Success!....');

		} else {


			$('.empty').addClass('invalid');
		
		}

	});

	$('#yogaClass').selectBox().change(function () {
			$('.selectBox-label').addClass('valid');
	});
	
	$('#basic .buy-btn').hover(function() {
				$('#basic .title-price').css({'color' : '#5b6ceb'});
			}, function() {
				$('#basic .title-price').css({'color' : '#555555'});
			}
		);
	$('#pro .buy-btn').hover(function() {
				$('#pro .title-price').css({'color' : '#5b6ceb'});
			}, function() {
				$('#pro .title-price').css({'color' : '#555555'});
			}
		);
	$('#premium .buy-btn').hover(function() {
				$('#premium .title-price').css({'color' : '#5b6ceb'});
			}, function() {
				$('#premium .title-price').css({'color' : '#555555'});
			}
		);
	// ---------------------------------------------------------------------------- POP UP


	$('.image-link').magnificPopup({type:'image'}); //gallery pop-up

	$('.popup-with-form').magnificPopup({ //form-pop-up
	type: 'inline',
	preloader: true,
	focus: '#name',
	callbacks: {
		beforeOpen: function() {
			if($(window).width() < 700) {
				this.st.focus = false;
			} else {
				this.st.focus = '#name';
			}
		}
	}
});


	// ---------------------------------------------------------------------------- TOGGLE MENU

$(".toggle-menu").click(function() {
	if ($("#mob-menu").is(":visible")){
		$("#mob-menu").fadeOut(700);
	} else {
		$("#mob-menu").fadeIn(700);
}
});

$(".toggle-menu, .menu-item").click(function() {
	$(".sandwich").toggleClass("active");
});

$(".menu-item").click(function() {
	$("#mob-menu").fadeOut(700);
});

// ---------------------------------------------------------------------------- QUOTES SLIDER

	$('.testimonials-wrapper').flexslider({

			selector: "#quotes-wrap > li",
			animation: "fade",
    	animationLoop: true,
			controlNav: true,
			slideshow: true,
			smoothHeight: true,
			start: function(){
					$('#quotes-wrap').children('li').css({
						'background-color' : 'white'
					});
			}
	});

// ---------------------------------------------------------------------------- SLIDER

	var slideNow = 1;
	var slideCount = $('#slidewrapper').children().length;
	var slideInterval = 5000;
	var navBtnId = 0;
	var translateWidth = 0;

	$(document).ready(function() {
		var switchInterval = setInterval(nextSlide, slideInterval);

		$('#slidewrapper').css({ 'width': (100 * slideCount) + '%' });

		$('.slide').css({ 'width': (100/slideCount) + '%' });

		$('#viewport').hover(function() {
			clearInterval(switchInterval);
		}, function() {
			switchInterval = setInterval(nextSlide, slideInterval);
		});

		$('.next-btn').click(function() {
			nextSlide();
		});

		$('.prev-btn').click(function() {
			prevSlide();
		});

		$('.slide-nav-btn').click(function() {
			navBtnId = $(this).index();
			if (navBtnId + 1 != slideNow) {
				translateWidth = -$('#viewport').width() * (navBtnId);
				$('#slidewrapper').css({
					'transform': 'translate(' + translateWidth + 'px, 0)',
					'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
					'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
				});
				slideNow = navBtnId + 1;
			}
		});
	});


	function nextSlide() {
		if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
			$('#slidewrapper').css('transform', 'translate(0, 0)');
			slideNow = 1;
		} else {
			translateWidth = -$('#viewport').width() * (slideNow);
			$('#slidewrapper').css({
				'transform': 'translate(' + translateWidth + 'px, 0)',
				'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
				'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
			});
			slideNow++;
		}
	}

	function prevSlide() {
		if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
			translateWidth = -$('#viewport').width() * (slideCount - 1);
			$('#slidewrapper').css({
				'transform': 'translate(' + translateWidth + 'px, 0)',
				'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
				'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
			});
			slideNow = slideCount;
		} else {
			translateWidth = -$('#viewport').width() * (slideNow - 2);
			$('#slidewrapper').css({
				'transform': 'translate(' + translateWidth + 'px, 0)',
				'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
				'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
			});
			slideNow--;
		}
	}
// -----------------------------------------------------------------------------END_SLIDER




});

