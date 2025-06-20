import Swiper from 'swiper';
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCube,
  Keyboard,
} from 'swiper/modules';

const swiper = new Swiper('.hero-swiper', {
  modules: [Navigation, Pagination, Autoplay, EffectCube, Keyboard],

  effect: 'cube',
  cubeEffect: {
    shadow: false,
  },
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  keyboard: { enabled: true },
  
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        '<span class="pagination-line"></span>' +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },

    formatFractionCurrent: function (number) {
      return number < 10 ? '0' + number : number;
    },
    formatFractionTotal: function (number) {
      return number < 10 ? '0' + number : number;
    },
  },

  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
});
