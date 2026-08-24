const button = document.querySelector('.header__button')!
const nav = document.querySelector('.header__wrapper')!
button.addEventListener('click', ()=> {
    button.classList.toggle('header__button-active')
    nav.classList.toggle('header__navigation')
})