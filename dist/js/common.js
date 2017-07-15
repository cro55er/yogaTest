$( document ).ready(function() {
			$(window).scroll(function(e){
				parallax();
			});
			function parallax(){
				var scrolled = $(window).scrollTop();
				$('.bg-features').css('background-position-y', 130 - (scrolled*0.035) + 'px');
			}
});