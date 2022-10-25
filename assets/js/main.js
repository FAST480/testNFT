const inputs = document.querySelectorAll('input[type=number]');

inputs.forEach((elem) =>{
	elem.addEventListener("keyup", ()=>{
		let startVal = elem.value;
		if(Math.sign(startVal) == -1)
		{
			elem.value = Math.abs(startVal);
		}
	});

});

const userButton = document.querySelector('.header__user__arrow');
const logoutBlock = document.querySelector('.header__user__logout');

userButton.addEventListener("click", ()=>{
	logoutBlock.classList.toggle('active');
});




const tabButtons = document.querySelectorAll('.sidebar__list__link');
const tabDescriptions = document.querySelectorAll('.main__body');
const tabHeadline = document.querySelector('.header__title h2');



const changeContent = (array, value) => {

	array.forEach((elem) => {
		if(elem.dataset.tabsField === value)
		{
			elem.classList.remove('hidden');
		} else {
			elem.classList.add('hidden');
		}
	});

}

tabButtons.forEach(function(tabButton){
	tabButton.firstChild.addEventListener('click', (event) => {
		const dataValue = tabButton.firstChild.dataset.tabsHandler;

		changeContent(tabDescriptions, dataValue);
		tabHeadline.innerText = tabButton.firstChild.text;

		tabButtons.forEach((btn) =>{
			if(btn.firstChild === event.target){
				btn.classList.add('active');
			} else{
				btn.classList.remove('active');
			}
		});
	});
});