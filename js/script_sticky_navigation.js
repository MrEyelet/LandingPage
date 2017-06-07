$(function() {

	$(window).scroll(function() {
		var navHeight = $(window).height();//this measure height of the whole window
    	if  ($(window).scrollTop() > navHeight ) {//scrollTop is vertical scrollbar position from the top
      		$('nav').addClass('sticky');
    	} else {
      		$('nav').removeClass('sticky');
    	}
  	});

});