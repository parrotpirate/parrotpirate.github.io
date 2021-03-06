jQuery(document).ready(function($) {
	
	// *Menu display toggle for mobile format*
	$('.nav-display-button button').click(function(e) {
	    /* Act on the event */
	    e.preventDefault();
	    $('.nav-wrapper').slideToggle('fast');
	});

	// *Fix for menu toggle state when window is resized to desktop.*
	$(window).resize(function(event) {
	    /* Act on the event */
	    if ($(window).width() > 800) {
	        $('.nav-wrapper').css('display', 'inline-block');
	    }
	});

	// *Fix for menu toggle state when window is resized to mobile.*
	$(window).resize(function(event) {
	    /* Act on the event */
	    if ($(window).width() <= 800) {
	        $('.nav-wrapper').css('display', 'none');
	    }
	});

});