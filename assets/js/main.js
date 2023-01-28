let chevron = document.querySelectorAll(".chevron01");
let chevron01 = document.querySelectorAll(".chevron01 img");
let subMenu = document.querySelectorAll(".sub-nav-items");

chevron.forEach((item) => {
  item.addEventListener("click", showSubMenu);
});

function showSubMenu() {
  subMenu.forEach((item) => {
    if (item.style.display === "none") {
      item.style.display = "grid";
      chevron01.forEach((item) => {
        item.addEventListener("click", () => {
          item.style.transform = "rotate(0)";
        });
      });
    } else {
      item.style.display = "none";
      chevron01.forEach((item) => {
        item.addEventListener("click", () => {
          item.style.transform = "rotate(180deg)";
        });
      });
    }
  });
}

//navbar-sidebar

let navbarSidebar = document.querySelectorAll(".navbar-sidebar");
let menuHamburger = document.querySelectorAll(".menu-hamburger");
let closeNavbar = document.querySelectorAll(".close-navbar");
menuHamburger.forEach((item) => {
  item.addEventListener("click", showSubMenuSidebar);
});
closeNavbar.forEach((item) => {
  item.addEventListener("click", closeSubMenuSidebar);
});

function showSubMenuSidebar() {
  navbarSidebar.forEach((item) => {
    item.style.right = 0;
  });
}

function closeSubMenuSidebar() {
  navbarSidebar.forEach((item) => {
    item.style.right = "-400px";
  });
}



//carousel-learning-paths


var swiper = new Swiper(".mySwiper", {
  // loop:true,
  slidesPerView: "3",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    400: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    }},
});

