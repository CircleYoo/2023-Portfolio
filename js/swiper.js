// 0725-swiper.js
const swiper = new Swiper(".swiper",  {
  loop: true,
  autoplay: {
    delay: 3000
  },
  slidesPerView: 3,
  // freeMode: true
  spaceBetween: 20,
  // centeredSlides: true,
  navigation : {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: 'fraction'
  },
  breakpoints: {
    480: {slidesPerView: 1},
    768: {slidesPerView: 2},
    1024: {slidesPerView: 3},
    1200: {slidesPerView: 4}
  }
})