var showPopup = function(target){
    target.classList.add('is-active');
}
var closePopup = function(target){
    target.classList.remove('is-active');
}

const body = document.querySelector('body');
var toggleScroll = function(){
    body.classList.toggle('no-scroll');
}
const popup_Open = document.querySelector('[data-popup-dev]');    // кнопка разработчики
const popup_dev_open = document.querySelector('[data-popDev]');   // сам попап
const popup_dev_close = document.querySelector('[data-popDev-close]');

const popup_Sign = document.querySelector('[data-popup-sign]');    // кнопка войти
const popup_sign_open = document.querySelector('[data-popSign]');   // сам попап
const popup_sign_close = document.querySelector('[data-popSign-close]');

popup_Open.addEventListener('click', function(e){
    e.preventDefault();

    showPopup(popup_dev_open);
    toggleScroll();
})
popup_dev_close.addEventListener('click', function(e){
    e.preventDefault();

    closePopup(popup_dev_open);
})

popup_Sign.addEventListener('click', function(e){
    e.preventDefault();

    showPopup(popup_sign_open);
    toggleScroll();
})
popup_sign_close.addEventListener('click', function(e){
    e.preventDefault();

    closePopup(popup_sign_open);
})


