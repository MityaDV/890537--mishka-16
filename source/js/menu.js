var navMain = document.querySelector('.header__navigation');
var navToggle = document.querySelector('.header__toggle');

navMain.classList.remove('header__navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header__navigation--closed')) {
    navMain.classList.remove('header__navigation--closed');
    navMain.classList.add('header__navigation--opened');
  } else {
    navMain.classList.add('header__navigation--closed');
    navMain.classList.remove('header__navigation--opened');
  }
});
