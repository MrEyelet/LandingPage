$(function(){
	$('.hamburger-menu').click(function(){
		$('li').slideDown(500);
		$('.hamburger-menu').hide();
		$('.icon-close').fadeIn(500);
	});

	$('.icon-close').click(function() {
	    $('li').slideUp(500);
	    $('.hamburger-menu').fadeIn(500);
	    $('.icon-close').hide();
	});
});
