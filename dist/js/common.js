(function ($) {
	$( document ).ready(function() {

		$(window).scroll(function(e){

			var $sections = $('section');

			$sections.each(function(i,el){
				var top  = $(el).offset().top-200;
				var bottom = top +$(el).height();
				var scroll = $(window).scrollTop();
				var id = $(el).attr('id');
				if( scroll > top && scroll < bottom){
					$('li.active').removeClass('active');

					$('a[href="#'+id+'"]').parent('li').addClass('active');

				}
			})
		});

		$('a[href^="#"]').click(function(){
			var el = $(this).attr('href');

			$('body').animate({scrollTop: ($(el).offset().top)-100}, 1500);

			return false;
		});


	});
})(jQuery);