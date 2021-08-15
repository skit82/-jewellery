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
