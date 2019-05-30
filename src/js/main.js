


'use strict';

(function(){

let buttonEL      = document.querySelector('#btn'),
	  modalEL       = document.querySelector('.modal'),
    buttonCloseEL = document.querySelector('#btn-close');

buttonEL.addEventListener('click', function(){
	modalEL.classList.add('modal_activ');
	setTimeout(closeModal, 5000);

}); 

let closeModal = function() {
		modalEL.classList.remove('modal_activ');
	};

	
buttonCloseEL.addEventListener('click', function(){
	modalEL.classList.remove('modal_activ');
});    



})();