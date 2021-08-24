"use strict";

(function () {

  var modalCart = document.querySelector(".modal-cart");
  var modalCartClose = document.querySelector(".modal-cart__close");
  var modalButton = document.querySelector(".modal-cart__counter button");
  var addButton = document.querySelector(".card__add");
  var loginForm = document.querySelector(".login");
  var isStorageSupport = true;
  var storage = "";
  var body = document.querySelector("body");
  var pageMask = document.querySelector(".mask");
  var loginOverlay = document.querySelector(".overlay");
  var mediaTablet = window.matchMedia("(max-width: 1023px");

  try {
    storage = localStorage.getItem("cart");
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

  if (modalCart) {
    addButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      addClass(modalCart, "modal-cart--active");
      if (storage) {
        modalButton.value = localStorage.getItem("cart");
      }
      addClass(body, "body__overflow");
      addClass(pageMask, "mask-active");
      addClass(loginOverlay, "overlay-active");
      modalButton.focus();
    });
  }

  var closeCart = function () {
    removeClass(modalCart, "modal-cart--active");
    removeClass(body, "body__overflow");
    removeClass(pageMask, "mask-active");
    removeClass(loginOverlay, "overlay-active");
  }

  if (modalCartClose) {
    modalCartClose.addEventListener("click", function () {
      closeCart();
    });

    document.addEventListener("keydown", function (evt) {
      if (evt.key === "Escape") {
        evt.preventDefault();
        if (modalCart.classList.contains("modal-cart--active")) {
          closeCart();
        }
      }
    });

    window.onclick = function (evt) {
      if (evt.target == loginOverlay) {
        closeCart();
        removeClass(loginForm, "login--active");
      }
    }
  }
})();
