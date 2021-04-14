import { preloadImages } from './utils';
import LocomotiveScroll from 'locomotive-scroll';

const menuIcon = document.querySelector(".hamburger-menu")
const navbar = document.querySelector(".navbar")

menuIcon.addEventListener('click', () =>  {
  navbar.classList.toggle("change")
});

// Preload  images and fonts
Promise.all([preloadImages('img')]).then(() => {
  // Remove loader (loading class)
  setTimeout(function() {
    document.body.classList.remove('loading');
  }, 500);

  // Initialize the Locomotive scroll
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
  });

});

