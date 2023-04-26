const swiper = new Swiper('.hero-swiper', {
  effect: 'fade',

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


// const swiper = new Swiper('.hero-swiper', {
//   effect: 'fade',

//   slidesPerView: 1,
//   spaceBetween: 10,
//   loop: true,
//   keyboard: { enabled: true },
//   navigation: {
//     nextEl: '.button-next',
//     prevEl: '.button-prev',
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'fraction',
//     renderFraction: function (currentClass, totalClass) {
//       return (
//         '<span class="' +
//         currentClass +
//         '"></span>' +
//         '<span class="' +
//         paginationLine +
//         '"></span>' +
//         '<span class="' +
//         totalClass +
//         '"></span>'
//       );
//     },
//   },
// });