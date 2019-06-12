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

// подгрузка карты яндекс

YaMapsShown = false; 

 $(window).scroll(function() {
    if (!YaMapsShown){
     if($(window).scrollTop() + $(window).height() > $(document).height() - 600) {      
      showYaMaps();
      YaMapsShown = true;
     }
    }
 });
 

function showYaMaps(){
 var script   = document.createElement("script");
 script.type  = "text/javascript";
 script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2f6f5688299a6c7654150ce4b97e58be207fc31e40e14b651063ded431d324ee&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false";
 document.getElementById("map").appendChild(script);
};



// == валидация номера телефона ==

$('.phone').mask('8 (999) 999-99-99');

// // модальное окно благодарности
// var modalThanksEL = $('.modal-thanks '),
//   buttonThCloselEL  = $('.modal-thanks__close');

// $('.form').on('submit', function (event) {
//   event.preventDefault ();
//   event.stopImmediatePropagation ();
//     modalThanksEL.addClass('modal-thanks_activ');
// });  

// buttonThCloselEL.on('click', function() {
//   modalThanksEL.removeClass('modal-thanks_activ');
// }); 


// == модальное окно ==

var buttonEL        = $('#btn'),
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

// стрелка - скролл в топ сайта
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







