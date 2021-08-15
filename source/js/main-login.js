"use strict";

(function () {

  var login = document.querySelector(".page-header__personal-login");
  var loginForm = document.querySelector(".login");
  var loginClose = document.querySelector(".login__close");
  var loginEmail = loginForm.querySelector("[name=mail]");
  var isStorageSupport = true;
  var storage = "";
  var body = document.querySelector("body");
  var pageMask = document.querySelector(".mask");
  var loginOverlay = document.querySelector(".overlay");
  var mediaTablet = window.matchMedia("(max-width: 1023px");

  try {
    storage = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }

  var toggleClass = function (element, selector) {
    element.classList.toggle(selector);
  };

  var removeClass = function (element, selector) {
    element.classList.remove(selector);
  };

  var addClass = function (element, selector) {
    element.classList.add(selector);
  };

  if (login) {
    login.addEventListener("click", function (evt) {
      evt.preventDefault();
      addClass(loginForm, "login--active");
      if (storage) {
        loginEmail.value = localStorage.getItem("email");
      }
      addClass(body, "body__overflow");
      addClass(pageMask, "mask-active");
      addClass(loginOverlay, "overlay-active");
      loginEmail.focus();
    });
  }

  var closeLogin = function () {
    removeClass(loginForm, "login--active");
    removeClass(body, "body__overflow");
    removeClass(pageMask, "mask-active");
    removeClass(loginOverlay, "overlay-active");
  }

  if (loginClose) {
    loginClose.addEventListener("click", function () {
      closeLogin();
    });

    document.addEventListener("keydown", function (evt) {
      if (evt.key === "Escape") {
        evt.preventDefault();
        if (loginForm.classList.contains("login--active")) {
          closeLogin();
        }
      }
    });

    window.onclick = function (evt) {
      if (evt.target == loginOverlay) {
        closeLogin();
      }
    }
  };
})();
