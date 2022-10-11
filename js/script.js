let hamb = document.querySelector(".header__hamb");
let navMenu = document.querySelector(".menu-list");
let headerMenu = document.querySelector(".header__menu");
let header = document.querySelector(".header");

hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamb.classList.toggle("active");
    navMenu.classList.toggle("active");
    headerMenu.classList.toggle("active");
    header.classList.toggle("active");
}

const navLink = document.querySelectorAll(".menu-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamb.classList.remove("active");
    navMenu.classList.remove("active");
    headerMenu.classList.remove("active");
    header.classList.remove("active");
}
