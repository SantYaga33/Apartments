
$(document).ready(function() {
	
	let buttonEL        = $('#btn');
	let modalEL         = $('.modal');
	let buttonCloselEL  = $('#btn-close');
	let arrowupEl       = $('.arrowup');

buttonEL.on('click', function() {
	modalEL.addClass('modal_activ');
});	 

buttonCloselEL.on('click', function() {
	modalEL.removeClass('modal_activ');
});	

arrowupEl.fadeOut();

$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		arrowupEl.fadeIn();
	} else {
		arrowupEl.fadeOut();
	}	

});

arrowupEl.click(function() {
  $('html, body').animate({ scrollTop: 0 }, 600);
  return false;
 });

});

// == слайдер ==

$(document).ready(function(){
  $('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		// autoplay: true,
		prevArrow: $('.slide__left-arrow'),
		nextArrow: $('.slide__rigth-arrow'),
		 responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
    },
  ]
  });
});









