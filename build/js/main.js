"use strict";

(function () {

  var mainSlider = document.querySelector(".new__menu-slider");
  var accordionItems = document.querySelectorAll('.accordion');
  var accordionPanes = document.querySelectorAll('.accordion__pane');
  var header = document.querySelector(".page-header");
  var login = document.querySelector(".page-header__personal-login");
  var headerMenu = document.querySelector(".main-nav");
  var headerSearchForm = document.querySelector(".page-header__top form");
  var menuButton = document.querySelector(".page-header__top-toggle");
  var menuIcon = document.querySelector(".page-header__top-burger");
  var menuLogo = document.querySelector(".page-header__logo");
  var menuCart = document.querySelector(".page-header__cart-image");
  var menuSearch = document.querySelector(".page-header__top-form");
  var body = document.querySelector("body");

  var toggleClass = function (element, selector) {
    element.classList.toggle(selector);
  };

  var removeClass = function (element, selector) {
    element.classList.remove(selector);
  };

  var addClass = function (element, selector) {
    element.classList.add(selector);
  };

  var hideMobileMenu = function () {
    removeClass(headerSearchForm, "page-header__top-form--active");
    removeClass(login, "page-header__personal-login--active");
    removeClass(headerMenu, "main-nav--active");
    removeClass(header, "page-header__bg");
    removeClass(menuLogo, "page-header__logo--active");
    removeClass(menuIcon, "page-header__top-burger--active");
    removeClass(menuCart, "page-header__cart-image--active");
  }

  var showMenu = function () {
    toggleClass(headerSearchForm, "page-header__top-form--active");
    toggleClass(login, "page-header__personal-login--active");
    toggleClass(headerMenu, "main-nav--active");
    toggleClass(header, "page-header__bg");
    toggleClass(menuLogo, "page-header__logo--active");
    toggleClass(menuIcon, "page-header__top-burger--active");
    toggleClass(menuCart, "page-header__cart-image--active");
    toggleClass(menuSearch, "page-header__top-form--active");
    toggleClass(body, "body__overflow--menu");
  }

  hideMobileMenu();

  menuButton.addEventListener("click", function () {
    showMenu();
  })

  var hidePane = function (button, pane) {
    button.classList.add('accordion__toggle--inactive');
    pane.classList.add('accordion__pane--hidden');
  };

  var showPane = function (button, pane) {
    button.classList.remove('accordion__toggle--inactive');
    pane.classList.remove('accordion__pane--hidden');
  };

  var toggleAccordion = function (evt) {
    Array.prototype.forEach.call(accordionPanes, function (accordionPane) {
      var button = accordionPane.closest('.accordion').querySelector('.accordion__toggle');
      if (button === evt.target && !button.classList.contains('accordion__toggle--inactive') || button !== evt.target) {
        hidePane(button, accordionPane);
      } else if (button === evt.target) {
        showPane(button, accordionPane);
      }
    });
  };

  Array.prototype.forEach.call(accordionItems, function (accordion) {
    var accordionToggleButton = accordion.querySelector('.accordion__toggle');
    var accordionPane = accordion.querySelector('.accordion__pane');
    hidePane(accordionToggleButton, accordionPane);
    accordionToggleButton.addEventListener('click', toggleAccordion);
  });

  if (mainSlider) {
    $(document).ready(function () {
      $('.new__list').slick({
        dots: true,
        customPaging: function (slider, i) { return '<a>' + (i + 1) + '</a>' },
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        prevArrow: ".new__button-left",
        nextArrow: ".new__button-right",
        responsive: [
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              customPaging: function (slider, i) { return '<p>' + (i + 1) + (" of 6") + '</p>' },
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false
            }
          }
        ]
      });
    });
  }
})();
