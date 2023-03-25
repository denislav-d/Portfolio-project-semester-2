"use strict";

const toggleButton = document.querySelector(".menu-button");
const nav = document.getElementById("nav");

// Navigation toggle button
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  nav.classList.toggle("active");
});

// Close navigation when clicking on each link (had to do this because of anchors on the same page)
const navLinks = Array.from(document.querySelectorAll(".nav-link"));

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    nav.classList.remove("active");
  });
});

// Navigation closing on pressing the escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("active")) {
    toggleButton.classList.toggle("active");
    nav.classList.toggle("active");
  }
});

// Navigation list hover effect
const handleHover = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    link.style.transition = "0.6s";
    const siblings = link.closest("#nav").querySelectorAll(".nav-link");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Images appearing on hovering each of the navigation list options
const hiddenImages = {
  "about-link": document.querySelectorAll(".hidden-about-link"),
  "projects-link": document.querySelectorAll(".hidden-projects-link"),
  "modules-link": document.querySelectorAll(".hidden-modules-link"),
};

nav.addEventListener("mouseover", function (event) {
  const target = event.target;
  const targetClass = target.classList[1];
  const images = hiddenImages[targetClass];
  console.log(targetClass);

  if (images) {
    images.forEach((el, index) => {
      setTimeout(() => {
        el.classList.remove(`hidden-${targetClass}`);
      }, 150 * index);
    });
  }
});

nav.addEventListener("mouseout", function (event) {
  const target = event.target;
  const targetClass = target.classList[1];
  const images = hiddenImages[targetClass];

  if (images) {
    images.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add(`hidden-${targetClass}`);
      }, 150 * index);
    });
  }
});

// Appear on scroll
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.add("animate");
        return;
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".animation").forEach(function (i) {
  if (i) {
    observer.observe(i);
  }
});

// Disappearing name title in the header on scroll to not block the content
const nameTitle = document.querySelector(".name-title");
let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function () {
  let currentScrollPos = window.scrollY;
  prevScrollPos > currentScrollPos
    ? nameTitle.classList.remove("scroll")
    : nameTitle.classList.add("scroll");

  prevScrollPos = currentScrollPos;
});

// Intro animation
const intro = document.querySelector(".intro");
const logo = document.querySelector(".intro-header");
const logoSpan = document.querySelectorAll(".intro-span");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (index + 1) * 400);
    });

    setTimeout(() => {
      logoSpan.forEach((span, index) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (index + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 2300);
  });
});
