jQuery(document).ready(function($) {
	
	// *Scroll to portfolio section when button is clicked*
	$('.scroll-button').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('.portfolio').offset().top}, '0.3s');
	});
});