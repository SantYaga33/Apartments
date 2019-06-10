new WOW().init();

$(document).ready(function() {
	
// == валидация формы ==
$('#brif-form').validate({
  errorClass: "invalid",
  validClass: "success",
  rules: {
    phonebrif: "required",
    usernamebrif: {
      required: true,
      minlength: 2,
      maxlength: 15,
    }, 
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    usernamebrif: {
      required: "Заполните поле",
      minlength:"Минимум 2 символа",
      maxlength:"Максимум 15 символов",

    },
    phonebrif:       "Заполните поле",
    email: {
    required:    "Заполните поле",
    email:       "Введите корректный email"
    }
  }

}); 

$('#offer-form').validate({
  errorClass: "invalid",
  validClass: "success",
  rules: {
    phone:      "required",
    username: {
      required: true,
      minlength: 2,
      maxlength: 15,
    }, 
  },
  messages: {
    username: {
      required: "Заполните поле",
      minlength:"Минимум 2 символа",
      maxlength:"Максимум 15 символов",
    },
    phone:      "Заполните поле",
  }
});

$('#modal-form').validate({
  errorClass: "invalid",
  validClass: "success",
  rules: {
    phonemodal:      "required",
    namemodal: {
      required: true,
      minlength: 2,
      maxlength: 15,
    }, 
  },
  messages: {
   namemodal: {
      required: "Заполните поле",
      minlength:"Минимум 2 символа",
      maxlength:"Максимум 15 символов",
    },
    phonemodal:      "Заполните поле",
  }
});



// == валидация номера телефона ==

$('.phone').mask('8 (999) 999-99-99');





// == модальное окно ==

	let buttonEL        = $('#btn'),
	    modalEL         = $('.modal'),
	    buttonCloselEL  = $('#btn-close'),
	    arrowupEl       = $('.arrowup');

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
$(document).ready(function() {

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







