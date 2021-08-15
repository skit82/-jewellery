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
