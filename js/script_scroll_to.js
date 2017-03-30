$(function() { 
	$('a[href^="#"]').click(function(event) {
		event.preventDefault();
		var target = $($(this).attr('href')),
			offset = 0;

		if ($(this).attr('data-menu')) {
			if ($('nav').hasClass('sticky')) {
				offset = 50;
			} else {
				offset = 150;
			}
		}
		
		if(target.length ){
			$('html, body').animate({
				scrollTop: target.offset().top - offset
			}, 1000);
		}
		if($(document).width() <= 767) {
			$('li').slideUp(1000);
			$('.hamburger-menu').fadeIn(500);
			$('.icon-close').hide();
		}
	});
});