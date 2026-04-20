/**
 * Live Terapimix – Main JavaScript
 * Smooth animations, mobile nav, scroll effects
 */

document.addEventListener('DOMContentLoaded', function () {
  // --- Mobile Navigation Toggle ---
  const navToggle = document.querySelector('.nav__toggle');
  const navLinks = document.querySelector('.nav__links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('nav__links--open');
    });
  }

  // --- Fade In on Scroll ---
  const fadeElements = document.querySelectorAll('.fade-in');

  function checkFade() {
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    fadeElements.forEach(function (el) {
      var elementTop = el.getBoundingClientRect().top + scrollTop;
      var triggerPoint = windowHeight * 0.85;

      if (scrollTop + windowHeight > elementTop) {
        el.classList.add('visible');
      }
    });
  }

  // Run on load and scroll
  checkFade();
  window.addEventListener('scroll', checkFade);

  // --- Smooth Scroll for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // --- Active Nav Link Highlight ---
  var currentPath = window.location.pathname;
  var navLinksList = document.querySelectorAll('.nav__link');

  navLinksList.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href && currentPath.includes(href) && href !== '/') {
        link.classList.add('nav__link--active');
      } else if (href === '/' && currentPath === '/') {
        link.classList.add('nav__link--active');
      }
    });
});
