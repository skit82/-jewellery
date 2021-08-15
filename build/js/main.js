"use strict";

(function () {

  var accordionItems = document.querySelectorAll(".accordion");
  var accordionPanes = document.querySelectorAll(".accordion__pane");

  var hidePane = function (button, pane) {
    button.classList.add("accordion__toggle--inactive");
    pane.classList.add("accordion__pane--hidden");
  };

  var showPane = function (button, pane) {
    button.classList.remove("accordion__toggle--inactive");
    pane.classList.remove("accordion__pane--hidden");
  };

  var toggleAccordion = function (evt) {
    Array.prototype.forEach.call(accordionPanes, function (accordionPane) {
      var button = accordionPane.closest(".accordion").querySelector(".accordion__toggle");
      if (button === evt.target && !button.classList.contains("accordion__toggle--inactive") || button !== evt.target) {
        hidePane(button, accordionPane);
      } else if (button === evt.target) {
        showPane(button, accordionPane);
      }
    });
  };

  Array.prototype.forEach.call(accordionItems, function (accordion) {
    var accordionToggleButton = accordion.querySelector(".accordion__toggle");
    var accordionPane = accordion.querySelector(".accordion__pane");
    hidePane(accordionToggleButton, accordionPane);
    accordionToggleButton.addEventListener("click", toggleAccordion);
  });
})();

"use strict";

(function () {

  var filter = document.querySelector(".filter");
  var filterOpen = document.querySelector(".filter__open");
  var filterOptions = document.querySelectorAll(".filter__options");
  var filterButtons = document.querySelectorAll(".filter__button");
  var filterTitles = document.querySelectorAll(".filter__title p");
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

  if (filter) {
    if (mediaTablet.matches) {
      addClass(filter, "filter--disable");
    }

    filterOpen.addEventListener("click", function () {
      toggleClass(filter, "filter--disable");
    });
  }

  var hideOptions = function () {
    for (var i = 1; i < filterOptions.length; i++) {
      removeClass(filterButtons[i], "filter__button--active");
      removeClass(filterOptions[i], "filter__options--active");
    }
  }

  if (filter) {
    hideOptions();
  }

  if (filter) {
    filterTitles.forEach(function (title, i) {
      title.addEventListener("click", function () {
        toggleClass(filterOptions[i], "filter__options--active");
        toggleClass(filterButtons[i], "filter__button--active");
      });
    });

    filterButtons.forEach(function (button, i) {
      button.addEventListener("click", function () {
        toggleClass(button, "filter__button--active");
        toggleClass(filterOptions[i], "filter__options--active");
      });
    });
  }
})();

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

"use strict";

(function () {

  var modalCart = document.querySelector(".modal-cart");
  var modalCartClose = document.querySelector(".modal-cart__close");
  var addButton = document.querySelector(".card__add");
  var loginForm = document.querySelector(".login");
  var body = document.querySelector("body");
  var pageMask = document.querySelector(".mask");
  var loginOverlay = document.querySelector(".overlay");
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

  if (modalCart) {
    addButton.addEventListener("click", function (evt) {
      evt.preventDefault();
      addClass(modalCart, "modal-cart--active");
      addClass(body, "body__overflow");
      addClass(pageMask, "mask-active");
      addClass(loginOverlay, "overlay-active");
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

"use strict";

(function () {

  var mainSlider = document.querySelector(".new__menu-slider");

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
