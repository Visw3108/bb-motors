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




document.addEventListener("DOMContentLoaded", function() {
  const counters = document.querySelectorAll('.strong');

  const countUp = (element) => {
    const target = parseInt(element.getAttribute('data-count'));
    let current = 0;
    const increment = target / 100; // Adjust this for speed

    const updateCounter = () => {
      if (current < target) {
        current += increment;
        element.textContent = Math.floor(current) + "+";
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target + "+";
      }
    };

    updateCounter();
  };

  const isInView = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  const handleScroll = () => {
    counters.forEach((counter) => {
      if (isInView(counter) && !counter.classList.contains('counted')) {
        counter.classList.add('counted');
        countUp(counter);
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check on page load in case it's already in view
});



/* HERO */


// Content data with images
const contentArray = [
  {
    subtitle: "GROWTH ACCELERATOR",
    title: "Explore The Latest Collection",
    text: "Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien lacus. Etiam molestie justo neque, in convallis massa tempus in.",
    image: "./assets/images/3919.jpg",
  },
  {
    subtitle: "NEW ARRIVALS",
    title: "Discover Our Exclusive Pieces",
    text: "Curabitur sit amet lectus ac turpis fringilla ultrices. Aliquam erat volutpat.",
    image: "./assets/images/about-us-banner.jpg",
  },
  {
    subtitle: "LIMITED EDITION",
    title: "Get Yours Before They're Gone",
    text: "Suspendisse potenti. Nullam tincidunt, arcu vel mattis sagittis, nisi elit feugiat elit.",
    image: "./assets/images/footer-bg.jpg",
  },
];

let currentIndex = 0;

function changeHeroContent() {
  const heroSection = document.querySelector('.home-hero');
  const heroContent = document.getElementById('heroContent');
  const heroImage = document.getElementById('heroImage');

  // Remove the active class to trigger fade-out effect
  heroSection.classList.remove('active');

  // Wait for the fade-out animation to complete before updating content
  setTimeout(() => {
    // Update content
    heroContent.querySelector('.home-hero-subtitle').textContent = contentArray[currentIndex].subtitle;
    heroContent.querySelector('.home-hero-title').textContent = contentArray[currentIndex].title;
    heroContent.querySelector('.home-hero-text').textContent = contentArray[currentIndex].text;

    // Update image
    heroImage.src = contentArray[currentIndex].image;

    // Add the active class to trigger fade-in effect
    heroSection.classList.add('active');

    // Cycle to the next content
    currentIndex = (currentIndex + 1) % contentArray.length;
  }, 500); // Wait for fade-out transition (800ms) to complete
}

// Run changeHeroContent on page load and set interval
document.addEventListener("DOMContentLoaded", () => {
  changeHeroContent();
  setInterval(changeHeroContent, 5000); // Change content every 5 seconds
});