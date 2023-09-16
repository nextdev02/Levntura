// Sticky Header

const header = document.querySelector("header")


window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 13);
    console.log(this.window.scrollY);
    
});



// Client Logo Slider

let clientswiper = new Swiper(".clients-slider", {
  slidesPerView: 6,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
});


// Gallery Slider

let galleryswiper = new Swiper(".gallery-slider", {
  slidesPerView: 2.5,
  spaceBetween: 1,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
});


// Careers Slider

let careerswiper = new Swiper(".careers-slider", {
  slidesPerView: 3.5,
  spaceBetween: 1,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
});


// Careers Slider

let workswiper = new Swiper(".work-slider", {
  slidesPerView: 3.5,
  spaceBetween: 1,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
});


// Service Slider

let serviceswiper = new Swiper(".service-slider", {
  slidesPerView: 2.6,
  spaceBetween: 1,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
});
