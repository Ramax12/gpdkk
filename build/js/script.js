'use strict';

(function () {
  var ESC_KEYCODE = 27;

  //burger menu
  var mainNav = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  mainNav.classList.add('main-nav--opened');
  navToggle.addEventListener('click', function() {
    if (mainNav.classList.contains('main-nav--closed')) {
      mainNav.classList.remove('main-nav--closed');
      mainNav.classList.add('main-nav--opened');
    } else {
      mainNav.classList.add('main-nav--closed');
      mainNav.classList.remove('main-nav--opened');
    }
  });

  var containerBasketBtn = document.querySelectorAll('.items__icon-basket');
  var containerOrderBtn = document.querySelectorAll('.featured__order-btn');
  var containerModal = document.querySelector('.modal');
  
  //open modal_content
  [].forEach.call(containerBasketBtn, function (item) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      containerModal.classList.add('modal_show');
    });
  });
  
  //open modal_content
  [].forEach.call(containerOrderBtn, function (item) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      containerModal.classList.add('modal_show');
    });
  });

  //close modal_content(click on modal)
  window.addEventListener('click', function (evt) {
    if (evt.target == containerModal) {
      if (containerModal.classList.contains('modal_show')){
        containerModal.classList.remove('modal_show');
      }
    }
  });

  //close modal_content(push on ESC)
  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      if (containerModal.classList.contains('modal_show')){
        containerModal.classList.remove('modal_show');
      }
    }
  });
})();