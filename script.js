//Aos
AOS.init({
  duration: 3000,
});
// swipper
var swiper = new Swiper('.portofolio-swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
