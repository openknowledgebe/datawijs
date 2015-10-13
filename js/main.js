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

    /* Initiate slider for press page */
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: false,
        cssEase: 'linear'
    });

    /* Define slide-down for extra info on press page */
    $('#meer-weten').on('click', function() {
        $(this).next('div').slideToggle(400);
        $(this).find('i').toggleClass('fa-rotate-90');
    });
});
