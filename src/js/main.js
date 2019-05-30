


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


// let type1 = 'Petr',
// 		type2 = 50,
// 		type3 = true,
// 		type4 = null,
// 		type5 = undefined,
// 		type6 = {},
// 		type7 = function(){};
		
// console.log('тип данных "Petr" = ' + typeof(type1));
// console.log('тип данных "50" = ' +typeof(type2));
// console.log('тип данных "true" = ' +typeof(type3));
// console.log('тип данных "null" = ' +typeof(type4));
// console.log('тип данных "undefined" = ' +typeof(type5));
// console.log('тип данных "{}" = ' +typeof(type6));
// console.log('тип данных "function(){}" = ' +typeof(type7));


let width  = 500,
		height = 400;
console.log('width = 500; height = 400; шаг итерации +10 к width');

let calculateArea = function() {
		for(let i = 0; i <=10 ; i++) {
			let area = width * height;
			console.log('Искомая площадь = ' + area);
			width += 10;
		}
};

calculateArea();


})();