const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-pop');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListner('click', ()=> {
	wrapper.classList.add('active');
});

loginLink.addEventListner('click', ()=> {
	wrapper.classList.remove('active');
});

btnPopup.addEventListner('click', ()=> {
	wrapper.classList.add('active-popup');
});

iconClose.addEventListner('click', ()=> {
	wrapper.classList.remove('active-popup');
});