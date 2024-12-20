'use strict';



/**
 * MOBILE NAVBAR TOGGLE
 */




// JavaScript for toggling the 'scrolled' class on header
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// JavaScript for navbar toggle
const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");

navToggler.addEventListener("click", () => {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
});







