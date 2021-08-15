"use strict";

(function () {

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
  var mediaTablet = window.matchMedia("(max-width: 1023px");

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
    removeClass(header, "page-bg");
    removeClass(menuLogo, "page-header__logo--active");
    removeClass(menuIcon, "page-header__top-burger--active");
    removeClass(menuCart, "page-header__cart-image--active");
  }

  var showMenu = function () {
    toggleClass(headerSearchForm, "page-header__top-form--active");
    toggleClass(login, "page-header__personal-login--active");
    toggleClass(headerMenu, "main-nav--active");
    toggleClass(header, "page-bg");
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
})();
