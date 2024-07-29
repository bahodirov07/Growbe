const navBurger = document.querySelector(".nav__burger")
const navBurgerLine = document.querySelector(".nav__burger-line")
const navMenu = document.querySelector(".nav__menu")
const body = document.querySelector("body")
const carousel = new Swiper(".carousel", {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
        slidesPerView: "1.2",
        spaceBetween: 30,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
})

// const carousel2 = new Swiper(".carousel2", {
//     slidesPerView: "auto",
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
// })

navBurger.addEventListener("click", function () {
    navBurgerLine.classList.toggle("active")
    navMenu.classList.toggle("active")
})

body.addEventListener("click", function (event) {
    if(event.currentTarget == event.target) navMenu.classList.add("menuOff")
    console.log("worked");
})