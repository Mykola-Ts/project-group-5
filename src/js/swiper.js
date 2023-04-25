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
        '<span class="' +
        paginationLine +
        '"></span>' +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },
  },
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
});
