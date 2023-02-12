"use strict";

const toggleButton = document.querySelector(".menu-button");
const nav = document.getElementById("nav");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const hiddenImages = document.querySelectorAll(".hidden");

// Navigation toggle button
toggleButton.addEventListener("click", function () {
  nav.classList.toggle("active");

  if (toggleNav.innerText === "Menu") {
    toggleNav.innerText = "Close Menu";
  } else toggleNav.innerText = "Menu";
});

// Navigation closing on pressing the escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !nav.classList.contains("hidden")) {
    nav.classList.toggle("hidden");
    toggleNav.innerText = "Menu";
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
nav.addEventListener("mouseover", function (event) {
  if (event.target.matches(".nav-link")) {
    hiddenImages.forEach((el, index) => {
      setTimeout(() => {
        el.classList.remove("hidden");
      }, 150 * index);
    });
  }
});

nav.addEventListener("mouseout", function (event) {
  if (event.target.matches(".nav-link")) {
    hiddenImages.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("hidden");
      }, 150 * index);
    });
  }
});
