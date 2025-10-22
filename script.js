// Swiper Initialization
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
});

// Mobile Navbar Toggle
const hamburger = document.getElementById("hamburger");
const navlist = document.getElementById("navlist");

hamburger.addEventListener("click", () => {
  navlist.classList.toggle("active");
});
