const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1, // Змінюй на 2 або 3 під свій дизайн на десктопі
  spaceBetween: 20,

  breakpoints: {
    // Наприклад, для екранів від 768px:
    768: {
      slidesPerView: 2,
    },
    // Для екранів від 1280px:
    1280: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },

  navigation: {
    prevEl: '.carousel-button.prev',
    nextEl: '.carousel-button.next',
  },
});
