$(function() {
	$('.scroll').on('click', function(event) {
		event.preventDefault();
		var target = "#" + $(this).data('target');
		var offs = $(target).offset().top;

		$('html, body').animate({
			scrollTop: offs
		}, 700);
	});

	$('.scrollTop').on('click', function(event) {
		event.preventDefault();
		$('body').animate({
			scrollTop: $('body').offset().top
		}, 700);
	});

	if (!Modernizr.svg) {
		$('img[src*="svg"]').attr('src', function() {
			return $(this).attr('src').replace('.svg', '.png');
		});
	}

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: false,
        cssEase: 'linear'
    });
});
