"use strict";

const toggleNav = document.getElementById("toggleNav");
const nav = document.getElementById("nav");
const main = document.getElementById("main");

toggleNav.addEventListener("click", () => {
  nav.classList.toggle("hidden");
  nav.classList.toggle("shown");

  if (toggleNav.innerText === "Menu") {
    toggleNav.innerText = "Close Menu";
  } else toggleNav.innerText = "Menu";
});

// Page navigation
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
