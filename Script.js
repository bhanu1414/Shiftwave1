const swiper = new Swiper('.slider-wrapper', {

    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,          
    centeredSlides: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 10,
  });