jQuery(document).ready(function($) {
	
	// *Scroll to portfolio section when button is clicked*
	$('.scroll-button').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('.portfolio').offset().top}, '0.3s');
	});

	// *Menu display toggle for mobile format*
	$('.nav-display-button button').click(function(e) {
		/* Act on the event */
		e.preventDefault();
		$('.nav-wrapper').slideToggle('fast');
	});

	$(window).resize(function(event) {
		/* Act on the event */
		if ($(window).width() > 800) {
			$('.nav-wrapper').css('display', 'inline-block');
		}
	});

	$(window).resize(function(event) {
		/* Act on the event */
		if ($(window).width() <= 800) {
			$('.nav-wrapper').css('display', 'none');
		}
	});
	
});