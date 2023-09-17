// Sticky Header

const header = document.querySelector("header")

window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 13);
    console.log(this.window.scrollY);
    
});

// Header For Mobile
const toggleBtn = document.querySelector('.toggle_btn');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtn.addEventListener('click', function () {
  console.log('Button clicked'); // Add this line
  dropdownMenu.classList.toggle('open');
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
  slidesPerView: 2.3,
  spaceBetween: 1,
  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
  breakpoints: {

        // When screen width is greater than or equal to 768 pixels
        768: {
          slidesPerView: 1.5, // Display 3 slides per view
        },
        
    // When screen width is greater than or equal to 768 pixels
    768: {
      slidesPerView: 1.5, // Display 3 slides per view
    },
    // When screen width is greater than or equal to 1024 pixels
    1090: {
      slidesPerView: 1, // Display 4 slides per view
    },

    1150: {
      slidesPerView: 2, // Display 4 slides per view
    },

    1224: {
      slidesPerView: 2.3, // Display 4 slides per view
    },
  },
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


// Work Slider

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
  keyboard: true,
  breakpoints: {
    
    
  },
});