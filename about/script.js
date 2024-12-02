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



// script.js
const track = document.querySelector('.carousel-track');
let currentPosition = 0;

function moveCarousel() {
  const brandWidth = track.querySelector('.brand').offsetWidth;
  const gap = 15; // Space between cards
  const moveDistance = brandWidth + gap;

  // Move the carousel left
  currentPosition -= moveDistance;

  // Reset carousel to the start when it reaches the end
  if (Math.abs(currentPosition) >= track.scrollWidth / 2) {
    currentPosition = 0;
  }

  // Apply transform with a smooth transition
  track.style.transform = `translateX(${currentPosition}px)`;
}

// Clone elements for seamless looping
const brands = document.querySelectorAll('.brand');
brands.forEach((brand) => {
  const clone = brand.cloneNode(true);
  track.appendChild(clone);
});

// Start the carousel with a pause between movements
setInterval(moveCarousel, 2000); // Adjust interval (ms) for pause timing
