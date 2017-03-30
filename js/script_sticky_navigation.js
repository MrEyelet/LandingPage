$(function() {
	/*var NavY = $('nav').offset().top;
	 
	function stickyNav(){
		var ScrollY = $(window).scrollTop();
		  
		if (ScrollY > NavY) { 
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky'); 
		}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
		stickyNav();
	});
*/
	$(window).scroll(function() {
		var navHeight = $(window).height();//this measure height of the whole window
    	if  ($(window).scrollTop() > navHeight ) {//scrollTop is vertical scrollbar position from the top
      		$('nav').addClass('sticky');
    	} else {
      		$('nav').removeClass('sticky');
    	}
  	});
  //alert($(window).height());
  //alert($(window).scrollTop());
});